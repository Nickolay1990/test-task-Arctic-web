import { ApiResponseGetAllSnippets } from "@/types/responses.type";
import axios from "axios";

axios.defaults.baseURL = "https://test-task-arctic-web.onrender.com/";

export const getAllSnippets = async () => {
  const res = await axios.get<ApiResponseGetAllSnippets>("/snippets");
  
  return res.data;
};