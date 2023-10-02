import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CompanyUser } from './entities/company-user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';

@Injectable()
export class CompanyUserService {
  constructor(
    @InjectRepository(CompanyUser)
    private companyUserRepository: Repository<CompanyUser>,
  ) {}
  async createCompanyUser(createCompanyUserDto: CreateCompanyUserDto) {
    try {
      await this.companyUserRepository.save(createCompanyUserDto);
    } catch (error) {}
  }
}
