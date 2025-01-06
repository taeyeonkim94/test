import { Injectable } from '@nestjs/common';
import QuoteRepository from './quotes.repository';

@Injectable()
export default class QuoteService {
  constructor(private quoteRepository: QuoteRepository) {}
}
