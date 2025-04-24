import { IsNumber, IsString } from "class-validator";

export class CreateBlockPropertyDto {
  @IsNumber()
  block_id: number;

  @IsNumber()
  propertis_id: number;

  @IsString()
  value: string;

  @IsNumber()
  propertiesId: number;

  @IsNumber()
  blockId: number;
}
