import { Module } from '@nestjs/common';
import PlanController from './plan.controller';
import PlanService from './plan.service';
import PlanRepository from './plan.repository';

@Module({
  imports: [],
  controllers: [PlanController],
  providers: [PlanService, PlanRepository]
})
export default class PlanModule {}
