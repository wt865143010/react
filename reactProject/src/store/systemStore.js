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
    @observable area=[];
    @observable myQuan=[];
    @observable myrole=[];
    @observable allRole=[];
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
            Axios.post(Api.system.searchEva,obj)
                .then(res=>{
                    console.log(res.data)
                    this.user_eva=res.data.data;
                    resolve('获取成功！')
                })
        })
    }
    @action searchMsg1=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.searchMsg1,obj)
                .then(res=>{
                    this.leaveMsg=res.data.data;
                    resolve('获取成功！')
                })
        })
    }
    @action searchPay=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.searchPay,obj)
                .then(res=>{
                    this.paylist=res.data.data;
                    resolve('获取成功！')
                })
        })
    }
    @action searchNews=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.searchNews,obj)
                .then(res=>{
                    console.log(res.data)
                    this.newstem=res.data.data;
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
            Axios.post(Api.system.eidtPay,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }
    @action eidtNews=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.eidtNews,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }



    @action changeStatus=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.changeStatus,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }


    @action changePayStatus=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.changePayStatus,obj)
                .then(res=>{
                    resolve('修改成功！')
                })
        })
    }









    /////////////////////////////////////////////////////账号列表//////////////////////////////////////////////
////获取角色列表
    @action getRole=(obj)=>{
        return new Promise((resolve, reject) =>{
            Axios.post(Api.system.getRole,obj)
                .then(res=>{
                    console.log(res.data.data)
                    this.myrole=res.data.data;
                    resolve('获取角色成功')
                })
        } )
    };

    @action getAllRole=()=>{
        return new Promise((resolve, reject) =>{
            Axios.get(Api.system.getAllRole)
                .then(res=>{
                    console.log(res.data.data)
                    this.role=res.data.data;
                    resolve('获取角色成功')
                })
        } )
    }


////点击修改用户状态
    @action disableUser=(obj)=>{
        return new Promise((resolve, reject) =>{
            Axios.post(Api.system.disableUser,obj)
                .then(res=>{
                    console.log(res)
                    if (res.data.code==200){
                        resolve('获取角色成功')
                    }

                })
        } )
    };
/////初始化数据列表数据，点击条件查询
    @action searchMsg=(search)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.searchMsg,search)
                .then(resp=>{
                    console.log(resp.data.data)
                    this.UserList=resp.data.data;
                    console.log(this.UserList)
                    resolve(resp.data.count)

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
            Axios.post(Api.system.saveEdit,Data)
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
            Axios.post(Api.system.searchArea,souSuoValue)
                .then(res=>{
                    this.areaList=res.data.data;
                    resolve('查询到数据')
                })
        })
    };
    ////删除大区数据
    @action deleteArea=(deleteV)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.deleteArea,deleteV)
                .then(res=>{
                    resolve('删除成功')
                })
        })
    };
    ////获取大区管理区域
    @action getArea=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getArea)
                .then(res=>{
                    console.log(res)
                    this.area=res.data.data;
                    resolve('获取成功')
                })
        })
    }
    ///编辑修改保存信息
    @action editAreaMsg=(data)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.editAreaMsg,data)
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
                    console.log(res)
                    resolve('新增成功')
                })
        })
    }
//////////////////////////////////////////角色管理///////////////////////////////////////////////////////
    ///角色查询，初始化大区列表
    @action roleSearch=(roleS)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.roleSearch,roleS)
                .then(res=>{
                    this.roleList=res.data.data;
                    resolve('查询到数据')
                })

        })
    }

    ///保存修改数据
    @action roleXiuGai=(Data)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.roleXiuGai,Data)
                .then(res=>{
                    console.log(res)
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
    };
    ////获取全部角色
    @action getRoleA=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getRoleA)
                .then(res=>{
                    this.allRole=res.data.data;
                    resolve('获取成功')
                })
        })
    }
    ///获取已有数据角色
    @action getRoleModTree=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.getRoleModTree,obj)
                .then(res=>{
                    console.log(res);
                    this.myQuan=res.data.data;
                    resolve('获取成功')
                })
        })
    }
    ////修改用户状态
    @action disableUser1=(obj)=>{
        return new Promise((resolve, reject) =>{
            Axios.post(Api.system.disableUser1,obj)
                .then(res=>{
                    console.log(res)
                    resolve('修改状态成功成功')
                })
        } )
    };
    ///////////////////////////////////操作日志//////////////////////////////////////////
    ///数据查询，数据渲染
    @action getOpera=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.getOpera,obj)
                .then(res=>{
                    this.OperaData=res.data.data;
                    resolve('获取数据成功')
                })
        })
    }


    ///////////////////////////////////基本设置///////////////////////////////////////
    @action setting=(submit)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.setting,submit)
                .then(res=>{
                    resolve(res.data.code)
                })
        })
    }






}