import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.create({
      ...createUserDto,
    });
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({
      where: { email },
    });
    return user;
  }

  async findOne(id: number): Promise<User | null> {
    return this.userModel.findByPk(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, { where: { id } });
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }
}
