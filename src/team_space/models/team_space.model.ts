import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Permission } from "../../permissions/models/permission.model";
import { User } from "../../users/models/user.model";

interface ITeamSpaceAttr {
  name: string;
  description: string;
  icon: string;
  workspaceId: number;
  created_by: number;
  permissionId: number;
}

@Table({ tableName: "team_space" })
export class TeamSpace extends Model<TeamSpace, ITeamSpaceAttr> {
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

  @Column({
    type: DataType.STRING,
  })
  declare icon: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare workspaceId: number;

  @ForeignKey(()=>User)
  @Column({
    type: DataType.INTEGER,
  })
  declare created_by: number;
  @BelongsTo(()=>User)
  user: User[]

  @ForeignKey(()=>Permission)
  @Column({
    type: DataType.INTEGER,
  })
  declare permissionId: number;

  @BelongsTo(()=>Permission)
  permission: Permission[]

}
