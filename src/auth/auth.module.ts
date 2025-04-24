import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}),
    UsersModule, JwtModule.register({
      global:true,
    secret:process.env.SECRET_KEY,
    signOptions: {expiresIn:process.env.SECRET_TIME}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: []
})
export class AuthModule {}
