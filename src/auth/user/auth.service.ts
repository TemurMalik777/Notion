import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { UsersService } from "../../users/users.service";
import * as bcrypt from "bcrypt";
import { SignUpUserDto } from "../auth-dto/sing-up.dto";
import { JwtService } from "@nestjs/jwt";
import { SingInUserDto } from "../auth-dto/sign-in.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signUp(authDto: SignUpUserDto) {
    const hashed_password = await bcrypt.hash(authDto.password, 10);
    const user = await this.usersService.create({
      ...authDto,
      password: hashed_password,
    });

    const payload = {
      sub: user.id,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET || "Salom!", // Default fallback
      expiresIn: "1h",
    });

    return {
      success: true,
      id: user.id,
      token,
    };
  }

  async signIn(authDto: SingInUserDto) {
    const user = await this.usersService.findByEmail(authDto.email);
    if (!user) {
      throw new NotFoundException("User mavjud emas");
    }

    const check = await bcrypt.compare(authDto.password, user.password);
    if (!check) {
      throw new BadRequestException("Login yoki parol xato");
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET || "Salom!",
      expiresIn: "1h",
    });

    return {
      success: true,
      id: user.id,
      token,
    };
  }
}
