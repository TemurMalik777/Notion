import { Module } from '@nestjs/common';
import { BlockPropertiesService } from './block-properties.service';
import { BlockPropertiesController } from './block-properties.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlockProperty } from './models/block-property.model';

@Module({
  imports:[SequelizeModule.forFeature([BlockProperty])],
  controllers: [BlockPropertiesController],
  providers: [BlockPropertiesService],
})
export class BlockPropertiesModule {}
