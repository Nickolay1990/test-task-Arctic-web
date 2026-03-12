import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSnippetDto } from 'src/dto/createSnippet.dto';
import { UpdateSnippetDto } from 'src/dto/updateSnippet.dto';
import { Snippet, SnippetDocument } from './snippet.schema';
import { isValidObjectId, Model } from 'mongoose';
import {
  ApiResponseCreateSnippet,
  ApiResponseDeleteSnippet,
  ApiResponseGetAllSnippets,
  ApiResponseGetAllTags,
  ApiResponseGetSnippetById,
  ApiResponseUpdateSnippet,
} from 'src/types/response.type';
import { QueryParams } from 'src/types/queryParams.type';
import { SnippetFilters } from 'src/types/snippetFilters.type';

@Injectable()
export class SnippetsService {
  constructor(
    @InjectModel(Snippet.name)
    private snippetModel: Model<SnippetDocument>,
  ) {}

  async getAllSnippets({
    page,
    tags,
    q,
  }: QueryParams): Promise<ApiResponseGetAllSnippets> {
    const limit = 10;
    const filters: SnippetFilters = {};
    const pageNumber = page && page > 0 ? page : 1;

    if (q) {
      filters.$text = { $search: q };
    }

    if (tags && tags.length > 0) {
      filters.tags = { $in: tags };
    }

    const snippets = await this.snippetModel
      .find(filters)
      .skip((pageNumber - 1) * limit)
      .limit(limit);

    const total = await this.snippetModel.countDocuments(filters);

    return {
      status: 200,
      message: 'Find snippets successfully',
      data: snippets,
      total,
      page: pageNumber,
    };
  }

  async createSnippet(
    body: CreateSnippetDto,
  ): Promise<ApiResponseCreateSnippet> {
    try {
      const newSnippet = await this.snippetModel.create(body);

      return {
        status: 201,
        message: 'Create snippet successfully',
        data: newSnippet,
      };
    } catch {
      throw new BadRequestException('Failed to create snippet');
    }
  }

  async getSnippetById(id: string): Promise<ApiResponseGetSnippetById> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid snippet id');
    }

    const snippet = await this.snippetModel.findById(id);

    if (!snippet) {
      throw new NotFoundException(`Snippet with id ${id} not found`);
    }
    return {
      status: 200,
      message: 'Find snippet successfully',
      data: snippet,
    };
  }

  async updateSnippet(
    body: UpdateSnippetDto,
    id: string,
  ): Promise<ApiResponseUpdateSnippet> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid snippet id');
    }

    const updatedSnippet = await this.snippetModel.findByIdAndUpdate(
      id,
      { $set: body },
      { returnDocument: 'after' },
    );

    if (!updatedSnippet) {
      throw new NotFoundException(`Snippet with id ${id} not found`);
    }

    return {
      status: 200,
      message: 'Snippet updated successfully',
      data: updatedSnippet,
    };
  }

  async deleteSnippet(id: string): Promise<ApiResponseDeleteSnippet> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid snippet id');
    }

    const deletedSnippet = await this.snippetModel.findByIdAndDelete(id);

    if (!deletedSnippet) {
      throw new NotFoundException(`Snippet with id ${id} not found`);
    }

    return {
      status: 200,
      message: 'Snippet deleted successfully',
    };
  }

  async getAllTags(): Promise<ApiResponseGetAllTags> {
    const tags = await this.snippetModel.distinct('tags');
    return {
      status: 200,
      message: 'Find snippets successfully',
      data: tags,
    };
  }
}
