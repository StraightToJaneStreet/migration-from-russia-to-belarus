import './sources.css';
import Source from 'Core/source';

class Sources {
  draw(data: Source[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
    if (sourceItemTemp === null) {
      throw Error('source template does not exists');
    }

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources').append(fragment);
  }
}

export default Sources;
