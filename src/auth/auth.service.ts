import { Injectable } from '@nestjs/common';
import { CompanyUserService } from 'src/company-user/company-user.service';

@Injectable()
export class AuthService {
  constructor(private readonly companyUserService: CompanyUserService) {}
  signInUser() {}
  refreshToken() {}
  logoutUser() {}
}
