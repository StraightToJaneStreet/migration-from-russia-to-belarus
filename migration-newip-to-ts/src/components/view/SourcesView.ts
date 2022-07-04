import './css/sourcesView.css';
import Source from '../core/Source';
import SourceView from './SourceView';

class Sources {
  container: HTMLElement;
  changeSourceCallback: Function;

  constructor(root: HTMLElement, changeSourceCallback: Function) {
    this.container = document.createElement('div');
    this.container.classList.add('sources', 'buttons');
    this.changeSourceCallback = changeSourceCallback;
    root.append(this.container);
  }

  draw(sources: Source[]) {
    const fragment = document.createDocumentFragment();

    sources.forEach((source) => {
      const sourceElement = SourceView(source, this.changeSourceCallback);
      fragment.append(sourceElement);
    });

    this.container.innerHTML = '';
    this.container.append(fragment);
  }
}

export default Sources;
