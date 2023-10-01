import { Module } from '@nestjs/common';
import { CompanyUserController } from './company-user.controller';

@Module({
  controllers: [CompanyUserController]
})
export class CompanyUserModule {}
