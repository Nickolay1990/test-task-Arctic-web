import {
  ArrayMaxSize,
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { SnippetType } from 'src/types/snippetType.enum';

export class UpdateSnippetDto {
  @IsString({ message: 'Title must be a string' })
  @IsOptional()
  title?: string;

  @IsString({ message: 'Content must be a string' })
  @IsOptional()
  content?: string;

  @IsArray({ message: 'Tags must be an array' })
  @IsOptional()
  @IsString({ each: true, message: 'Each tag must be a string' })
  @ArrayMaxSize(10, { message: 'Maximum 10 tags allowed' })
  tags?: string[];

  @IsEnum(SnippetType, { message: 'Type must be link, note or command' })
  @IsOptional()
  type?: SnippetType;
}
