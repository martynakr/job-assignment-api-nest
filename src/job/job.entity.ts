import {
  Cascade,
  Entity,
  EntityRepositoryType,
  LoadStrategy,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Temp } from '../temp/temp.entity';
import { JobRepository } from './job.repository';

@Entity({ tableName: 'jobs', customRepository: () => JobRepository })
export class Job {
  [EntityRepositoryType]?: JobRepository;
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  startDate: Date;

  @Property()
  endDate: Date;

  @ManyToOne({
    nullable: true,
    cascade: [Cascade.PERSIST, Cascade.REMOVE],
  })
  temp: Temp;

  constructor(name: string, startDate: Date, endDate: Date) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
