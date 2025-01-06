import { Controller } from '@nestjs/common';
import QuoteService from './quote.service';

@Controller('quotes')
export default class QuoteController {
  constructor(private quoteService: QuoteService) {}
}
