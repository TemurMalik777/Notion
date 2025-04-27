import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { TypeService } from "./type.service";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Type } from "./models/type.model";

@Controller("type")
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(
    @Body() createTypeDto: CreateTypeDto,
    @UploadedFile() image: any): Promise<Type> {
    return this.typeService.createType(createTypeDto, image);
  }

  @Get()
  findAll() {
    return this.typeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.typeService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(+id, updateTypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.typeService.remove(+id);
  }
}
