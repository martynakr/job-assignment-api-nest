import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Temp } from 'src/temp/temp.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './job.entity';
import { JobRepository } from './job.repository';

@Injectable()
export class JobService {
  constructor(
    private readonly jobRepository: JobRepository,
    @InjectRepository(Temp)
    private readonly tempRespository: EntityRepository<Temp>,
  ) {}

  async findAll(): Promise<Job[]> {
    return this.jobRepository.findAll({ populate: ['temp'] });
  }

  async create(dto: CreateJobDto) {
    const job = new Job(dto.name, dto.startDate, dto.endDate);
    console.log(dto.tempId !== null);

    if (dto.tempId !== null) {
      const tempToAssign = await this.tempRespository.findOne({
        tempId: dto.tempId,
      });
      job.temp = tempToAssign;
    }

    await this.jobRepository.persistAndFlush(job);
    return job;
  }

  async findById(id: number) {
    const jobWithId = await this.jobRepository.findOne(id, {});
    console.log(jobWithId);

    if (jobWithId === null) {
      throw new HttpException(
        {
          message: `User with id ${id} does not exist.`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return jobWithId;
  }
}
