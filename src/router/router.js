//路由列表

import Home from '../pages/Home/Home';
//https://loadable-components.com/docs/api-loadable-component/
import Loadable from '@loadable/component';
import Login from '../pages/Login/login';

const routes = [
  {
    path: '/',
    exact: true,
    component: Login,
    // strict: true,
  },
  {
    title: 'Login',
    path: '/login',
    exact: true,

    //老版本写法：
    // component: Loadable({
    //   loader: () => import('../pages/Login/login'),
    //   loading: () => <p>加载中。。。。。</p>,
    //   delay: 300,
    // }),
    component: Loadable(() => import('../pages/Login/login')),
  },
  {
    title: 'Home',
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    title: 'Article',
    path: '/Article',
    exact: true,
    component: Loadable(() => import('../pages/Article/Article')),
  },
  {
    title: 'Detils',
    path: '/Article/details/:uid',
    exact: true,
    component: Loadable(() => import('../pages/Article/ArticleDetails')),
  },
];
export default routes;
