import NewsView from './NewsView';
import SourcesView from './SourcesView';

import Article from '../core/Article';
import Source from '../core/Source';

import ChangeSourceCallback from '../app/SourcesCallbackFunction';

export class AppView {
    news: NewsView;
    sources: SourcesView;

    constructor(root: HTMLElement, changeSourceCallback: ChangeSourceCallback) {
        this.sources = new SourcesView(root, changeSourceCallback);
        this.news = new NewsView(root);
    }

    drawNews(articles: Article[]) {
        this.news.draw(articles);
    }

    drawSources(sources: Source[]) {
        this.sources.draw(sources);
    }
}

export default AppView;
