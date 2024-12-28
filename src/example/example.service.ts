import { Injectable } from '@nestjs/common';
import { Example } from '@prisma/client';
import ExampleRepository from './example.repository';
import IExampleService from './interface/example.service.interface';

@Injectable()
export default class ExampleService implements IExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async getExamples(): Promise<Example[]> {
    const examples = await this.exampleRepository.findMany();
    return examples;
  }
}
