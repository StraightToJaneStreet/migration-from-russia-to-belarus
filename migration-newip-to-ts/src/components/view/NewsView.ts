import './css/news.css';
import Article from '../core/Article';
import ArticleView from './ArticleView';

class News {
  container: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.container = document.createElement('div');
    this.container.classList.add('news');
    root.append(this.container);
  }

  draw(news: Article[]) {
    const lastNews = news.length >= 10 ? news.filter((_, idx) => idx < 10) : news;

    const fragment = document.createDocumentFragment();

    lastNews.forEach((article, idx) => {
      const alternativeView = idx % 2 == 0;
      const newsItemElement = ArticleView(article, alternativeView);

      fragment.append(newsItemElement);
    });

    this.container.innerHTML = '';
    this.container.append(fragment);
  }
}

export default News;
