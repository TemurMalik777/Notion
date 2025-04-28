import { IsBoolean, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  photo: string;

  @IsBoolean()
  is_active: boolean;
}
