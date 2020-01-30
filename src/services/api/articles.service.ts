import { convertToHtml } from '@/services/converter/markdownToHtml';

import { getData } from '@/services/http/getData';
import { Article, ArticleFormated } from './articles.types';

import store from '@/store/store';

export default class Articles {
  private apiPath: string = '/articles';

  constructor() {
    this.formatForMany = this.formatForMany.bind(this);
    this.formatForOne = this.formatForOne.bind(this);
  }

  public getAll = (): Promise<ArticleFormated[]> =>
    getData(store.state.domains.backendOrigin + this.apiPath).then(
      this.formatForMany,
    );

  public get = (id: string): Promise<ArticleFormated> =>
    getData(`${store.state.domains.backendOrigin}${this.apiPath}/${id}`).then(
      this.formatForOne,
    );

  private formatForMany = (articles: Article[]): ArticleFormated[] => {
    return articles
      .map(this.formatForOne)
      .map((article) => ({
        ...article,
        contentIsVisible: false,
      }))
      .sort(this.byDate);
  };

  private formatForOne(article: Article): ArticleFormated {
    return {
      ...article,
      image: {
        ...article.image,
        url: store.state.domains.backendOrigin + article.image.url,
      },
      content: convertToHtml(article.content),
      shareLink: this.generateFacebookShareLink(article.id),
    };
  }

  private byDate(a: ArticleFormated, b: ArticleFormated): number {
    const dateA = new Date(a.updated_at).getTime();
    const dateB = new Date(b.updated_at).getTime();

    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  }

  private idealPosition(text: string): number {
    return text.indexOf('.');
  }

  private generateFacebookShareLink(id: string): string {
    const { baseUrlFrontend } = store.state.domains;
    const shareLink =
      'https://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(`${baseUrlFrontend}/blog/${id}`) +
      '&amp;src=sdkpreparse';
    return shareLink;
  }
}
