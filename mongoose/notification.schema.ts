import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema({ timestamps: true })
export class Notification {
  @Prop({ default: null })
  isDeletedAt: Date | null;

  @Prop()
  userId: string | null;

  @Prop({ isRequired: true })
  content: string;

  @Prop({ default: false })
  isRead: boolean;
}
const NotificationSchema = SchemaFactory.createForClass(Notification);
export default NotificationSchema;
