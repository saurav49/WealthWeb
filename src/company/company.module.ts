import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { CompanyUser } from 'src/company-user/entities/company-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company]), CompanyUser],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
