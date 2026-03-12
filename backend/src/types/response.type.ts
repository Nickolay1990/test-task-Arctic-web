import { SnippetDocument } from 'src/snippets/snippet.schema';

export interface ApiResponseCreateSnippet {
  status: number;
  message: string;
  data: SnippetDocument;
}

export interface ApiResponseGetAllSnippets {
  status: number;
  message: string;
  data: SnippetDocument[];
  total: number;
  page: number;
}

export interface ApiResponseGetSnippetById {
  status: number;
  message: string;
  data: SnippetDocument;
}

export interface ApiResponseUpdateSnippet {
  status: number;
  message: string;
  data: SnippetDocument;
}

export interface ApiResponseDeleteSnippet {
  status: number;
  message: string;
}

export interface ApiResponseGetAllTags {
  status: number;
  message: string;
  data: string[];
}
