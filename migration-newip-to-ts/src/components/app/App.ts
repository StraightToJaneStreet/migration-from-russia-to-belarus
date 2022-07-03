import AppController from '../controller/Controller';
import { AppView } from '../view/AppView';

class App {
  controller: any;
  view: any;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sourcesElement = document.querySelector('.sources');
    if (sourcesElement === null) {
      throw Error('sources element is not exists');
    }
    sourcesElement.addEventListener('click', (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    this.controller.getSources((data) => this.view.drawSources(data));
  }
}

export default App;
