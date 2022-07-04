import Article from '../core/Article';
import { createElement } from '../utils/utils';

export default function ArticleView(article: Article, alt: boolean) {
  const newsItem = createElement('div', ['news__item']);
  if (alt) {
    newsItem.classList.add('alt');
  }

  const metaContainer = createElement('div', ['news__meta']);

  const metaPhoto = createElement('div', ['news__meta-photo']);
  metaPhoto.style.backgroundImage = article.urlToImage || 'img/news_placeholder.jpg';

  const metaDetails = createElement('ul', ['news__meta-details']);
  const metaAuthor = createElement('li', ['news__meta-author']);
  metaAuthor.textContent = article.author || article.source.name;

  const metaDate = createElement('li', ['news__meta-date']);
  metaDate.textContent = article.publishedAt
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('-');

  const description = createElement('div', ['news__description']);
  const title = createElement('h2', ['news__description-title']);
  title.textContent = article.title;

  const source = createElement('h3', ['news__description-source']);
  source.textContent = article.source.name;

  const content = createElement('p', ['news__description-content']);
  content.textContent = article.description;

  const readMore = createElement('p', ['news__read-more']);

  const readMoreLink = document.createElement('a');
  readMoreLink.href = '#';
  readMoreLink.href = article.url;

  newsItem.append(metaContainer, description);
  metaContainer.append(metaPhoto, metaDetails);
  metaDetails.append(metaAuthor, metaDate);
  description.append(title, source, content, readMore);
  readMore.append(readMoreLink);

  return newsItem;
}