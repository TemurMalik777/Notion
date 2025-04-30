import { Module } from "@nestjs/common";
import { PropertiesModule } from "./properties/properties.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Property } from "./properties/models/property.model";
import { BlockPropertiesModule } from "./block-properties/block-properties.module";
import { TypeModule } from "./type/type.module";
import { BlockProperty } from "./block-properties/models/block-property.model";
import { Type } from "./type/models/type.model";
import { BlocksModule } from "./blocks/blocks.module";
import { Block } from "./blocks/models/block.model";
import { AdminModule } from "./admin/admin.module";
import { UsersModule } from "./users/users.module";
import { Admin } from "./admin/models/admin.model";
import { User } from "./users/models/user.model";
import { FileModule } from "./file/file.module";
import { PermissionsModule } from "./permissions/permissions.module";
import { TeamSpaceMembersModule } from "./team_space_members/team_space_members.module";
import { TeamSpaceModule } from "./team_space/team_space.module";
import { CommentsModule } from "./comments/comments.module";
import { Comment } from "./comments/models/comment.model";
import { TeamSpace } from "./team_space/models/team_space.model";
import { Permission } from "./permissions/models/permission.model";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { WorkspaceModule } from './workspace/workspace.module';
import { WorkspaceMembersModule } from './workspace_members/workspace_members.module';
import { GroupsModule } from './groups/groups.module';
import { DevicesModule } from './devices/devices.module';
import { GroupMembersModule } from './group_members/group_members.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Property,
        BlockProperty,
        Type,
        Block,
        Admin,
        User,
        Comment,
        TeamSpace,
        Permission,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    PropertiesModule,
    BlockPropertiesModule,
    TypeModule,
    BlocksModule,
    AdminModule,
    UsersModule,
    FileModule,
    PermissionsModule,
    TeamSpaceMembersModule,
    TeamSpaceModule,
    CommentsModule,
    WorkspaceModule,
    WorkspaceMembersModule,
    GroupsModule,
    DevicesModule,
    GroupMembersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
