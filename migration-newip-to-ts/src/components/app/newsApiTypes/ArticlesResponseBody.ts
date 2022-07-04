import Article from '../../core/Article';

export default interface ArticlesResponseBody {
  status: string,
  totalResults: number,
  articles: Article[]
}