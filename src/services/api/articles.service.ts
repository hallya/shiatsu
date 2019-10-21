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

  public getAll(): Promise<ArticleFormated[]> {
    return getData(store.state.domains.backendOrigin + this.apiPath).then(
      this.formatForMany,
    );
  }

  public get(id: string): Promise<ArticleFormated> {
    return getData(
      store.state.domains.backendOrigin + `${this.apiPath}/${id}`,
    ).then(this.formatForOne);
  }

  private formatForMany(articles: Article[]): ArticleFormated[] {
    return articles
      .map(this.formatForOne)
      .map((article) => ({
        ...article,
        contentIsVisible: false,
      }))
      .sort(this.byDate);
  }

  private formatForOne(article: Article): ArticleFormated {
    const formatedArticle = {
      ...article,
      preview: convertToHtml(this.previewOf(article.content)),
      content: convertToHtml(article.content),
      shareLink: this.generateFacebookShareLink(article.id),
    };
    return formatedArticle;
  }

  private byDate(a: ArticleFormated, b: ArticleFormated): number {
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
    return (
      contentInMarkdown.slice(from, this.idealPosition(contentInMarkdown)) +
      ' . . .'
    );
  }

  private idealPosition(text: string): number {
    return text.indexOf('.');
  }

  private generateFacebookShareLink(id: string): string {
    const { baseUrlFrontend, hash } = store.state.domains;
    const shareLink =
      'https://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(`${baseUrlFrontend}#/blog/${id}`) +
      '&amp;src=sdkpreparse';
    return shareLink;
  }
}
