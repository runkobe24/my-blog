import createApi from '@/api/createApi';
const service = {
  articlePage: {
    url: 'http://127.0.0.1:3005/article',
    options: {
      method: 'GET',
      showLoading: false,
    },
  },
  getArticleDetails: {
    url: 'http://127.0.0.1:3005/articleDetails',
    options: {
      method: 'GET',
      showLoading: false,
    },
  },
};
export default createApi(service);
