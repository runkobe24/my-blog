import React from 'react';
//import { Form } from 'antd';
import bg from '../../assets/images/bg.JPG';

const newStyle = {
  homePage: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  },
};

export default function Login() {
  return (
    <div>
      <div className="home-bg" style={newStyle.homePage}>
        <div className="home-form"></div>
      </div>
    </div>
  );
}
