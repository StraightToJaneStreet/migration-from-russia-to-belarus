function errorHandler(res: Response) {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res;
}

type URLOptions = { [key: string]: string };

interface LoaderOptions {
  baseLink: string,
  apiKey: string
};

function makeUrl(base: string, endpoint: string, options: URLOptions) {

  const url = `${base}${endpoint}`;
  const createOptionPair = (key: string, value: string) => `${key}=${value}`;
  const optionsKeys = Object.keys(options);
  const optionsString = optionsKeys
    .map(key => createOptionPair(key, options[key]))
    .join('');

  return `${url}?${optionsString}`;
}

abstract class Loader<TResponseContent> {
  baseLink: any;
  apiKey: string;

  constructor({ baseLink, apiKey }: LoaderOptions) {
    this.apiKey = apiKey;
    this.baseLink = baseLink;
  }

  makeRelativeUrl(endpoint: string, options: URLOptions) {
    const urlOptions: URLOptions = { apiKey: this.apiKey, ...options };
    return makeUrl(this.baseLink, endpoint, urlOptions);
  }

  load(endpoint: string, options: URLOptions = {}): Promise<TResponseContent> {
    const targetUrl = this.makeRelativeUrl(endpoint, options);
    return fetch(targetUrl, { method: 'GET' })
      .then(errorHandler)
      .then((res) => res.json())
      .catch((err) => { throw Error(err); });
  }
}

export default Loader;
