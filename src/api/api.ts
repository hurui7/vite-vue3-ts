import axios from "axios";
import { ElMessage } from 'element-plus';
import qs from 'qs'
const http = axios.create({
  baseURL: '',
  timeout: 50000
})

// 数据请求拦截
http.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 返回响应数据拦截
http.interceptors.response.use((res) => {
  const data = res.data;
  // 状态码为 2xx 范围时都会调用该函数，处理响应数据
  if (res.status === 200) {
    const code = data.code;
    if(code==1000){
      return Promise.resolve(data.data);
    }else{
      ElMessage({
        type: 'error',
        message: data.message,
        showClose: true
      });
      return Promise.reject(data);
    }
  }
}, (error) => {
  if (error.response.status) {
    // 状态码超过 2xx 范围时都会调用该函数，处理错误响应
    switch (error.response.status) {
      case 404:
        ElMessage({
          type: 'error',
          message: '请求路径找不到！',
          showClose: true
        });
        break;
      case 502:
        ElMessage({
          type: 'error',
          message: '服务器内部报错！',
          showClose: true
        });
        break;
      default:
        break;
    }
  }
  return Promise.reject(error);
});
//这是一位大佬指点的方法，更加简单
export default http;