import { Module } from '@nestjs/common';
import ExampleRepository from './example.repository';
import ExampleController from './example.controller';
import ExampleService from './example.service';

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [ExampleRepository, ExampleService],
  exports: []
})
export default class ExampleModule {}
