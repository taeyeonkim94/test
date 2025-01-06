import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import NotificationSchema, { Notification } from 'mongoose/notification.schema';
import NotificationController from './notification.controller';
import NotificationService from './notification.service';
import NotificationRepository from './notification.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }], 'MONGO_CONNECTION')],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationRepository]
})
export default class NotificationModule {}
