import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Block } from "../../blocks/models/block.model";
import { User } from "../../users/models/user.model";
import { BlockProperty } from "../../block-properties/models/block-property.model";

interface ICommentsCreateAttr {
  content: string;
  user_id: number;
  block_id: number;
  is_edited: boolean;
  blockId: number;
}

@Table({ tableName: "comment" })
export class Comment extends Model<Comment, ICommentsCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare content: string;

  @ForeignKey(()=>User)
  @Column({
    type: DataType.INTEGER,
  })
  declare user_id: number;

  @BelongsTo(()=>User)
  user: User[]

  @ForeignKey(()=>Block)
  @Column({
    type: DataType.INTEGER,
  })
  declare block_id: number;

  @BelongsTo(()=>Block)
  block: Block[]

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_edited: boolean;

//   @HasMany(()=>BlockProperty)
//   blockproperty: BlockProperty[]

  @ForeignKey(() => Block)
  @Column({
    type: DataType.INTEGER,
  })
  declare blockId: number;

  @BelongsTo(() => Block)
  type: Block[];
}
