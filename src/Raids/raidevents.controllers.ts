import { Controller, Post, Body } from '@nestjs/common';
import { credentials_type } from './credentials.type';
import { RaidEventsService } from './raidevents.service';

@Controller()
export class RaidEventsController {
    constructor(private readonly raidEventService: RaidEventsService) {}
    @Post('/send-message')
    sendMessageToRaidEvents(@Body() credentials: credentials_type): void {
       this.raidEventService.sendMessage(credentials)
    }
}
