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

    const apiConfig: ApiConfiguration = {
      baseUrl: 'https://newsapi.org/v2/',
      apiKey: '23eda7a9a1ba47178e932adfe3cfdb26',
      endpoints: {
        sources: '/top-headlines/sources',
        articles: '/top-headlines'
      }
    }

    this.sourcesLoader = new SourcesLoader(apiConfig);
    this.articlesLoader = new ArticlesLoader(apiConfig);

    this.view = new AppView(appRoot, this.updateSource.bind(this));
  }

  updateSource(sourceId: string) {
    this.articlesLoader
      .loadBySource(sourceId)
      .then((articles) => this.view.drawNews(articles));
  }

  start() {
    const sourcesPromise = this.sourcesLoader.loadResponse();
    sourcesPromise
      .then(sources => {
        if (sources.length == 0) {
          throw Error('Cannot find any sources');
        }
        return sources;
      })
      .then(sources => {
        this.view.drawSources(sources);
        return this.articlesLoader.loadBySource(sources[0].id);
      })
      .then(articles => this.view.drawNews(articles));
  }
}

export default App;
