import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamSpaceMembersService } from './team_space_members.service';
import { CreateTeamSpaceMemberDto } from './dto/create-team_space_member.dto';
import { UpdateTeamSpaceMemberDto } from './dto/update-team_space_member.dto';

@Controller('team-space-members')
export class TeamSpaceMembersController {
  constructor(private readonly teamSpaceMembersService: TeamSpaceMembersService) {}

  @Post()
  create(@Body() createTeamSpaceMemberDto: CreateTeamSpaceMemberDto) {
    return this.teamSpaceMembersService.create(createTeamSpaceMemberDto);
  }

  @Get()
  findAll() {
    return this.teamSpaceMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamSpaceMembersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamSpaceMemberDto: UpdateTeamSpaceMemberDto) {
    return this.teamSpaceMembersService.update(+id, updateTeamSpaceMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamSpaceMembersService.remove(+id);
  }
}
