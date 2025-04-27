import { Injectable } from '@nestjs/common';
import { CreateTeamSpaceDto } from './dto/create-team_space.dto';
import { UpdateTeamSpaceDto } from './dto/update-team_space.dto';

@Injectable()
export class TeamSpaceService {
  create(createTeamSpaceDto: CreateTeamSpaceDto) {
    return 'This action adds a new teamSpace';
  }

  findAll() {
    return `This action returns all teamSpace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamSpace`;
  }

  update(id: number, updateTeamSpaceDto: UpdateTeamSpaceDto) {
    return `This action updates a #${id} teamSpace`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamSpace`;
  }
}
