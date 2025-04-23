import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from './models/property.model';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property) private readonly propertiesModule: typeof Property,
  ) {}

  async createProperty(createPropertyDto: CreatePropertyDto) {
    const properties = await this.propertiesModule.create(createPropertyDto);
    return properties;
  }

  async findAllProperty() {
    return this.propertiesModule.findAll({ include: { all: true } });
  }

  async findOneProperty(id: number): Promise<Property | null> {
    return this.propertiesModule.findByPk(id);
  }

  async updatePropertyDto(
    id: number,
    updatePropertyDto: UpdatePropertyDto,
  ): Promise<Property | null> {
    const updateProperty = await this.propertiesModule.update(
      updatePropertyDto,
      {
        where: { id },
        returning: true,
      },
    );

    return updateProperty[1][0];
  }

  async removeProperty(id: number) {
    const deleteCompany = await this.propertiesModule.destroy({
      where: { id },
    });
    if (deleteCompany > 0) {
      return "Property O'chirildi";
    }
    return 'Bunday Property Mavjud emas';
  }
}
