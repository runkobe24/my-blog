import React, { useEffect, useState } from 'react';
import service from './ArticleApi';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../page.less';
export default function Article(props) {
  const { history } = props;
  // console.log(props, 'props');
  const [list, setList] = useState([]);
  const getAtricle = () => {
    service.articlePage({}).then(res => {
      setList(res.data.rows);
    });
  };
  const goEdit = () => {
    history.push('/Atricle/edit');
  };
  useEffect(() => {
    getAtricle();
  }, []);
  return (
    <div className="main">
      <Button onClick={goEdit} style={{ margin: '0 auto', display: 'block' }}>
        文章发布
      </Button>
      <ul>
        {list.map(item => {
          return (
            <li key={item.uid}>
              <Link to={`/Article/details/${item.uid}`}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
