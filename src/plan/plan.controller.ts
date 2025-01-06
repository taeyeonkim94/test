import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import PlanService from './plan.service';
import { Plan } from '@prisma/client';
import GetPlansOptionDTO from './DTO/getPlansDTO';
import { PlanProperties } from './plan.domain';
import CreatePlanData from './DTO/createPlanData.interface';
@Controller('plans')
export default class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  async getPlans(@Query() options: GetPlansOptionDTO): Promise<{ totalCount: number; list: PlanProperties[] }> {
    const { totalCount, list } = await this.planService.getPlans(options);
    return { totalCount, list };
  }

  @Get(':id')
  async getPlanById(@Param('id') id: string): Promise<PlanProperties> {
    const plan = await this.planService.getPlanById(id);
    return plan;
  }

  @Post()
  async postPlan(@Body() data: CreatePlanData): Promise<PlanProperties> {
    console.log(data);
    const plan = await this.planService.createPlan(data);
    return plan;
  }

  @Delete(':id')
  async deletePlan(@Param('id') id: string): Promise<HttpStatus.NO_CONTENT> {
    const plan = await this.planService.deletePlan(id);
    return HttpStatus.NO_CONTENT;
  }
}
