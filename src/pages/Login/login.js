import React from 'react';
//import { Form } from 'antd';
import bg from '../../assets/images/bg.JPG';
// function submit(val) {
//   console.log('点击提交了', val);
// }
const newStyle = {
  homePage: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },
};
export default function Login() {
  return (
    <div className="home-bg" style={newStyle.homePage}>
      <div className="home-form"></div>
    </div>
  );
}
