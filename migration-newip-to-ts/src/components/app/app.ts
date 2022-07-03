import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  controller: any;
  view: any;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    function (e: Event) {

    }
    const sourcesElement = document.querySelector('.sources');
    if (sourcesElement === null) {
      throw Error('sources element is not exists');
    }
    sourcesElement.addEventListener('click', (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    this.controller.getSources((data) => this.view.drawSources(data));
  }
}

export default App;
