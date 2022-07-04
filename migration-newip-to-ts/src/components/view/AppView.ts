import NewsView from './NewsView';
import SourcesView from './SourcesView';

import Article from '../core/Article';
import Source from '../core/Source';

export class AppView {
    news: any;
    sources: any;

    constructor(root: HTMLElement) {
        this.news = new NewsView(root);
        this.sources = new SourcesView(root);
    }

    drawNews(articles: Article[]) {
        this.news.draw(articles);
    }

    drawSources(sources: Source[]) {
        this.sources.draw(sources);
    }
}

export default AppView;
