import { Module } from '@nestjs/common';
import PrismaDBClient from './DB.client';

@Module({
  providers: [PrismaDBClient],
  exports: [PrismaDBClient]
})
export default class PrismaModule {}
