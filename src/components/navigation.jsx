import React from 'react';
import './component.less';
import { useHistory } from 'react-router-dom';
const MeanList = [
  {
    id: 1,
    name: '首页',
    toLink: '/home',
  },
  {
    id: 2,
    name: '文章',
    toLink: '/article',
  },
  {
    id: 3,
    name: '关于',
    toLink: '/about',
  },
];
function Linkto(item, props, history) {
  // // const { toLink } = params;
  const { toLink } = item;
  // console.log(item, 'toLinktoLink');
  // console.log(props, 'propsprops');
  history.push(toLink);
}

function Navigation(props) {
  let history = new useHistory();
  const MeanMeun = MeanList.map(item => {
    return (
      <li key={item.id} onClick={() => Linkto(item, props, history)}>
        {item.name}
      </li>
    );
  });
  return (
    <div>
      <ul className="mean-li">{MeanMeun}</ul>
    </div>
  );
}
export default Navigation;
