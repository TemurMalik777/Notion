import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
// import { JwtSelfGuard } from '../guards/jwt-self.guard';

@Controller('admin')
// @UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAllAdmins();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOneAdmin(+id);
  }

  @Patch(':id')
  // @UseGuards(JwtSelfGuard)
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.updateAdminDto(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.removeAdmin(+id);
  }
}
