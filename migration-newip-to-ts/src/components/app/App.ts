import AppController from '../controller/Controller';
import { AppView } from '../view/AppView';

class App {
  controller: any;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    const appRoot = document.getElementById('#app');
    if (appRoot === null) {
      throw Error('Cant find root element');
    }
    this.view = new AppView(appRoot);
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
