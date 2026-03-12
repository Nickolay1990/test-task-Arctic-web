import { Snippet } from "./snippet.type";

export interface ApiResponseGetAllSnippets {
  status: number;
  message: string;
  data: Snippet[];
  total: number;
  page: number;
}