function errorHandler(res: Response) {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res;
}

interface LoaderOptions {
  apiKey: string
};

class Loader {
  baseLink: any;
  options: any;
  apiKey: string;

  constructor(baseLink: string, options: LoaderOptions) {
    this.apiKey = options.apiKey;
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} },
    callback = () => {
      throw Error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  makeUrl(options, endpoint) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => { throw Error(err); });
  }
}

export default Loader;
