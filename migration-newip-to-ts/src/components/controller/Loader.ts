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

class Loader<TResponseContent> {
  baseLink: any;
  apiKey: string;

  constructor({ baseLink, apiKey }: LoaderOptions) {
    this.apiKey = apiKey;
    this.baseLink = baseLink;
  }

  getResp(endpoint: string, options: URLOptions = {}) {
    return this.load('GET', endpoint, options);
  }

  makeUrl(endpoint: string, options: URLOptions) {
    const urlOptions: URLOptions = { apiKey: this.apiKey, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, options = {}): Promise<TResponseContent> {
    const targetUrl = this.makeUrl(endpoint, options);
    return fetch(targetUrl, { method })
      .then(errorHandler)
      .then((res) => res.json())
      .catch((err) => { throw Error(err); });
  }
}

export default Loader;
