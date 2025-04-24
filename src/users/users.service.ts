import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { UsersModule } from "./users.module";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly usersModule: typeof User) {}

  create(createUserDto: CreateUserDto) {
    return this.usersModule.create(createUserDto);
  }

  findAll() {
    return this.usersModule.findAll({ include: { all: true } });
  }

  async findByEmail(email: string) {
    const user = await this.usersModule.findOne({
      where: { email },
      include: { attributes: ["name"], through: { attributes: [] } },
    });
    return user?.dataValues;
  }

  // async findByEmail(email: string) {
  //   const user = await this.usersModule.findOne({
  //     where: { email },
  //     include: {
  //        attributes: ["name"],
  //        through: { attributes: [] } },
  //   });
  //   return user?.dataValues;
  // }

  async findOne(id: number) {
    const user = await this.usersModule.findByPk(id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
