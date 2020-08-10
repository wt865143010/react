import {observable,action} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/Api'
export default class logStore {
    @observable log=[]



    @action login=(obj)=>{
        Axios.post(Api.logApi.login,obj)
            .then(res=>{
                let user=JSON.stringify(res.data.user)
                localStorage.setItem(user)
            })
    }
}