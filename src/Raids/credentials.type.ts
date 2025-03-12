import { ApiProperty } from "@nestjs/swagger";

export class credentials_type{
    @ApiProperty()
    channel: string;
    @ApiProperty()
    message:string;
}
