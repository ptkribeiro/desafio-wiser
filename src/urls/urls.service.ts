import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UrlEntity } from './entities/url.entity';
import * as Expires from 'expires';
import * as Crypto from 'crypto-random-string';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(UrlEntity)
    private urlRepository: Repository<UrlEntity>,
  ) {}

  async findAll(): Promise<UrlEntity[]> {
    return await this.urlRepository.find();
  }

  async getByShortUrl(url: string): Promise<UrlEntity> {
    const urlOnRepo = await this.urlRepository.findOne({ shortUrl: url });
    if (!urlOnRepo) throw new NotFoundException('URL Not Found');

    if (Expires.expired(urlOnRepo.expirationDate)) {
      throw new BadRequestException('URL expiration date is over');
    }

    return urlOnRepo;
  }

  async create(url: UrlEntity): Promise<UrlEntity> {
    const { longUrl } = url;
    const cryptoUrl = Crypto({ length: 10, type: 'alphanumeric' });
    const newUrl = this.urlRepository.create({
      longUrl: longUrl,
      shortUrl: cryptoUrl,
      expirationDate: Expires.after('1 day'),
    });

    return await this.urlRepository.save(newUrl);
  }
}
