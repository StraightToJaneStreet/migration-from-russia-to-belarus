import Source from '../core/Source';

function createElement(tag: string, classes: string[]): HTMLElement {
  const element = document.createElement('tag');
  element.classList.add(...classes);
  return element;
}

export default function SourceView(source: Source) {
  const item = createElement('div', ['source__item']);
  item.setAttribute('data-source-id', source.id);

  const name = createElement('span', ['source__item-name']);
  name.textContent = source.name

  item.append(name);

  return item;
}