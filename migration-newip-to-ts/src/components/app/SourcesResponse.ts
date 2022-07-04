import BackendResponse from './BackendResponse';

import SourcesResponseBody from './newsApiTypes/SourcesResponseBody';
import Source from '../core/Source';

export default class SourcesResponse extends BackendResponse<Source> {
  extractEntities(): Promise<Source[]> {
    const bodyPromise = this.response.json() as Promise<SourcesResponseBody>;
    return bodyPromise.then(body => body.sources);
  }
}
