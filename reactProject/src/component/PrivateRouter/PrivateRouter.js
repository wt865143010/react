import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {inject,observer} from 'mobx-react'
import Loadable from "@loadable/component";


@inject('user')

@observer
class PrivateRouter extends Component {
    constructor() {
        super();
        this.state={
            routerList:[]
        }
    }
    bindRoute(list){
        let routelist=list.map(item=>{
            if (item.moduleChildren===null){
                return <Route path={item.pathName}
                              key={item.id}
                              component={Loadable(()=>
                                  import(`../../pages/${item.url}`)
                              )}></Route>
            }else {
                return <Route path={item.pathName}
                              key={item.id}
                              render={()=>{
                                  let ComponentName=Loadable(()=>import(`../../pages/${item.url}`))
                                  return <ComponentName {...this.props}>
                                      {this.bindRoute(item.moduleChildren)}
                                  </ComponentName>
                                      }
                              }>
                    {this.bindRoute(item.moduleChildren)}
                </Route>
            }
        })
        return routelist
    }
    UNSAFE_componentWillMount() {
        console.log(this.props.user.user)
        let routelist=this.bindRoute(this.props.user.user)
        this.setState({
            routerList:routelist
        })
    }

    render() {
        return (
            <div>
                {this.state.routerList}
            </div>
        )
    }
}

export default PrivateRouter
