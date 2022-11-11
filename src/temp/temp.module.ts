import { Module } from '@nestjs/common';
import { TempService } from './temp.service';
import { TempController } from './temp.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Temp } from './temp.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Temp])],
  providers: [TempService],
  controllers: [TempController],
})
export class TempModule {}
