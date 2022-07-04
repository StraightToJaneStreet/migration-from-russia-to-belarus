import Source from '../core/Source';
import { createElement } from '../utils/utils';

export default function SourceView(source: Source) {
  const item = createElement('div', ['source__item']);
  item.setAttribute('data-source-id', source.id);

  const name = createElement('span', ['source__item-name']);
  name.textContent = source.name

  item.append(name);

  return item;
}