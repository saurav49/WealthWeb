import { Body, Controller, Post } from '@nestjs/common';
import { CompanyUserService } from './company-user.service';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';

@Controller('company-user')
export class CompanyUserController {
  constructor(private readonly companyUserService: CompanyUserService) {}

  @Post('/create')
  createCompanyUser(@Body() createCompanyUserDto: CreateCompanyUserDto) {
    this.companyUserService.createCompanyUser(createCompanyUserDto);
  }
}
