import { Exclude } from 'class-transformer';
import { Company } from 'src/company/entities/company.entity';
import { EmailInviteStatus } from 'src/constants/enums';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CompanyUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'string' })
  firstName: string;

  @Column({ type: 'string' })
  lastName: string;

  @Column({ type: 'string', unique: true })
  email: string;

  @Column({ type: 'string' })
  designation: string;

  @Column({
    type: 'enum',
    enum: EmailInviteStatus,
    default: EmailInviteStatus.NOT_SENT,
  })
  emailInviteStatus: string;

  @ManyToOne(() => Company, (company) => company.companyUsers, {
    onDelete: 'CASCADE',
    cascade: ['remove', 'soft-remove'],
  })
  company: Company;

  @Column({ type: 'uuid' })
  companyId: string;

  @Exclude()
  @Column({ type: 'text', nullable: true, default: null })
  password: string;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @Exclude()
  @Column({ type: 'text', nullable: true, default: null })
  otp: string;

  @Exclude()
  @Column({ type: 'timestamp', nullable: true, default: null })
  lastLoginAt: string;

  @Column({ type: 'text', unique: true, nullable: true })
  phoneNumber: string;

  @Column({ type: 'boolean', default: false })
  isProfilePictureUploaded: boolean;

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
