import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { BlockProperty } from "../../block-properties/models/block-property.model";
import { Type } from "../../type/models/type.model";
import { User } from "../../users/models/user.model";
import { Comment } from "../../comments/models/comment.model";

interface IBlockCreateAttr {
  type_id: number;
  created_by: number;
  parent: number;
  order_index: number;
  typeId: number;
}

@Table({ tableName: "block" })
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

  @ForeignKey(()=>User)
  @Column({
    type: DataType.INTEGER,
  })
  declare created_by: number;

  @BelongsTo(()=>User)
  user: User[]

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

  @HasMany(() => Block, { foreignKey: "parent" })
  blocks: Block[];

  @HasMany(()=>Comment)
  comment: Comment[]

  @ForeignKey(() => Type)
  @Column({
    type: DataType.INTEGER,
  })
  declare typeId: number;

  @BelongsTo(() => Type)
  type: Type[];
}
