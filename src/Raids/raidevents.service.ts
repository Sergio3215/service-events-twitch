import { Injectable } from '@nestjs/common';
import { credentials_type } from './credentials.type';
import { Tw_Client } from '../TwitchConnect/index';

@Injectable()
export class RaidEventsService { 

    async sendMessage(credentials: credentials_type){
        const tw = new Tw_Client(credentials.identity,credentials.channel);
        // await tw.ConnectVoid();
        tw.SendMessage(credentials.message);
        // await tw.DisconnectVoid();
    }

}
