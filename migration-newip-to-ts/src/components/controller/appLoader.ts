import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '23eda7a9a1ba47178e932adfe3cfdb26', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;