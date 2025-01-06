import { Injectable } from '@nestjs/common';
import DBClient from 'prisma/DB.client';

@Injectable()
export default class QuoteRepository {
  constructor(private databaseClient: DBClient) {}
}
