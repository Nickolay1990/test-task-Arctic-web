import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import { CreateSnippetDto } from 'src/dto/createSnippet.dto';
import { UpdateSnippetDto } from 'src/dto/updateSnippet.dto';
import {
  ApiResponseCreateSnippet,
  ApiResponseDeleteSnippet,
  ApiResponseGetAllSnippets,
  ApiResponseGetAllTags,
  ApiResponseGetSnippetById,
  ApiResponseUpdateSnippet,
} from 'src/types/response.type';

@Controller('snippets')
export class SnippetsController {
  constructor(private readonly snippetService: SnippetsService) {}

  @Get()
  async getAllSnippets(
    @Query('page') page: number,
    @Query('tags') tags?: string[],
    @Query('q') q?: string,
  ): Promise<ApiResponseGetAllSnippets> {
    return await this.snippetService.getAllSnippets({ page, tags, q });
  }

  @Get('tags')
  async getAllTags(): Promise<ApiResponseGetAllTags> {
    return await this.snippetService.getAllTags();
  }

  @Post()
  async createSnippet(
    @Body() body: CreateSnippetDto,
  ): Promise<ApiResponseCreateSnippet> {
    return await this.snippetService.createSnippet(body);
  }

  @Get(':id')
  async getSnippetById(
    @Param('id') id: string,
  ): Promise<ApiResponseGetSnippetById> {
    return await this.snippetService.getSnippetById(id);
  }

  @Patch(':id')
  async updateSnippet(
    @Body() body: UpdateSnippetDto,
    @Param('id') id: string,
  ): Promise<ApiResponseUpdateSnippet> {
    return await this.snippetService.updateSnippet(body, id);
  }

  @Delete(':id')
  async deleteSnippet(
    @Param('id') id: string,
  ): Promise<ApiResponseDeleteSnippet> {
    return await this.snippetService.deleteSnippet(id);
  }
}
