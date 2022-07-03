import './css/newsView.css';
import NewsItem from '../core/NewsItem';
import NewsItemView from './newsItemView';

class News {
  draw(news: NewsItem[]) {
    // const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const lastNews = news.length >= 10 ? news.filter((_, idx) => idx < 10) : news;

    const fragment = document.createDocumentFragment();

    news.forEach((article, idx) => {
      const alternativeView = idx % 2 == 0;
      const newsItemElement = NewsItemView(article, alternativeView);

      fragment.append(newsItemElement);
    });

    document.querySelector('.news').innerHTML = '';
    document.querySelector('.news').appendChild(fragment);
  }
}

export default News;
