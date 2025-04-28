import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Property } from "../../properties/models/property.model";
import { Block } from "../../blocks/models/block.model";

interface IBlockPropertyCreateAttr {
  propertiesId: number;
  blockId: number;
}

@Table({ tableName: "block-property" })
export class BlockProperty extends Model<
  BlockProperty,
  IBlockPropertyCreateAttr
> {
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
