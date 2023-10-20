import { Role } from 'src/constants/enums';

export type JwtPayload = (
  | {
      role: Role.Company;
      email: string;
      companyId: string;
    }
  | {
      role: Role.Investor;
      phoneNumber: string;
    }
) & {
  sub: string;
};
