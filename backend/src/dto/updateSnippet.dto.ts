import { ArrayMaxSize, IsArray, IsEnum, IsString } from 'class-validator';
import { snippetType } from 'src/types/snippetType.enum';

export class UpdateSnippetDto {
  @IsString({ message: 'Title must be a string' })
  title?: string;

  @IsString({ message: 'Content must be a string' })
  content?: string;

  @IsArray({ message: 'Tags must be an array' })
  @IsString({ each: true, message: 'Each tag must be a string' })
  @ArrayMaxSize(10, { message: 'Maximum 10 tags allowed' })
  tags?: string[];

  @IsEnum(snippetType, { message: 'Type must be link, note or command' })
  type?: snippetType;
}
