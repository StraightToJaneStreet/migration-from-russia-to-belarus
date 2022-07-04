import Source from '../core/Source';
import { createElement } from '../utils/utils';

export default function SourceView(source: Source, changeSourceCallback: Function) {
  const item = createElement('div', ['source__item']);
  item.addEventListener('click', () => changeSourceCallback(source.id));

  const name = createElement('span', ['source__item-name']);
  name.textContent = source.name

  item.append(name);

  return item;
}