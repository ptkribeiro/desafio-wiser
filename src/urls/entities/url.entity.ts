import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('url')
export class UrlEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  longUrl: string;

  @Column()
  shortUrl: string;

  @Column()
  expirationDate: string;
}
