import Source from '../core/Source';
import { createElement } from '../utils/utils';

 import ChangeSourceCallback from '../app/SourcesCallbackFunction';

export default function SourceView(source: Source, changeSourceCallback: ChangeSourceCallback) {
  const item = createElement('div', ['source__item']);
  item.addEventListener('click', () => changeSourceCallback(source.id));

  const name = createElement('span', ['source__item-name']);
  name.textContent = source.name

  item.append(name);

  return item;
}