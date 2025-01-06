import { Module } from '@nestjs/common';
import QuoteController from './quote.controller';
import QuoteService from './quote.service';
import QuoteRepository from './quotes.repository';

@Module({
  controllers: [QuoteController],
  providers: [QuoteService, QuoteRepository]
})
export default class QuoteModule {}
