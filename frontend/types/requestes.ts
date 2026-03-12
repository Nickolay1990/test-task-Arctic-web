import { SnippetType } from "./snippet.type";

export interface SnippetCreateRequest {
  title: string;
  content: string;
  tags: string[];
  type: SnippetType;
};

export interface SnippetUpdateRequest {
  title?: string;
  content?: string;
  tags?: string[];
  type?: SnippetType;
};