import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import GlobalExceptionFilter from './common/filters/globalExceptionFilter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true })).useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
