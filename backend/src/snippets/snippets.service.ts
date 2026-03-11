import { Injectable } from '@nestjs/common';
import { CreateSnippetDto } from 'src/dto/createSnippet.dto';
import { UpdateSnippetDto } from 'src/dto/updateSnippet.dto';

@Injectable()
export class SnippetsService {
  getAllSnippets(): string {
    return 'All snippets';
  }

  createSnippet(body: CreateSnippetDto): {
    message: string;
    body: CreateSnippetDto;
  } {
    return {
      message: 'create snippet',
      body,
    };
  }

  getSnippetById(): string {
    return 'snippet by ID';
  }

  updateSnippet(body: UpdateSnippetDto): {
    message: string;
    body: UpdateSnippetDto;
  } {
    return {
      message: 'update snippet',
      body,
    };
  }

  deleteSnippet(): string {
    return 'delete snippet';
  }
}
