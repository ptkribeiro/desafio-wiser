import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Response } from 'express';
import { UrlDto } from './dtos/url.dto';
import { UrlEntity } from './entities/url.entity';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get(':url')
  async findByShortUrl(
    @Param('url') sUrl: string,
    @Res() res: Response,
  ): Promise<void> {
    const sUrlOnRepo = await this.urlsService.getByShortUrl(sUrl);
    res.redirect(sUrlOnRepo.longUrl.toString());
  }

  @Post('/encurtador')
  @ApiBody({ type: UrlDto })
  async create(@Body() url: UrlDto): Promise<UrlEntity> {
    return await this.urlsService.create(url);
  }
}
