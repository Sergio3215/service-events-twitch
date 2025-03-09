const tmi = require('tmi.js');

/**
 * @param {identity} Objeto con las credenciales de la cuenta Twitch. Usando UserName (username) y OAuth Token (password).
 * @param {string[]} channels Lista de canales en los que se conectará el cliente.
 */
export class Tw_Client {

    private identity;
    private channels;

    constructor(identity, channels) {
        this.identity = identity;
        this.channels = channels;
        console.log(this.identity, this.channels)
    }

    async SendMessage(message) {
        try {
            const client = new tmi.Client({
                options: { debug: true },
                identity:this.identity,
                channels: ["#"+this.channels]
            });
            await client.connect();
            await client.say(this.channels, message);
        } catch (error) {
            console.log(error);
        }
    }
}