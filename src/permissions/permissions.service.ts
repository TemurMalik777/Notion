import { Injectable } from "@nestjs/common";
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { UpdatePermissionDto } from "./dto/update-permission.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Permission } from "./models/permission.model";

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel(Permission)
    private readonly permissionsModule: typeof Permission
  ) {}

  async create(createPermissionDto: CreatePermissionDto) {
    try {
      return await this.permissionsModule.create(createPermissionDto);
    } catch (error) {
      throw new Error(
        "Permission yaratishda xatolik yuz berdi: " + error.message
      );
    }
  }

  async findAll() {
    try {
      return await this.permissionsModule.findAll();
    } catch (error) {
      throw new Error(
        "Permissionsni olishda xatolik yuz berdi: " + error.message
      );
    }
  }

  async findOne(id: number) {
    try {
      return await this.permissionsModule.findByPk(id);
    } catch (error) {
      throw new Error(
        "Permissionni topishda xatolik yuz berdi: " + error.message
      );
    }
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    try {
      const updatedPermission = await this.permissionsModule.update(
        updatePermissionDto,
        {
          where: { id },
          returning: true,
        }
      );
      return updatedPermission[1][0]; // Yangilangan permissionni qaytarish
    } catch (error) {
      throw new Error(
        "Permissionni yangilashda xatolik yuz berdi: " + error.message
      );
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const deletePermission = await this.permissionsModule.destroy({
        where: { id },
      });
      if (deletePermission > 0) {
        return "Permission o'chirildi";
      }
      return "Bunday permission mavjud emas";
    } catch (error) {
      throw new Error(
        "Permissionni o'chirishda xatolik yuz berdi: " + error.message
      );
    }
  }
}
