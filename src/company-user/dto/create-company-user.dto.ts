import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCompanyUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  desgination: string;

  @IsUUID(4)
  companyId: string;
}
