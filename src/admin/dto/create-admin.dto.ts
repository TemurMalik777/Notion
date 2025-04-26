import { IsNumber, IsString } from "class-validator";

export class CreateAdminDto {
  @IsString()
  full_name: string;

  @IsString()
  email: string;

  @IsString()
  hashed_password: string;
  @IsString()
  refresh_token: string;

  @IsNumber()
  roleId: number;
}
