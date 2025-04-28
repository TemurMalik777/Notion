import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpUserDto } from "../auth-dto/sing-up.dto";
import { SingInUserDto } from "../auth-dto/sign-in.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up")
  signUp(@Body() authUserDto: SignUpUserDto) {
    return this.authService.signUp(authUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  signIn(@Body() signInDto: SingInUserDto) {
    return this.authService.signIn(signInDto);
  }
}
