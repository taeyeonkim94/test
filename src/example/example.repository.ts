import { Injectable } from '@nestjs/common';
import DBClient from 'prisma/DB.client';
import { Example } from '@prisma/client';
import IExampleRepository from './interface/example.repository.interface';

@Injectable()
export default class ExampleRepository implements IExampleRepository {
  constructor(private readonly prisma: DBClient) {}

  async findMany(): Promise<Example[]> {
    const examples = await this.prisma.example.findMany();
    return examples;
  }
}
