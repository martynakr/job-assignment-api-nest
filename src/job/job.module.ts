import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Temp } from 'src/temp/temp.entity';
import { JobController } from './job.controller';
import { Job } from './job.entity';
import { JobService } from './job.service';

@Module({
  imports: [MikroOrmModule.forFeature([Job, Temp])],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
