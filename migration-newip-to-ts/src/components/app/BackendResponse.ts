export default abstract class BackendResponse<T> {
  protected response: Response;
  constructor(resp: Response) {
    this.response = resp;
  }

  abstract extractEntities(): Promise<T>;
}
