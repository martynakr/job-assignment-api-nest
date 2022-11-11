import { Injectable } from '@nestjs/common';
import { CreateTempDto } from './dto/create-temp.dto';
import { Temp } from './temp.entity';
import { TempRepository } from './temp.repository';

@Injectable()
export class TempService {
  constructor(private readonly tempRepository: TempRepository) {}

  async getAll() {
    const allTemps = await this.tempRepository.findAll({
      populate: ['jobs.name', 'jobs.startDate', 'jobs.endDate'],
    });

    return allTemps;
  }

  async create(dto: CreateTempDto) {
    console.log(dto);
    const temp = new Temp(dto.firstName, dto.lastName);
    console.log(temp);
    await this.tempRepository.persistAndFlush(temp);
    return temp;
  }
}
