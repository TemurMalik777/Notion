import {
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

interface AdminCreateAttr {
  full_name: string;
  email: string;
  hashed_password: string;
  refresh_token: string;
  roleId: number;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, AdminCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  declare refresh_token: string;
}
