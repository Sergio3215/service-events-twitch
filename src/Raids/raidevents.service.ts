import { Injectable } from '@nestjs/common';
import { credentials_type, credentials_type_clips } from './credentials.type';
import { Tw_Client } from '../TwitchConnect/index';

@Injectable()
export class RaidEventsService {

    async sendMessage(credentials: credentials_type) {
        const tw = new Tw_Client(credentials.channel);
        // await tw.ConnectVoid();
        tw.SendMessage(credentials.message);
        // await tw.DisconnectVoid();
    }

    async getClips(credentials: credentials_type_clips) {
        const tw = new Tw_Client(credentials.channel);
        return await tw.GetClips(credentials);
    }

}
