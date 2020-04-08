import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = null;
axios.defaults.timeout = 60000;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
const pending = [];
const cancelToken = axios.cancelToken;
const addPending = config => {
  const url = config.url + '&' + config.method + '&' + qs.stringify(config.data);
  config.cancelToken = new cancelToken(cancel => {
    if (!pending.some(item => item.url === url)) {
      pending.push({
        url,
        cancel,
      });
    }
  });
};
const removePending = config => {
  const url = config.url + '&' + config.method + '&' + qs.stringify(config.data);

  pending.forEach((item, index) => {
    if (item.url === url) {
      //item.cancel('取消重复请求:' + config.url);
      pending.splice(index, 1);
    }
  });
};
//http请求拦截器
axios.interceptors.request.use(
  config => {
    console.log(config, '设置congfi');
    // let configMethod = config.method;

    let configUrl = config.url;
    let resfult = configUrl.split('%');
    if (resfult.length > 1) {
      let configParams = config.params;
      let keys = Object.keys(configParams);
      //console.log('进入了循环');
      keys.forEach(item => {
        if (item === resfult[1]) {
          //resful的格式，修改get
          config.url = configUrl.replace(new RegExp('%' + item, 'g'), configParams[item]);
          //  console.log('进入了二次循环', configUrl);
        }
      });
    }
    //console.log(configUrl.split('%'), '获取的url字符串');

    //  console.log(config, 'config---------');
    // addPending(config);
    // removePending(config);

    //const token = sessionStorage.getItem('token');
    const token = '3e1a2768034d4b5c8fad143604eee432_4f30fb53158045668a8c0b7992f34d61';
    if (token) {
      config.headers['token'] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  res => {
    if (res) {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  },
);
export function get(url, data, options) {
  const param = {
    method: 'GET',
    url,
    params: data,
  };
  return fetchApi(param, options);
}
export function fetchApi(url, options, data) {
  //设置全局loading
  if (options.showLoading) {
    //store.commit('setLoading', true);
  }
  // if (options.showLoading) {
  //   store.commit('setDetailLoading', true);
  // }
  if (typeof options.errorHandler !== 'boolean') {
    options.errorHandler = true;
  }
  const baseURL = options.baseUrl;
  const headers = {
    'Content-Type':
      options.contentType !== 'json' ? 'application/json' : 'application/x-www-form-urlencoded',
  };
  const method = options.method || 'GET';

  //把被序列化的参数 逆转成对象 - 后来加入的

  let qsParse = qs.parse(data);

  //page -- 分页页码
  for (const key in qsParse) {
    if (key === 'page') {
      qsParse[key]--;
    }
  }
  const params = qsParse;
  if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    data = qs.stringify(data);
  }

  const ajaxObj = {
    baseURL,
    url,
    method,
    headers,
    timeout: 60000,
    data: data,
    params: params,
  };
  if (method === 'GET' || method === 'DELETE') {
    ajaxObj.data = null;
  } else if (method === 'post') {
    ajaxObj.params = null;
  }
  return new Promise((resolve, reject) => {
    axios(ajaxObj)
      .then(response => {
        // store.commit('setLoading', false);
        // store.commit('setDetailLoading', false);
        if (options) {
          // console.log(response, 'responseresponseresponse');
          switch (response.status) {
            case 201:
              // Vue.prototype.$message({
              //   message: '新增成功',
              //   type: 'success',
              //   showClose: true,
              // });
              return resolve(response.data);
            case 204:
              // Vue.prototype.$message({
              //   message: '删除成功',
              //   type: 'success',
              //   showClose: true,
              // });
              break;
            case 55555:
              // Vue.prototype.$message({
              //   message: response.data.message,
              //   type: 'error',
              //   showClose: true,
              // });
              return resolve(response.data);
            case 200308:
              // Vue.prototype.$message({
              //   message: response.data.message,
              //   type: 'error',
              //   showClose: true,
              // });
              return resolve(response.data);
            default:
              return resolve(response.data);
          }
        } else {
          return resolve(response.data);
        }
      })
      .catch(error => {
        // store.commit('setLoading', false);
        // store.commit('setDetailLoading', false);
        console.log(error);
        let errorMsg = '';
        if (error) {
          console.log(error, '错误的');
          // switch (error.response.status) {
          //   case 400:
          //     console.log(error.response, '错误回调-----');

          //     errorMsg = `${error.response.data.message}`;
          //     break;
          //   case 404:
          //     errorMsg = '404请求地址出错';
          //     break;
          //   case 408:
          //     errorMsg = '408请求超时';
          //     break;
          //   case 500:
          //     errorMsg = '500服务器内部错误';
          //     break;
          //   case 502:
          //     errorMsg = '502网关错误';
          //     break;
          //   case 504:
          //     errorMsg = '504网关超时';
          //     break;
          //   case 40302:
          //     errorMsg = '系统维护中，请稍后登录';
          //     break;
          //   default:
          //     //errorMsg = '系统维护中，请稍后登录';
          //     errorMsg = 'none';
          //     break;
          // }
        } else if (error.request) {
          errorMsg = '请求失败';
        } else {
          errorMsg = error.message;
        }

        reject(error);
      });
  });
}
