import { Migration } from '@mikro-orm/migrations';

export class Migration20221111024038 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `temps` (`temp_id` int unsigned not null auto_increment primary key, `first_name` varchar(255) not null, `last_name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `jobs` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `start_date` datetime not null, `end_date` datetime not null, `temp_temp_id` int unsigned null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `jobs` add index `jobs_temp_temp_id_index`(`temp_temp_id`);');

    this.addSql('alter table `jobs` add constraint `jobs_temp_temp_id_foreign` foreign key (`temp_temp_id`) references `temps` (`temp_id`) on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `jobs` drop foreign key `jobs_temp_temp_id_foreign`;');

    this.addSql('drop table if exists `temps`;');

    this.addSql('drop table if exists `jobs`;');
  }

}
