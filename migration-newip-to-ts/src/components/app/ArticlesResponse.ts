import BackendResponse from './BackendResponse';

import ArticlesResponseBody from './newsApiTypes/ArticlesResponseBody';
import Article from '../core/Article';

export default class ArticlesResponse extends BackendResponse<Article[]> {
  extractEntities(): Promise<Article[]> {
    const bodyPromise = this.response.json() as Promise<ArticlesResponseBody>;
    return bodyPromise.then(body => body.articles);
  }
}
