import DBClient from 'prisma/DB.client';
import IPlanRepository from './interface/plan.repository.interface';
import { Injectable } from '@nestjs/common';
import PlanQueryOptions from './interface/planQueryOptions';
import { EnumPlanOrder } from './DTO/getPlansDTO';
import CreatePlanData from './DTO/createPlanData.interface';
import SortOrder from 'src/common/enums/sortOrder';
import PlanOrderByField from './type/planOrderByField';
import { PlanFactory } from './plan.factory';
import { IPlan, Plan } from './plan.domain';

@Injectable()
export default class PlanRepository implements IPlanRepository {
  constructor(private readonly dBClient: DBClient) {}

  async findMany(options: PlanQueryOptions): Promise<IPlan[]> {
    const { orderBy, keyword, serviceArea, page, pageSize } = options || {};
    const orderByField: PlanOrderByField =
      orderBy === EnumPlanOrder.RECENT ? { createdAt: SortOrder.DESC } : { startDate: SortOrder.ASC };
    const plans = await this.dBClient.plan.findMany({
      where: {
        isDeletedAt: null,
        serviceArea
      },
      include: { quotes: true, assignees: true },
      orderBy: orderByField,
      take: pageSize,
      skip: pageSize * (page - 1)
    });
    const domainPlans = plans.map((plan) => PlanFactory.create(plan));
    return domainPlans;
  }

  async totalCount(options: PlanQueryOptions): Promise<number> {
    const { serviceArea } = options;
    const totalCount = await this.dBClient.plan.count({
      where: {
        isDeletedAt: null,
        serviceArea
      }
    });
    return totalCount;
  }

  async findById(id: string): Promise<IPlan> {
    const plan = await this.dBClient.plan.findUnique({
      where: { id, isDeletedAt: null },
      include: {
        quotes: true, // Plan과 관련된 Quote를 포함
        assignees: true, // Plan과 관련된 Assignees를 포함
        dreamer: true, // Plan과 관련된 Dreamer를 포함
        review: true // Plan과 관련된 Review를 포함
      }
    });
    const domainPlan = PlanFactory.create(plan);
    return domainPlan;
  }

  async create(data: CreatePlanData): Promise<IPlan> {
    const { startDate, endDate, tripType, serviceArea, details, address, assigneeIds, dreamerId } = data;
    //const assigneesIds = assignees.map((user) => user.id);
    const plan = await this.dBClient.plan.create({
      data: {
        startDate,
        endDate,
        tripType,
        serviceArea,
        details,
        address,
        status: 'PENDING',
        assignees: {
          connect: assigneeIds.map((userId) => ({ id: userId }))
        },
        dreamer: { connect: { id: dreamerId } }
      },
      include: {
        quotes: true,
        assignees: true
      }
    });
    const domainPlan = PlanFactory.create(plan);
    return domainPlan;
  }

  async delete(id: string): Promise<IPlan> {
    const plan = await this.dBClient.plan.update({
      where: { id },
      include: {
        quotes: true, // Plan과 관련된 Quote를 포함
        assignees: true, // Plan과 관련된 Assignees를 포함
        dreamer: true, // Plan과 관련된 Dreamer를 포함
        review: true // Plan과 관련된 Review를 포함
      },
      data: {
        isDeletedAt: new Date()
      }
    });
    const domainPlan = PlanFactory.create(plan);
    return domainPlan;
  }
}
