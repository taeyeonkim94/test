import { Example } from '@prisma/client';

export default interface IExampleService {
  getExamples(): Promise<Example[]>;
}
