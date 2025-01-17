import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ExampleModule from './example/example.module';
import PrismaModule from 'prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from '../config/mongo.config';
import PlanModule from './plan/plan.module';
import NotificationModule from './notification/notification.module';
import NotificationSchema, { Notification } from 'mongoose/notification.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: async () => getMongoConfig(process.env.MONGO_URI),
      connectionName: process.env.CONNECTION_NAME
    }),
    PrismaModule,
    ExampleModule,
    PlanModule,
    NotificationModule
  ],
  controllers: [],
  providers: []
})
export default class AppModule {}
