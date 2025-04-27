import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Block } from "../../blocks/models/block.model"


interface ITypeCreateAttr{
    name: string
    description: string
    image: string
}

@Table({tableName: "type"})
export class Type extends Model<Type, ITypeCreateAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING
    })
    declare name: string

    @Column({
        type: DataType.STRING
    })
    declare description: string

    @Column({
        type: DataType.STRING
    })
    declare image: string

    @HasMany(()=> Block)
    block: Block[]
}
