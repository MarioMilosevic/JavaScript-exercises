import { BackendView, Content, View } from "../types";
import axios from "axios";

export const getViews = async (): Promise<View[]> => {
  const response = await axios.get<BackendView[]>(
    "http://localhost:3004/views"
  );
  return response.data.map((backendView) => ({
    ...backendView,
    content: parseContent(backendView.content),
  }));
};

export const parseContent = (content: string): Content => {
  try {
    return JSON.parse(content);
  } catch {
    return { questions: [] };
  }
};
