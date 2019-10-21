import { Article } from '@/services/api/articles.types';

export interface ListPost {
  articles: Article[];
  baseUrl: string;
  frontendOrigin: string;
}
