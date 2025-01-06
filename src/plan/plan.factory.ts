import { IPlan, Plan, PlanProperties } from './plan.domain';

export class PlanFactory {
  static create(planProperties: PlanProperties): IPlan {
    return new Plan(planProperties);
  }
}
