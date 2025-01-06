import { Injectable } from '@nestjs/common';
import NotificationRepository from './notification.repository';
import { Notification } from 'mongoose/notification.schema';

@Injectable()
export default class NotificationService {
  constructor(private readonly notificationService: NotificationRepository) {}

  async getNotifications(): Promise<Notification[] | any> {
    //const notifications = await this.notificationService.findMany();
    //return notifications;
    return 111;
  }
}
