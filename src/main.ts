import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MikroORM } from '@mikro-orm/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.get(MikroORM).getSchemaGenerator().ensureDatabase();
  // await app.get(MikroORM).getSchemaGenerator().updateSchema();
  const config = new DocumentBuilder()
    .setTitle('Job Assignment Api')
    .setDescription('Description')
    .setVersion('1.0')
    .addTag('jobs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
