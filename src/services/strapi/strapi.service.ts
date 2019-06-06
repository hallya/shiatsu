import { getData } from '@/services/http/AxiosGet';
import { Article } from './strapi.interface';
const STRAPI_URL = 'https://backoffice-shiatsu.herokuapp.com';

export const getArticles = (): Promise<Article[]> => {
  return getData(STRAPI_URL + '/articles');
};

export const getArticle = (id: string): Promise<Article> => {
  return getData(STRAPI_URL + `/articles/${id}`);
};
