import { StatusType } from "./status.types";

interface Source {
  id: string;
  name: string;
}

export interface TopNew {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface TopNewResponse {
  status: StatusType;
  totalResults: number;
  articles: TopNew[];
}
