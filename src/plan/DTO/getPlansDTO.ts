import { ServiceArea } from '@prisma/client';
import { Transform, Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export default class GetPlansOptionDTO {
  @Transform(({ value }) => EnumPlanOrder[value])
  orderBy: EnumPlanOrder = EnumPlanOrder.RECENT;

  @IsOptional()
  @IsString()
  keyword?: string;

  @Transform(({ value }) => ServiceArea[value])
  serviceArea: ServiceArea;

  @Type(() => Number)
  @IsInt()
  page: number = 1;

  @Type(() => Number)
  @IsInt()
  pageSize: number = 5;
}

export enum EnumPlanOrder {
  SCHEDULE_FIRST = 'scheduleFirst', //기본 값
  RECENT = 'recent'
}
