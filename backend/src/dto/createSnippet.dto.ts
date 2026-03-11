import {
  ArrayMaxSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { SnippetType } from 'src/types/snippetType.enum';

export class CreateSnippetDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title must be not empty' })
  title: string;

  @IsString({ message: 'Content must be a string' })
  @IsNotEmpty({ message: 'Content must be not empty' })
  content: string;

  @IsArray({ message: 'Tags must be an array' })
  @IsString({ each: true, message: 'Each tag must be a string' })
  @ArrayMaxSize(10, { message: 'Maximum 10 tags allowed' })
  tags: string[];

  @IsEnum(SnippetType, { message: 'Type must be link, note or command' })
  type: SnippetType;
}
