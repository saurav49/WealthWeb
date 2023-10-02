import { Module } from '@nestjs/common';
import { CompanyUserController } from './company-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyUser } from './entities/company-user.entity';
import { Company } from 'src/company/entities/company.entity';
import { CompanyUserService } from './company-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyUser, Company])],
  controllers: [CompanyUserController],
  providers: [CompanyUserService],
})
export class CompanyUserModule {}
