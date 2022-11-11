import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly startDate: Date;

  @IsNotEmpty()
  readonly endDate: Date;

  @IsOptional()
  readonly tempId: number;
}
