import { Module } from '@nestjs/common';
import PrismaModule from 'prisma/prisma.module';
import ExampleRepository from './example.repository';
import ExampleController from './example.controller';
import ExampleService from './example.service';

@Module({
  imports: [PrismaModule],
  controllers: [ExampleController],
  providers: [ExampleRepository, ExampleService],
  exports: []
})
export default class ExampleModule {}
