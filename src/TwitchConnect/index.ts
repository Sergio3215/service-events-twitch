import { ConfigService } from "@nestjs/config";
import { credentials_type_clips } from "src/Raids/credentials.type";

const tmi = require('tmi.js');

/**
 * @param {identity} Objeto con las credenciales de la cuenta Twitch. Usando UserName (username) y OAuth Token (password).
 * @param {string[]} channels Lista de canales en los que se conectará el cliente.
 */
export class Tw_Client {

    private identity;
    private channels;

    constructor(channels) {
        this.channels = channels;
        // console.log(this.channels)
    }

    async SendMessage(message) {
        try {
            const configService = new ConfigService();
            const username = configService.get<string>("username");
            const password = configService.get<string>("password");
            const client = new tmi.Client({
                // options: { debug: true },
                identity: {
                    username: username,
                    password: password
                },
                channels: ["#" + this.channels]
            });
            await client.connect();
            await client.say(this.channels, message);
        } catch (error) {
            console.log(error);
        }
    }

    async GetClips(credentials: credentials_type_clips) {
        try {

            const { channel } = credentials;


            const configService = new ConfigService();
            const clientId = configService.get<string>("client_id");
            const token = configService.get<string>("token");


            const ftchBroadcaster = await fetch(`https://api.twitch.tv/helix/users?login=${channel}`, {
                method: 'GET',
                headers: {
                    'Client-ID': clientId || "",
                    'Authorization': `Bearer ${token}`
                }
            });

            const broadcasterData = await ftchBroadcaster.json();
            const broadcaster_id = broadcasterData.data[0].id;
            // console.log(broadcaster_id);

            const response = await fetch(`https://api.twitch.tv/helix/clips?broadcaster_id=${broadcaster_id}&first=1`, {
                method: 'GET',
                headers: {
                    'Client-ID': clientId || "",
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const { data } = await response.json();

            if (data && data.length > 0) {
                const clip = data[0];
                return {
                    id: clip.id,
                    url: clip.url,
                    title: clip.title,
                    error: ""
                };
            }

            return {};

        } catch (error) {

            console.log(error);

            return {
                error: error.message
            };
        }
    }
}