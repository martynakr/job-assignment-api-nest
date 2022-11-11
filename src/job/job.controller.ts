import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateJobDto } from './dto/create-job.dto';
import { JobService } from './job.service';

@ApiBearerAuth()
@ApiTags('articles')
@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @ApiOperation({ summary: 'Get all jobs' })
  @ApiResponse({ status: 200, description: 'Return all jobs.' })
  @Get()
  async findAll() {
    return await this.jobService.findAll();
  }

  @Post()
  async create(@Body() data: CreateJobDto) {
    return this.jobService.create(data);
  }

  @ApiOperation({ summary: 'Get job by id' })
  @ApiResponse({ status: 200, description: 'Return job with specified id.' })
  @ApiResponse({
    status: 404,
    description: 'Job with specified id does not exist.',
  })
  @Get('/:id')
  async findById(@Param('id') id: number) {
    const job = this.jobService.findById(id);

    return job;
  }
}
