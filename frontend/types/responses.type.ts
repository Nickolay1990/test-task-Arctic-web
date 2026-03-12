import { Snippet } from "./snippet.type";

export interface ApiResponseGetAllSnippets {
  status: number;
  message: string;
  data: Snippet[];
  total: number;
  page: number;
}

export interface ApiResponseGetAllTags {
  status: number;
  message: string;
  data: string[];
}

export interface ApiResponseGetSnippetById {
  status: number;
  message: string;
  data: Snippet;
}

export interface ApiResponseDeleteSnippetById {
  status: number;
  message: string;
}