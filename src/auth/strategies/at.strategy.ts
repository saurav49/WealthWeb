import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AUTH_CONFIG } from 'src/constants/envs';
import { JwtPayload } from '../auth.interface';

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get(AUTH_CONFIG.JWT_SECRET_KEY),
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtPayload) {
    return { ...payload, id: payload.sub };
  }
}
