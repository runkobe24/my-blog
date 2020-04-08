import React, { useEffect, useState } from 'react';
import service from './ArticleApi';
import { Link } from 'react-router-dom';
import '../page.less';
export default function Article() {
  const [list, setList] = useState([]);
  const getAtricle = () => {
    service.articlePage({}).then(res => {
      setList(res.data);
    });
  };
  useEffect(() => {
    getAtricle();
  }, []);
  return (
    <div className="article-main">
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
