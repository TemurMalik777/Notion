import { IsBoolean, IsString, IsOptional, IsIn } from "class-validator";
import { UserRole } from "../models/user.model";

export class CreateUserDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  email: string;

  @IsString()
  hashed_password: string;

  @IsString()
  photo: string;

  @IsString()
  refresh_token: string;

  @IsBoolean()
  activation_link: boolean;

  @IsBoolean()
  is_active: boolean;
}
