import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Headers from '@/components/Header';
import './Home.less';
import '../page.less';
const { Header, Content, Footer } = Layout;
export default function Home(props) {
  console.log(props, '首页的props');
  console.log('onoe ');
  console.log(5555);
  return (
    <div className="main">
      <p>首页</p>
    </div>
  );
}
