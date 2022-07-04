function errorHandler(res: Response) {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res;
}

type URLOptions = { [key: string]: string };

function makeUrl(base: string, endpoint: string, options: URLOptions) {
  const url = `${base}${endpoint}`;
  const createOptionPair = (key: string, value: string) => `${key}=${value}`;
  const optionsKeys = Object.keys(options);
  const optionsString = optionsKeys
    .map(key => createOptionPair(key, options[key]))
    .join('');

  return `${url}?${optionsString}`;
}

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
