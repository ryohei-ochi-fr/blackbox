import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// 生成したモジュールを指定する
import { RecordModule } from './record/record.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('BlackBox')
    .setDescription('The BlackBox API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [RecordModule], // インクルードしたモジュールを指定する
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
