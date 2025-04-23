import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Property } from '../../properties/models/property.model';
import { BlockProperty } from '../../block-properties/models/block-property.model';
import { Type } from '../../type/models/type.model';

interface IBlockCreateAttr {
  type_id: number;
  created_by: number;
  parent: number;
  order_index: number;
  typeId: number;
}

@Table({ tableName: 'block' })
export class Block extends Model<Block, IBlockCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare type_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare created_by: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare parent: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare order_index: number;

  @HasMany(() => BlockProperty)
  blockproperty: BlockProperty[];

  @ForeignKey(() => Type)
  @Column({
    type: DataType.INTEGER,
  })
  declare typeId: number;

  @BelongsTo(() => Type)
  type: Type[];
}
