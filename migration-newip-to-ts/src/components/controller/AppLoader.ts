import Loader from './Loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', '23eda7a9a1ba47178e932adfe3cfdb26');
  }
}

export default AppLoader;
