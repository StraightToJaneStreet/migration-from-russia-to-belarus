import { makeUrl, errorHandler, URLOptions } from '../utils/utils';
import BackendResponse from '../app/BackendResponse';
import ApiConfiguration from '../app/ApiConfiguration';

abstract class Loader<K, T extends BackendResponse<K>> {
  baseUrl: any;
  apiKey: string;

  constructor(apiConfig: ApiConfiguration) {
    this.apiKey = apiConfig.apiKey;
    this.baseUrl = apiConfig.baseUrl;
  }

  makeRelativeUrl(endpoint: string, options: URLOptions) {
    const urlOptions: URLOptions = { apiKey: this.apiKey, ...options };
    return makeUrl(this.baseUrl, endpoint, urlOptions);
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
