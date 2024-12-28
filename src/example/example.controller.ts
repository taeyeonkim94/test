import { Controller, Get } from '@nestjs/common';
import { Example } from '@prisma/client';
import ExampleService from './example.service';

@Controller('examples')
export default class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async getExamples(): Promise<Example[]> {
    const examples = await this.exampleService.getExamples();
    return examples;
  }
}
