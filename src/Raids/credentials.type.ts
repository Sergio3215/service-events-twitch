import { ApiProperty } from "@nestjs/swagger";

export class credentials_type {
    @ApiProperty()
    channel: string;
    @ApiProperty()
    message: string;
}

export class credentials_type_clips {
    @ApiProperty()
    channel: string;
    @ApiProperty()
    broadcaster_id: string;
}
