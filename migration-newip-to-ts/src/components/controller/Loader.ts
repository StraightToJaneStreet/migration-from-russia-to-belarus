import { makeUrl, errorHandler, URLOptions } from '../utils/utils';

import ApiConfiguration from '../app/ApiConfiguration';

abstract class Loader<K> {
  apiConfig: ApiConfiguration

  endpoint: string;

  constructor(apiConfig: ApiConfiguration) {
    this.apiConfig = apiConfig
    this.endpoint = this.getEndpoint();
  }

  protected abstract getEndpoint(): string;

  makeRelativeUrl(endpoint: string, options: URLOptions) {
    const urlOptions: URLOptions = { apiKey: this.apiConfig.apiKey, ...options };
    return makeUrl(this.apiConfig.baseUrl, endpoint, urlOptions);
  }

  loadResponse(options: URLOptions = {}): Promise<K> {
    const endpoint = this.endpoint;
    const targetUrl = this.makeRelativeUrl(endpoint, options);
    return fetch(targetUrl, { method: 'GET' })
      .catch((err) => { throw Error(err); })
      .then(errorHandler)
      .then(this.unwrapResponse)
  }

  protected abstract unwrapResponse(response: Response): Promise<K>;
}

export default Loader;
