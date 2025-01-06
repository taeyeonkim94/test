import { User } from '@prisma/client';
import { Plan } from 'src/plan/plan.domain';

export interface QuoteProperty {
  id?: string;
  createdAt?: Date;
  updatedAt: Date;
  isDeletedAt?: Date | null;
  price: number;
  plan: Plan;
  planId: string;
  maker: User | null;
  makerId: string | null;
  isConfirmed: Boolean;
  isAssigned: Boolean;
}

export interface IQuote {}

export default class Quote {
  private id?: string;
  private createdAt?: Date;
  private updatedAt: Date;
  private isDeletedAt?: Date | null;
  private price: number;
  private plan: Plan;
  private planId: string;
  private maker: User | null;
  private makerId: string | null;
  private isConfirmed: Boolean;
  private isAssigned: Boolean;
  constructor(private quoteProperty: QuoteProperty) {
    this.id = quoteProperty.id;
    this.createdAt = quoteProperty.createdAt;
    this.updatedAt = quoteProperty.updatedAt;
    this.isDeletedAt = quoteProperty.isDeletedAt;
    this.price = quoteProperty.price;
    this.plan = quoteProperty.plan;
    this.planId = quoteProperty.planId;
    this.maker = quoteProperty.maker;
    this.makerId = quoteProperty.makerId;
    this.isConfirmed = quoteProperty.isConfirmed;
    this.isAssigned = quoteProperty.isAssigned;
  }
  get toDB(): QuoteProperty {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isDeletedAt: this.isDeletedAt,
      price: this.price,
      plan: this.plan,
      planId: this.planId,
      maker: this.maker,
      makerId: this.makerId,
      isConfirmed: this.isConfirmed,
      isAssigned: this.isAssigned
    };
  }
  get toClient(): QuoteProperty {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      price: this.price,
      plan: this.plan,
      planId: this.planId,
      maker: this.maker,
      makerId: this.makerId,
      isConfirmed: this.isConfirmed,
      isAssigned: this.isAssigned
    };
  }
}
