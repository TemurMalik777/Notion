import { IsNumber } from "class-validator";

export class CreateBlockDto {
  @IsNumber()
  type_id: number;

  @IsNumber()
  parent: number;

  @IsNumber()
  order_index: number;

  @IsNumber()
  typeId: number;
}
