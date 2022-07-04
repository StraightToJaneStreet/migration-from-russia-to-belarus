import NewsView from './NewsView';
import SourcesView from './SourcesView';

import Article from '../core/Article';
import Source from '../core/Source';

export class AppView {
    news: NewsView;
    sources: SourcesView;

    constructor(root: HTMLElement, changeSourceCallback: Function) {
        this.news = new NewsView(root);
        this.sources = new SourcesView(root, changeSourceCallback);
    }

    drawNews(articles: Article[]) {
        this.news.draw(articles);
    }

    drawSources(sources: Source[]) {
        this.sources.draw(sources);
    }
}

export default AppView;
