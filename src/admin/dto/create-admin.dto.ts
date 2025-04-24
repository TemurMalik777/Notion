export class CreateAdminDto {
  full_name: string;
  email: string;
  hashed_password: string;
  refresh_token: string;
  roleId: number;
}
