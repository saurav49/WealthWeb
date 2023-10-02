import { Exclude } from 'class-transformer';
import { CompanyUser } from 'src/company-user/entities/company-user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  isin: string;

  @Column({ type: 'string', unique: true })
  ticker: string;

  @Column({ type: 'text' })
  companyName: string;

  @Column({ type: 'text' })
  websiteUrl: string;

  @Column({ type: 'text', nullable: true, default: null })
  tagline: string;

  @Column({ type: 'text', nullable: true, default: null })
  description: string;

  @Column({ type: 'string', nullable: true, default: null })
  brandColor: string;

  @Column({ type: 'boolean', default: false })
  logoUploaded: boolean;

  @Column({ type: 'boolean', default: false })
  bannerUploaded: boolean;

  @OneToMany(() => CompanyUser, (companyUser) => companyUser.company)
  companyUsers: CompanyUser[];

  @Exclude()
  @CreateDateColumn()
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn()
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn()
  deletedAt: Date;
}
