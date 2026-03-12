import { ApiResponseGetAllSnippets, ApiResponseGetAllTags } from "@/types/responses.type";
import axios from "axios";

axios.defaults.baseURL = "https://test-task-arctic-web.onrender.com/";

export const getAllSnippets = async (tags: string[]) => {  
  const res = await axios.get<ApiResponseGetAllSnippets>("/snippets", {
   params: {
      tags: tags.join(",")
    }
  });
  
  return res.data;
};

export const getAllTags = async () => {
  const res = await axios.get<ApiResponseGetAllTags>("/snippets/tags");
  
  return res.data;
};