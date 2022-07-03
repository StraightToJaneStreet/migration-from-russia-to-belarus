import NewsView from './NewsView';
import SourcesView from './SourcesView';

export class AppView {
    news: any;
    sources: any;

    constructor(root: HTMLElement) {
        this.news = new NewsView(root);
        this.sources = new SourcesView(root);
    }

    drawNews(data) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
