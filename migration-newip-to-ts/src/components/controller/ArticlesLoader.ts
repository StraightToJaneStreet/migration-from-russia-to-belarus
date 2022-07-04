import Loader from './Loader';

import Article from '../core/Article';
import ArticlesResponse from '../app/ArticlesResponse';

export default class ArticlesLoader extends Loader<Article[], ArticlesResponse> {
  protected getEndpoint(): string {
      return this.apiConfig.endpoints.articles;
  }

  protected unwrapResponse(response: Response): Promise<Article[]> {
      const unwrapper = new ArticlesResponse(response);
      return unwrapper.extractEntities();
  }

  public loadBySource(sourceId: string): Promise<Article[]> {
    return this.loadResponse({ sources: sourceId });
  }
}