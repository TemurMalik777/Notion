import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamSpaceDto } from './create-team_space.dto';

export class UpdateTeamSpaceDto extends PartialType(CreateTeamSpaceDto) {}
