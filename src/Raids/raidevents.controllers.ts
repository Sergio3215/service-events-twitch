import { Controller, Post, Body, Get } from '@nestjs/common';
import { credentials_type, credentials_type_clips } from './credentials.type';
import { RaidEventsService } from './raidevents.service';

@Controller()
export class RaidEventsController {
    constructor(private readonly raidEventService: RaidEventsService) { }
    @Post('/send-message')
    sendMessageToRaidEvents(@Body() credentials: credentials_type): void {
        this.raidEventService.sendMessage(credentials)
    }

    @Post('/get-clips')
    getClipsToRaidEvents(@Body() credentials: credentials_type_clips): Object | null {
        return this.raidEventService.getClips(credentials);
    }
}
