import { Column, DataType, Model, Table } from "sequelize-typescript";

export type UserRole = "USER" | "ADMIN";

interface UsersCreateAttr {
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
  photo: string;
  refresh_token: string;
  activation_link: boolean;
  is_active: boolean;
}

@Table({ tableName: "users" })
export class User extends Model<User, UsersCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING(50) })
  declare first_name: string;

  @Column({ type: DataType.STRING(50) })
  declare last_name: string;

  @Column({ type: DataType.STRING(50), allowNull: true, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING })
  declare hashed_password: string;

  @Column({ type: DataType.STRING })
  declare photo: string;

  @Column({ type: DataType.STRING })
  declare refresh_token: string;

  @Column({ type: DataType.BOOLEAN })
  declare activation_link: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_active: boolean;
}
