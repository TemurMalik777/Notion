import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { TeamSpace } from "../../team_space/models/team_space.model";

interface IPermissionCreateAttr {
  name: string;
  label: string;
  description: string;
}

@Table({ tableName: "permission" })
export class Permission extends Model<Permission, IPermissionCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  label: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @HasMany(()=>TeamSpace)
  team_space:TeamSpace[]
}
