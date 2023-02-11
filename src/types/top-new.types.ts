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
  category?: string;
  id?: number;
}

export interface TopNewResponse {
  status: StatusType;
  totalResults: number;
  articles: TopNew[];
}

export interface News {
  docs: TopNew[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pagingCounter?: any;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevPage?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nextPage?: any;
}

interface Data {
  ok: boolean;
  news: News;
}
export interface NewsApiResponse {
  data: Data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  statusText: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: any;
}
