import { ApiProperty } from "@nestjs/swagger";

class identity_type{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}

export class credentials_type{
    @ApiProperty({type: identity_type})
    identity: identity_type;
    @ApiProperty()
    channel: string;
    @ApiProperty()
    message:string;
}
