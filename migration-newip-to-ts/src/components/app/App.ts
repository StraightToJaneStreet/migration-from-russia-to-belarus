import AppController from '../controller/Controller';
import { AppView } from '../view/AppView';
import SourcesLoader from '../controller/SourcesLoader';
import ArticlesLoader from '../controller/ArticlesLoader';
import ApiConfiguration from './ApiConfiguration';

class App {
  controller: any;
  view: AppView;
  sourcesLoader: SourcesLoader;
  articlesLoader: ArticlesLoader;

  constructor() {
    const appRoot = document.getElementById('#app');
    if (appRoot === null) {
      throw Error('Cant find root element');
    }

    this.controller = new AppController();

    const apiConfig: ApiConfiguration = {
      baseUrl: 'https://newsapi.org/v2/',
      apiKey: '23eda7a9a1ba47178e932adfe3cfdb26',
      endpoints: {
        sources: '/v2/top-headlines/sources',
        articles: '/v2/top-headlines'
      }
    }

    this.sourcesLoader = new SourcesLoader(apiConfig);
    this.articlesLoader = new ArticlesLoader(apiConfig);

    this.view = new AppView(appRoot, this.updateSource);
  }

  updateSource(sourceId: string) {
    this.articlesLoader
      .loadBySource(sourceId)
      .then((articles) => this.view.drawNews(articles));
  }

  start() {
    const sourcesPromise = this.sourcesLoader.loadResponse();
    sourcesPromise.then(sources => this.view.drawSources(sources));
  }
}

export default App;
