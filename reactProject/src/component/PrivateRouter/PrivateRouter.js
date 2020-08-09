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
            if (item.menuChilds.length===0){
                return <Route path={item.pathname}
                              key={item.menuId}
                              component={Loadable(()=>
                                  import(`../../pages/${item.componentPath}`)
                              )}></Route>
            }else {
                return <Route path={item.pathname}
                              key={item.menuId}
                              render={()=>{
                                  let ComponentName=Loadable(()=>import(`../../pages/${item.componentPath}`))
                                  return <ComponentName {...this.props}>
                                      {this.bindRoute(item.menuChilds)}
                                  </ComponentName>
                                      }
                              }>
                    {this.bindRoute(item.menuChilds)}
                </Route>
            }
        })
        return routelist
    }
    UNSAFE_componentWillMount() {

        let routelist=this.bindRoute(this.props.user.user.menuInfo)
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
