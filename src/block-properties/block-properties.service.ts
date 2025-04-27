import { Injectable } from "@nestjs/common";
import { CreateBlockPropertyDto } from "./dto/create-block-property.dto";
import { UpdateBlockPropertyDto } from "./dto/update-block-property.dto";
import { InjectModel } from "@nestjs/sequelize";
import { BlockProperty } from "./models/block-property.model";

@Injectable()
export class BlockPropertiesService {
  constructor(
    @InjectModel(BlockProperty)
    private readonly blockPropertiesModule: typeof BlockProperty
  ) {}

  create(createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertiesModule.create(createBlockPropertyDto);
  }

  findAll() {
    return this.blockPropertiesModule.findAll({ include: { all: true } });
  }

  findOne(id: number): Promise<BlockProperty | null> {
    return this.blockPropertiesModule.findByPk(id);
  }

  update(id: number, updateBlockPropertyDto: UpdateBlockPropertyDto) {
    return `This action updates a #${id} blockProperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} blockProperty`;
  }
}
