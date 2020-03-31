import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import './Compute.less';

class ComputeRoute extends React.Component {
  constructor(props) {
    super(props);
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
  }

  render() {
    console.log('加载了 ComputeRoute');

    return (
      //加入空判断

      <div>
        {this.props.path === '/' ? <Redirect from="/" to="/home" /> : <Route {...this.props} />}
      </div>
    );
  }
}
export default ComputeRoute;
