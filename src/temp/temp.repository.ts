import { EntityRepository } from '@mikro-orm/mysql';
import { Temp } from './temp.entity';

export class TempRepository extends EntityRepository<Temp> {}
