import { convertToHtml } from '@/services/converter/markdownToHtml';

import { getData } from '@/services/http/getData';
import { Post, PostFormated } from './articles.types';

import store from '@/store/store';

export default class Articles {

  private apiPath: string = '/articles';

  constructor() {
    this.formatForMany = this.formatForMany.bind(this);
    this.formatForOne = this.formatForOne.bind(this);
  }

  public getAll(): Promise<PostFormated[]> {
    return getData(store.state.domains.backendHostname + this.apiPath)
      .then(this.formatForMany);
  }

  public get(id: string): Promise<PostFormated> {
    return getData(store.state.domains.backendHostname + `${this.apiPath}/${id}`)
      .then(this.formatForOne);
  }

  private formatForMany(articles: Post[]): PostFormated[] {
    return articles
      .map(this.formatForOne)
      .map((article) => ({
        ...article,
        contentIsVisible: false,
      })).sort(this.byDate);
    }

  private formatForOne(article: Post): PostFormated {
    const formatedArticle = {
      ...article,
      preview: convertToHtml(this.previewOf(article.content)),
      content: convertToHtml(article.content),
      shareLink: this.generateShareLink(article.id),
    };
    return formatedArticle;
  }

  private byDate(a: PostFormated, b: PostFormated): number {
    const dateA = new Date(a.updatedAt).getTime();
    const dateB = new Date(b.updatedAt).getTime();

    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  }

  private previewOf(contentInMarkdown: string): string {
    const from = 0;
    return contentInMarkdown.slice(from, this.idealPosition(contentInMarkdown)) + ' . . .';
  }

  private idealPosition(text: string): number {
    return text.indexOf('.');
  }

  private generateShareLink(id: string): string {
    return 'https://www.facebook.com/sharer/sharer.php?u='
      + encodeURIComponent(store.state.domains.frontendHostname + '/#/blog/posts/' + id)
      + '&amp;src=sdkpreparse';
  }
}