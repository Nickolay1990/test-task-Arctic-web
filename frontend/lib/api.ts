import { ApiResponseGetAllSnippets, ApiResponseGetAllTags, ApiResponseGetSnippetById } from "@/types/responses.type";
import axios from "axios";

axios.defaults.baseURL = "https://test-task-arctic-web.onrender.com/";

export const getAllSnippets = async (tags: string[], search: string) => {
  const validTags = tags.filter(tag => tag.trim() !== "");
  const params: Record<string, string> = {};

  if (validTags.length > 0) {
    params.tags = validTags.join(",");
  }

   if (search.trim()) {
    params.q = search.trim()
  }

  const res = await axios.get<ApiResponseGetAllSnippets>("/snippets", { params });

  return res.data;
};

export const getAllTags = async () => {
  const res = await axios.get<ApiResponseGetAllTags>("/snippets/tags");
  
  return res.data;
};

export const getSnippetById = async (id: string) => {
  const res = await axios.get<ApiResponseGetSnippetById>(`/snippets/${id}`);
  
  return res.data;
};

export const createSnippet = async (body) => {
  const res = await axios.post<ApiResponseGetSnippetById>(`/snippets`, body);
  
  return res.data;
};