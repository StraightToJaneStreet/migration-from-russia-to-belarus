import Loader from './Loader';

import Source from '../core/Source';
import SourcesResponse from '../app/SourcesResponse';

export default class SourcesLoader extends Loader<Source[], SourcesResponse> {
  protected unwrapResponse(response: Response): Promise<Source[]> {
      const unwrapper = new SourcesResponse(response);
      return unwrapper.extractEntities();
  }
}