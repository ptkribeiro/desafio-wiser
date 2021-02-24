import { ApiProperty } from '@nestjs/swagger';

export class UrlDto {
  id: number;

  @ApiProperty()
  longUrl: string;

  @ApiProperty({ required: false })
  shortUrl: string;

  @ApiProperty({ required: false })
  expirationDate: string;
}
