import { Injectable } from "@nestjs/common";
import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Block } from "./models/block.model";

@Injectable()
export class BlocksService {
  constructor(
    @InjectModel(Block) private readonly blocksModule: typeof Block
  ) {}

  create(createBlockDto: CreateBlockDto) {
    return this.blocksModule.create(createBlockDto);
  }

  findAll() {
    return this.blocksModule.findAll({ include: { all: true } });
  }

  findOne(id: number): Promise<Block | null> {
    return this.blocksModule.findByPk(id);
  }

  async update(id: number, updateBlockDto: UpdateBlockDto) {
    const blockmodel = await this.findOne(id);
    if (!blockmodel) {
      throw new Error(`Block with id ${id} not found`);
    }

    return blockmodel.update(updateBlockDto);
  }

  async remove(id: number): Promise<string> {
    const blockmodel = await this.findOne(id);

    if (!blockmodel) {
      throw new Error(`Block with id ${id} not found`);
    }

    await blockmodel.destroy();
    return `Block with id ${id} has been deleted`;
  }
}
