import { Injectable } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Type } from "./models/type.model";
import { FileService } from "../file/file.service";

@Injectable()
export class TypeService {
  constructor(@InjectModel(Type) private readonly typeModule: typeof Type) {}
  private readonly fileService: FileService;
  async createType(createTypeDto: CreateTypeDto, image: any): Promise<Type> {
    const fileName = await this.fileService.saveFile(image)
    return this.typeModule.create({...createTypeDto, image: fileName});
  }

  findAll() {
    return this.typeModule.findAll({ include: { all: true } });
  }

  findOne(id: number): Promise<Type | null> {
    return this.typeModule.findByPk(id);
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
