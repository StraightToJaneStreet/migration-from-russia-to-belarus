import Loader from './Loader';

import Article from '../core/Article';
import ArticlesResponse from '../app/ArticlesResponse';

export default class ArticlesLoader extends Loader<Article[], ArticlesResponse> {
  protected unwrapResponse(response: Response): Promise<Article[]> {
      const unwrapper = new ArticlesResponse(response);
      return unwrapper.extractEntities();
  }
}