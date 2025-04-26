import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "../users/dto/create-user.dto";

import * as bcrypt from "bcrypt";
import { SingInDto } from "./dto/sing-in.dto";
import { User } from "../users/models/user.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtSevice: JwtService
  ) {}

  private async generateToken(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      is_active: user.is_active,
    };
    return { token: this.jwtSevice.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto) {
    const condidate = await this.usersService.findByEmail(createUserDto.email);

    if (condidate) {
      throw new BadRequestException("Bunda");
    }
    const hashedPassword = await bcrypt.hash(createUserDto.hashed_password, 7);
    createUserDto.hashed_password = hashedPassword;
    const newUser = await this.usersService.create(createUserDto);

    return newUser;
  }

  async singIn(singInDto: SingInDto) {
    const user = await this.usersService.findByEmail(singInDto.email);
    if (!user) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }
    const validPassword = await bcrypt.compare(
      singInDto.password,
      user.hashed_password
    );
    if (!validPassword) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    return this.generateToken(user);
  }
}
