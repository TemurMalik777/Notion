import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { BlockProperty } from '../../block-properties/models/block-property.model';
import { Block } from '../../blocks/models/block.model';

interface IPropertyCreateAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'property-model' })
export class Property extends Model<Property, IPropertyCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @HasMany(() => BlockProperty )
  blockproperty: BlockProperty[]
}
