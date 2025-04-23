import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Block } from './models/block.model';

@Injectable()
export class BlocksService {
  constructor(@InjectModel(Block) private readonly blocksModule: typeof Block){}

  create(createBlockDto: CreateBlockDto) {
    return this.blocksModule.create(createBlockDto)
  }

  findAll() {
    return this.blocksModule.findAll({include: {all:true}})
  }

  findOne(id: number): Promise<Block | null> {
    return this.blocksModule.findByPk(id);
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return `This action updates a #${id} block`;
  }

  remove(id: number) {
    return `This action removes a #${id} block`;
  }
}
