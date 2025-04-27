import { Module } from '@nestjs/common';
import { TeamSpaceMembersService } from './team_space_members.service';
import { TeamSpaceMembersController } from './team_space_members.controller';

@Module({
  controllers: [TeamSpaceMembersController],
  providers: [TeamSpaceMembersService],
})
export class TeamSpaceMembersModule {}
