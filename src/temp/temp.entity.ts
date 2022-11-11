import {
  Cascade,
  Collection,
  Entity,
  EntityRepositoryType,
  LoadStrategy,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Job } from '../job/job.entity';
import { TempRepository } from './temp.repository';

@Entity({ tableName: 'temps', customRepository: () => TempRepository })
export class Temp {
  [EntityRepositoryType]?: TempRepository;
  @PrimaryKey()
  tempId: number;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @OneToMany({
    entity: () => Job,
    mappedBy: 'temp',
    // hidden: true,
    cascade: [Cascade.ALL],
  })
  jobs = new Collection<Job>(this);

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
