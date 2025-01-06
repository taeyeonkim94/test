import { Quote, Review, User } from '@prisma/client';
import ServiceArea from 'src/type/serviceArea.type';
import Status from 'src/type/status.type';
import TripType from 'src/type/tripType.type';

export interface PlanProperties {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeletedAt?: Date | null;
  startDate: Date;
  endDate: Date;
  tripType: TripType;
  serviceArea: ServiceArea;
  details: string;
  address?: string;
  status: Status;
  quotes: Quote[];
  assignees: User[];
  dreamer?: User;
  dreamerId?: string;
  review?: Review;
}

export interface IPlan {
  toDB(): PlanProperties;
  toClient(): PlanProperties;
  setPlan(data: Partial<PlanProperties>): void;
}

export class Plan implements IPlan {
  private id: string;
  private createdAt: Date;
  private updatedAt: Date;
  private isDeletedAt: Date;
  private startDate: Date;
  private endDate: Date;
  private tripType: TripType;
  private serviceArea: ServiceArea;
  private details: string;
  private address: string;
  private status: Status;
  private quotes: Quote[];
  private assignees: User[];
  private dreamer: User;
  private dreamerId: string;
  private review: Review;
  constructor(private planProperties: PlanProperties) {
    this.id = planProperties.id;
    this.createdAt = planProperties.createdAt;
    this.updatedAt = planProperties.updatedAt;
    this.startDate = planProperties.startDate;
    this.endDate = planProperties.endDate;
    this.tripType = planProperties.tripType;
    this.serviceArea = planProperties.serviceArea;
    this.details = planProperties.details;
    this.address = planProperties.address;
    this.status = planProperties.status;
    this.quotes = planProperties.quotes;
    this.assignees = planProperties.assignees;
    this.dreamer = planProperties.dreamer;
    this.dreamerId = planProperties.dreamerId;
    this.review = planProperties.review;
  }

  toDB(): PlanProperties {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isDeletedAt: this.isDeletedAt,
      startDate: this.startDate,
      endDate: this.endDate,
      tripType: this.tripType,
      serviceArea: this.serviceArea,
      details: this.details,
      address: this.address,
      status: this.status,
      quotes: this.quotes,
      assignees: this.assignees,
      dreamer: this.dreamer,
      dreamerId: this.dreamerId,
      review: this.review
    };
  }
  toClient(): PlanProperties {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      startDate: this.startDate,
      endDate: this.endDate,
      tripType: this.tripType,
      serviceArea: this.serviceArea,
      details: this.details,
      address: this.address,
      status: this.status,
      quotes: this.quotes,
      assignees: this.assignees,
      dreamer: this.dreamer,
      dreamerId: this.dreamerId,
      review: this.review
    };
  }
  setPlan(data: Partial<PlanProperties>): void {
    this.id = data.id || this.id;
    this.createdAt = data.createdAt || this.createdAt;
    this.updatedAt = data.updatedAt || this.updatedAt;
    this.isDeletedAt = data.isDeletedAt || this.isDeletedAt;
    this.startDate = data.startDate || this.startDate;
    this.endDate = data.endDate || this.endDate;
    this.tripType = data.tripType || this.tripType;
    this.serviceArea = data.serviceArea || this.serviceArea;
    this.details = data.details || this.details;
    this.address = data.address || this.address;
    this.status = data.status || this.status;
    this.quotes = data.quotes || this.quotes;
    this.assignees = data.assignees || this.assignees;
    this.dreamer = data.dreamer || this.dreamer;
    this.dreamerId = data.dreamerId || this.dreamerId;
    this.review = data.review || this.review;
  }
}
