import { Quote, User } from '@prisma/client';
import ServiceArea from 'src/type/serviceArea.type';
import Status from 'src/type/status.type';
import TripType from 'src/type/tripType.type';

export default interface CreatePlanData {
  startDate: Date;
  endDate: Date;
  tripType: TripType;
  serviceArea: ServiceArea;
  details: string;
  address?: string | null;
  assigneeIds: string[];
  dreamerId?: string | null;
  dreamer?: User | null;
}
