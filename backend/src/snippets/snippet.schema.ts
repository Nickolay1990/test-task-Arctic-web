import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SnippetType } from 'src/types/snippetType.enum';

export type SnippetDocument = HydratedDocument<Snippet>;

@Schema({ timestamps: true, versionKey: false })
export class Snippet {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ required: true, enum: SnippetType })
  type: SnippetType;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);
SnippetSchema.index({ title: 'text', content: 'text' });
