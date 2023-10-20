import { Injectable } from '@nestjs/common';
import { CompanyUserService } from 'src/company-user/company-user.service';
import { JwtPayload } from './auth.interface';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AUTH_CONFIG } from 'src/constants/envs';
@Injectable()
export class AuthService {
  constructor(
    private readonly companyUserService: CompanyUserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  signInUser() {}
  refreshToken() {}
  logoutUser() {}
  async generateToken(
    jwtPayload: JwtPayload,
    email: string,
    firstName: string,
  ) {
    const token = this.jwtService.sign(jwtPayload, {
      secret: this.configService.get(AUTH_CONFIG.JWT_SECRET_KEY),
      expiresIn: this.configService.get(
        AUTH_CONFIG.JWT_ACCESS_TOKEN_EXPIRES_IN,
      ),
    });
  }
  async sendMail() {}
}
