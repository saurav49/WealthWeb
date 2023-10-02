import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyUserModule } from 'src/company-user/company-user.module';
import { CompanyModule } from 'src/company/company.module';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyUserModule, CompanyModule])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
