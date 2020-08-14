import Axios from "axios";
// Axios.defaults.baseURL="http://172.16.2.89:8080";
// Axios.defaults.baseURL="http://172.16.2.47:3210";
// Axios.defaults.baseURL="http://172.16.2.74:8080";
Axios.defaults.baseURL="http://172.16.2.14:8080";

//请求拦截=========
Axios.interceptors.request.use(
    config=>{
        let token=sessionStorage.getItem('token');
        console.log(token)
        config.headers.Authorization=token;
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//响应拦截=========
Axios.interceptors.response.use(config=>{
    return config;
});
export default Axios;