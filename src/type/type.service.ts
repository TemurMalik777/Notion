import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Type } from "./models/type.model";
import { FileService } from "../file/file.service";

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type) private readonly typeModule: typeof Type,
    private readonly fileService: FileService
  ) {}

  async createType(createTypeDto: CreateTypeDto, image: any): Promise<Type> {
    const fileName = await this.fileService.saveFile(image);
    return this.typeModule.create({ ...createTypeDto, image: fileName });
  }

  findAll() {
    return this.typeModule.findAll({ include: { all: true } });
  }

  findOne(id: number): Promise<Type | null> {
    return this.typeModule.findByPk(id);
  }

  async update(id: number, updateTypeDto: UpdateTypeDto): Promise<Type | null> {
    try {
      const type = await this.findOne(id);
      if (!type) {
        throw new NotFoundException('Type topilmadi');
      }
      return await type.update(updateTypeDto);
    } catch (error) {
      throw new InternalServerErrorException('Yangilashda xato');
    }
  }

  async remove(id: number) {
    await this.typeModule.destroy({where: {id}})
    return {message: `Foydalanuvchi ochirildi`}
  }
}
