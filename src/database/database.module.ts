import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlEntity } from 'src/urls/entities/url.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'urlshortener',
      entities: [UrlEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
