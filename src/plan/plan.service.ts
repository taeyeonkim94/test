import { Injectable } from '@nestjs/common';
import PlanRepository from './plan.repository';
import { Plan } from '@prisma/client';
import IPlanService from './interface/plan.service.interface';
import NotFoundError from 'src/common/errors/notFoundError';
import ErrorMessage from 'src/common/enums/error.message';
import PlanQueryOptions from './interface/planQueryOptions';
import { IPlan, PlanProperties } from './plan.domain';
import CreatePlanData from './DTO/createPlanData.interface';

@Injectable()
export default class PlanService implements IPlanService {
  constructor(private readonly planRepository: PlanRepository) {}

  async getPlans(options: PlanQueryOptions): Promise<{ totalCount: number; list: PlanProperties[] }> {
    const [totalCount, list] = await Promise.all([
      this.planRepository.totalCount(options),
      this.planRepository.findMany(options)
    ]);
    const toClientList = list.map((plan) => plan.toClient());
    return { totalCount, list: toClientList };
  }

  async getPlanById(id: string): Promise<PlanProperties> {
    const plan = await this.planRepository.findById(id);
    if (!plan) throw new NotFoundError(ErrorMessage.PLAN_NOT_FOUND);
    return plan.toClient();
  }

  async createPlan(data: CreatePlanData): Promise<PlanProperties> {
    const plan = await this.planRepository.create(data);
    return plan.toClient();
  }

  async deletePlan(id: string): Promise<PlanProperties> {
    const plan = await this.planRepository.findById(id);
    const deletedPlan = await this.planRepository.delete(id);
    return deletedPlan.toClient();
  }
}
