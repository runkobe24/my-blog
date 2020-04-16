import React, { useEffect } from 'react';
import service from './ArticleApi';
export default function Details(prop) {
  const { uid } = prop.match.params;
  const getArticleDetails = () => {
    service.getArticleDetails({ uid }).then(res => {
      console.log(res, 'resresres');
    });
  };
  useEffect(() => {
    getArticleDetails();
  });
  return (
    <div className="main">
      <p>12213123</p>
    </div>
  );
}
