export function errorHandler(res: Response) {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res;
}

export type URLOptions = { [key: string]: string };

export function makeUrl(base: string, endpoint: string, options: URLOptions) {
  const url = `${base}${endpoint}`;
  const createOptionPair = (key: string, value: string) => `${key}=${value}`;
  const optionsKeys = Object.keys(options);
  const optionsString = optionsKeys
    .map(key => createOptionPair(key, options[key]))
    .join('&');
  return `${url}?${optionsString}`;
}

export function createElement(tag: string, classes: string[]): HTMLElement {
  const element = document.createElement('tag');
  element.classList.add(...classes);
  return element;
}
