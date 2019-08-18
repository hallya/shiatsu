import { getData } from '@/services/http/getData';
import { Post } from './api.types';
import store from '@/store/store';

export default class Articles {
  public static getAll(): Promise<Post[]> {
    return getData(store.state.domains.backendHostname + '/articles');
  }

  public static get(id: string): Promise<Post> {
    return getData(store.state.domains.backendHostname + `/articles/${id}`);
  }
}