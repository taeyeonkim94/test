import { User } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsIn } from 'class-validator';
import ServiceArea from 'src/type/serviceArea.type';
import TripType from 'src/type/tripType.type';

export default class CreatePlanData {
  @Type(() => Date)
  @IsDate()
  startDate: Date;

  @Type(() => Date)
  @IsDate()
  endDate: Date;

  tripType: TripType;
  serviceArea: ServiceArea;
  details: string;
  address?: string | null;
  assignees?: User[];
  assigneeIds?: string[];
  dreamerId?: string | null = 'a3f3f3b7-84a9-4b2c-8289-345f607c4626';
  dreamer?: User | null;
}
