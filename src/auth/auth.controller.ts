import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signin')
  signInUser() {
    this.authService.signInUser();
  }

  @Post('/signup')
  signUpUser() {
    this.authService.signUpUser();
  }

  @Post('/refresh')
  refreshToken() {
    this.authService.refreshToken();
  }

  @Post('/logout')
  logoutUser() {
    this.authService.logoutUser();
  }
}
