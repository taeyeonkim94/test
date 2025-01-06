import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
class Message {
  @Prop({ default: null })
  isDeletedAt: Date | null;

  @Prop()
  senderId: string | null;

  @Prop({
    required: true,
    ref: 'Chat'
  })
  chatId: Types.ObjectId;

  @Prop({ required: true })
  content: string;
}
const MessageSchema = SchemaFactory.createForClass(Message);
