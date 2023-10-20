import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CompanyUser } from './entities/company-user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { JwtPayload } from 'src/auth/auth.interface';

@Injectable()
export class CompanyUserService {
  constructor(
    @InjectRepository(CompanyUser)
    private companyUserRepository: Repository<CompanyUser>,
  ) {}
  async createCompanyUser(createCompanyUserDto: CreateCompanyUserDto) {
    try {
      const user = await this.companyUserRepository.save(createCompanyUserDto);
      try {
        const jwtPayload: JwtPayload = {
          role: Role.Company,
          email: user.email,
          companyId: user.companyId,
        };
        await this.authService;
      } catch (error) {}
    } catch (error) {}
  }
}
