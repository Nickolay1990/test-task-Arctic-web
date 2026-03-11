import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import { CreateSnippetDto } from 'src/dto/createSnippet.dto';
import { UpdateSnippetDto } from 'src/dto/updateSnippet.dto';

@Controller('snippets')
export class SnippetsController {
  constructor(private readonly snippetService: SnippetsService) {}

  @Get()
  getAllSnippets(): string {
    return this.snippetService.getAllSnippets();
  }

  @Post()
  createSnippet(@Body() body: CreateSnippetDto): {
    message: string;
    body: CreateSnippetDto;
  } {
    return this.snippetService.createSnippet(body);
  }

  @Get(':id')
  getSnippetById(): string {
    return this.snippetService.getSnippetById();
  }

  @Patch(':id')
  updateSnippet(@Body() body: CreateSnippetDto): {
    message: string;
    body: UpdateSnippetDto;
  } {
    return this.snippetService.updateSnippet(body);
  }

  @Delete(':id')
  deleteSnippet(): string {
    return this.snippetService.deleteSnippet();
  }
}
