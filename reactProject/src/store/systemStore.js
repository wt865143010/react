import {observable,action} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/allApi'
export default class systemStore {
    @observable user_eva=[];
    @observable leaveMsg=[];
    @observable paylist=[];
    @observable newstem=[];
    @observable NewsMod=[];
    @observable NewsWay=[];


    @observable UserList=[];
    @observable role=[];
    @observable token="";
    @observable areaList=[];
    @observable roleList=[];
    @observable OperaData=[];

    @action getUserEva=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getUserEva)
                .then(res=>{
                    this.user_eva=res.data.data.eva;
                    console.log(this.user_eva)
                    resolve('获取成功！')
                })
        })
    }
    @action getLeaveMsg=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getLeaveMsg)
                .then(res=>{
                    this.leaveMsg=res.data.data.msg;
                    resolve('获取成功！')
                })
        })
    }
    @action getPayList=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getPayList)
                .then(res=>{
                    this.paylist=res.data.data.pay;
                    resolve('获取成功！')
                })
        })
    }
    @action getNewsTem=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getNewsTem)
                .then(res=>{
                    this.newstem=res.data.data.tem;
                    resolve('获取成功！')
                })
        })
    }


    @action searchEva=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchEva,{params:obj})
                .then(res=>{
                    this.user_eva=res.data.data.eva;
                    resolve('获取成功！')
                })
        })
    }
    @action searchMsg1=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchMsg1,{params:obj})
                .then(res=>{
                    this.leaveMsg=res.data.data.msg;
                    resolve('获取成功！')
                })
        })
    }
    @action searchPay=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchPay,{params:obj})
                .then(res=>{
                    this.paylist=res.data.data.pay;
                    resolve('获取成功！')
                })
        })
    }
    @action searchNews=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchNews,{params:obj})
                .then(res=>{
                    this.newstem=res.data.data.tem;
                    resolve('获取成功！')
                })
        })
    }


    @action addPay=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.addPay,obj)
                .then(res=>{

                    resolve('添加成功！')
                })
        })
    }
    @action addNews=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.addNews,obj)
                .then(res=>{

                    resolve('添加成功！')
                })
        })
    }

    @action eidtPay=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.eidtPay,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }
    @action eidtNews=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.eidtNews,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }



    @action changeStatus=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.changeStatus,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }


    @action changePayStatus=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.changePayStatus,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }





    /////////////////////////////////////////////////////账号列表//////////////////////////////////////////////
////获取角色列表
    @action getRole=()=>{
        return new Promise((resolve, reject) =>{
            Axios.get(Api.system.getRole)
                .then(res=>{
                    this.role=res.data;
                    resolve('获取角色成功')
                })
        } )
    };
////点击修改用户状态
    @action disableUser=(obj)=>{
        return new Promise((resolve, reject) =>{
            Axios.put(Api.system.disableUser,obj)
                .then(res=>{
                    this.UserList=res.data;
                    resolve('获取角色成功')
                })
        } )
    };
/////初始化数据列表数据，点击条件查询
    @action searchMsg=(search)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchMsg,{params:search})
                .then(resp=>{
                    this.UserList=resp.data;
                    resolve('查询成功')

                })
        })
    };
/////新增用户
    @action saveSure=(newData)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.saveSure,newData)
                .then(resp=>{
                    // console.log(resp.data);
                    resolve('添加账号成功')
                })
        })
    };
/////修改账号列表
    @action saveEdit=(Data)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.saveEdit,Data)
                .then(res=>{
                    console.log(res.data);
                    resolve('修改成功')
                })
        })
    };

/////////////////////////////////////////////////////大区管理/////////////////////////////////////////////

    ////大区条件搜索
    @action searchArea=(souSuoValue)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchArea,{params:souSuoValue})
                .then(res=>{
                    this.areaList=res.data;
                    resolve('查询到数据')
                })
        })
    };
    ////删除大区数据
    @action deleteArea=(deleteV)=>{
        return new Promise((resolve, reject) => {
            Axios.delete(Api.system.deleteArea,{params:deleteV})
                .then(res=>{
                    resolve('删除成功')
                })
        })
    };
    ///编辑修改保存信息
    @action editAreaMsg=(data)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.editAreaMsg,data)
                .then(res=>{
                    resolve('修改成功')
                })
        })
    };
    ///新增保存信息
    @action newAreaMsg=(dataNew)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.newAreaMsg,dataNew)
                .then(res=>{
                    resolve('新增成功')
                })
        })
    }
//////////////////////////////////////////角色管理///////////////////////////////////////////////////////
    ///角色查询，初始化大区列表
    @action roleSearch=(roleS)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.roleSearch,{params:roleS})
                .then(res=>{
                    this.roleList=res.data;
                    resolve('查询到数据')
                })

        })
    }

    ///保存修改数据
    @action roleXiuGai=(Data)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.roleXiuGai,Data)
                .then(res=>{
                    resolve('修改成功')
                })
        })

    };
    ///新增角色数据
    @action roleNewAdd=(newData)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.roleNewAdd,newData)
                .then(res=>{
                    resolve('新增成功')
                })
        })
    }
    ////修改用户状态
    @action disableUser1=(obj)=>{
        return new Promise((resolve, reject) =>{
            Axios.put(Api.system.disableUser1,obj)
                .then(res=>{
                    this.roleList=res.data;
                    resolve('修改状态成功成功')
                })
        } )
    };
    ///////////////////////////////////操作日志//////////////////////////////////////////
    ///数据查询，数据渲染
    @action getOpera=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getOpera,{params:obj})
                .then(res=>{
                    this.OperaData=res.data;
                    resolve('获取数据成功')
                })
        })
    }






}