import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from "./user/auth.service";
import { AuthController } from "./user/auth.controller";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: "yourSecretKey",
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
