export default interface ApiConfiguration {
  baseUrl: string,
  apiKey: string,
  endpoints: {
    sources: string,
    articles: string
  }
}