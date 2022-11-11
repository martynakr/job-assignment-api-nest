import { EntityRepository } from '@mikro-orm/mysql';
import { Job } from './job.entity';

export class JobRepository extends EntityRepository<Job> {}
