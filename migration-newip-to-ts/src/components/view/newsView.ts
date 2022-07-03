import './css/newsView.css';
import Article from '../core/Article';
import ArticleView from './ArticleView';

class News {
  draw(news: Article[]) {
    const lastNews = news.length >= 10 ? news.filter((_, idx) => idx < 10) : news;

    const fragment = document.createDocumentFragment();

    lastNews.forEach((article, idx) => {
      const alternativeView = idx % 2 == 0;
      const newsItemElement = ArticleView(article, alternativeView);

      fragment.append(newsItemElement);
    });

    document.querySelector('.news').innerHTML = '';
    document.querySelector('.news').appendChild(fragment);
  }
}

export default News;
