import { Controller, Get } from '@nestjs/common';
import NotificationService from './notification.service';
import { Notification } from 'mongoose/notification.schema';

@Controller('notifications')
export default class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async getNotifications(): Promise<Notification[] | any> {
    const notifications = await this.notificationService.getNotifications();
    return notifications;
  }
}
