import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTempDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;
}
