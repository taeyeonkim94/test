import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from 'mongoose/notification.schema';

@Injectable()
export default class NotificationRepository {
  constructor(@InjectModel(Notification.name) private notificationModel: Model<Notification>) {}
  async findMany(): Promise<Notification[]> {
    const notifications = this.notificationModel.find().exec();
    return notifications;
  }
}
