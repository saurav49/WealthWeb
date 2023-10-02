import { Module } from '@nestjs/common';
import { CompanyUserController } from './company-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyUser } from './entities/company-user.entity';
import { Company } from 'src/company/entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyUser, Company])],
  controllers: [CompanyUserController],
})
export class CompanyUserModule {}
