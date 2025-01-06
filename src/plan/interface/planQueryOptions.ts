import { ServiceArea } from '@prisma/client';
import { EnumPlanOrder } from '../DTO/getPlansDTO';

export default interface PlanQueryOptions {
  orderBy: EnumPlanOrder;
  keyword?: string;
  serviceArea: ServiceArea;
  page: number;
  pageSize: number;
}
