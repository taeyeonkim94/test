import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  );

  // swagger 세부 세팅 참고 : https://docs.nestjs.com/openapi/introduction
  const config = new DocumentBuilder()
    .setTitle('니가 가라 하와이 API')
    .setDescription('여행 중개 플랫폼 [니가 가라 하와이]의 API 명세입니다.')
    .setVersion('1.0.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
