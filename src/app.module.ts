import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './job/job.module';
import { TempModule } from './temp/temp.module';

@Module({
  imports: [MikroOrmModule.forRoot(), JobModule, TempModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
