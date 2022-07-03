import './css/sourcesView.css';
import Source from '../core/source';
import SourceView from './sourceView';

class Sources {
  container: HTMLElement;

  constructor(root: HTMLElement) {
    this.container = document.createElement('div');
    this.container.classList.add('sources', 'buttons');
    root.append(this.container);
  }

  draw(sources: Source[]) {
    const fragment = document.createDocumentFragment();

    sources.forEach((source) => {
      const sourceElement = SourceView(source);
      fragment.append(sourceElement);
    });

    this.container.innerHTML = '';
    this.container.append(fragment);
  }
}

export default Sources;
