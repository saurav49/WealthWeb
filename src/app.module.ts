import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyUserModule } from './company-user/company-user.module';
import { CompanyModule } from './company/company.module';
import typeormConfig from './config/typeorm.config';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    MailerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    AuthModule,
    CompanyUserModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
