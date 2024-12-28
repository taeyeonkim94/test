import { Example } from '@prisma/client';

export default interface IExampleRepository {
  findMany(): Promise<Example[]>;
}
