import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Response } from 'express';
import { UrlDto } from './dtos/url.dto';
import { UrlsService } from './urls.service';

@Controller()
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get(':url')
  async findByShortUrl(
    @Param('url') sUrl: string,
    @Res() res: Response,
  ): Promise<void> {
    const sUrlOnRepo = await this.urlsService.getByShortUrl(sUrl);
    res.redirect(sUrlOnRepo)
  }

  @Post('encurtador')
  @ApiBody({ type: UrlDto })
  async create(@Body() url: UrlDto, @Res() res: Response): Promise<void> {
    const _url = await this.urlsService.create(url);
    const newUrl = "localhost:8081/" + _url.shortUrl
    res.json({ newUrl: newUrl})
  }
}
