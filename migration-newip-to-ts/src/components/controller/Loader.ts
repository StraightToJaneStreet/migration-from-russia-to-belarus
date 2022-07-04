import { makeUrl, errorHandler, URLOptions } from '../utils/utils';
import BackendResponse from '../app/BackendResponse';

abstract class Loader<K, T extends BackendResponse<K>> {
  baseLink: any;
  apiKey: string;

  constructor(baseLink: string, apiKey: string) {
    this.apiKey = apiKey;
    this.baseLink = baseLink;
  }

  makeRelativeUrl(endpoint: string, options: URLOptions) {
    const urlOptions: URLOptions = { apiKey: this.apiKey, ...options };
    return makeUrl(this.baseLink, endpoint, urlOptions);
  }

  loadResponse(endpoint: string, options: URLOptions = {}): Promise<K> {
    const targetUrl = this.makeRelativeUrl(endpoint, options);
    return fetch(targetUrl, { method: 'GET' })
      .catch((err) => { throw Error(err); })
      .then(errorHandler)
      .then(this.unwrapResponse)
  }

  protected abstract unwrapResponse(response: Response): Promise<K>;
}

export default Loader;
