import { RaidEventsModule } from './Raids/raidevents.module';
import { RaidEventsController } from './Raids/raidevents.controllers';
import { Module } from '@nestjs/common';
import { RaidEventsService } from './Raids/raidevents.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    })],
  controllers:
    [RaidEventsController],
  providers: [RaidEventsService],
})
export class AppModule { }
