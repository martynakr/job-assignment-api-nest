import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTempDto } from './dto/create-temp.dto';
import { TempService } from './temp.service';

@Controller('temps')
export class TempController {
  constructor(private readonly tempService: TempService) {}
  @Get()
  async findAll() {
    return this.tempService.getAll();
  }

  @Post()
  async create(@Body() data: CreateTempDto) {
    return this.tempService.create(data);
  }
}
