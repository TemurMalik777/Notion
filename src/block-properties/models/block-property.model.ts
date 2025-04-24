import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Property } from '../../properties/models/property.model';
import { Block } from '../../blocks/models/block.model';

interface IBlockPropertyCreateAttr {
  block_id: number;
  propertis_id: number;
  value: string;
  propertiesId: number;
  blockId: number;
}

@Table({ tableName: 'block-property' })
export class BlockProperty extends Model<
  BlockProperty,
  IBlockPropertyCreateAttr
> {
  @Column({
    type: DataType.INTEGER,
  })
  declare block_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  declare propertis_id: number;
  @Column({
    type: DataType.STRING,
  })
  declare value: string;

  @ForeignKey(() => Property)
  @Column({
    type: DataType.INTEGER,
  })
  declare propertiesId: number;

  @BelongsTo(() => Property)
  declare property: Property;

  @ForeignKey(() => Block)
  @Column({
    type: DataType.INTEGER,
  })
  declare blockId: number;

  @BelongsTo(() => Block)
  block: Block;
}