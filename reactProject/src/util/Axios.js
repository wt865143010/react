import Axios from "axios";
Axios.defaults.baseURL="http://localhost:3210";

//请求拦截=========
Axios.interceptors.request.use(
    config=>{
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