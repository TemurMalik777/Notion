import { Injectable } from '@nestjs/common';
import { CreateTeamSpaceMemberDto } from './dto/create-team_space_member.dto';
import { UpdateTeamSpaceMemberDto } from './dto/update-team_space_member.dto';

@Injectable()
export class TeamSpaceMembersService {
  create(createTeamSpaceMemberDto: CreateTeamSpaceMemberDto) {
    return 'This action adds a new teamSpaceMember';
  }

  findAll() {
    return `This action returns all teamSpaceMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamSpaceMember`;
  }

  update(id: number, updateTeamSpaceMemberDto: UpdateTeamSpaceMemberDto) {
    return `This action updates a #${id} teamSpaceMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamSpaceMember`;
  }
}
