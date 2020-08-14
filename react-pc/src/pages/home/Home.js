import React, {Component} from 'react';
import Header from "../../component/header/header";
import './home.css'
import {Route} from 'react-router-dom'
import MakePage1 from "../make_up/MakePage1";
import Footer from "../../component/footer/Footer";
import buyCart from "../buyCart/buyCart";
import Personal from "../personal/Personal";
import Personal1 from "../personal/Personal1";
import Address from "../personal/Address";
import MyOrder from "../personal/MyOrder";
import Coupon from "../personal/Coupon";
import Invoice from "../personal/Invoice";
import PersonalInfo from '../personal/PersonalInfo'
import myownOrder from "../../component/personal/myOrder";
import myNews from "../../component/personal/myNews";
import collect from "../../component/personal/collect";
import score from "../../component/personal/score";

import baoJianPing from "../heathy/baoJianPing";
import Jiangdixuezhi from "../heathy/Jiangdixuezhi";
import Jiyili from "../heathy/Jiyili";
import Mianyili from "../heathy/Mianyili";
import yingYang from "../heathy/yingYang";
import yiqianyuan from "../suit/yiqianyuan";
import yiqianyuan1 from "../suit/yiqianyuan1";









import Qjsf from '../mySkin/qjsf'
import Zqby from '../mySkin/zqby'
import Mm from '../mySkin/mm'
import Age_huanxin from '../mySkin/age_huanxin'
import Age_jingyou from '../mySkin/age_jingyou'
import Age_Lumispa from '../mySkin/age_Lumispa'
import Age_yanzhi from '../mySkin/age_yanzhi'
import Dt from '../mySkin/dt'
import Epoch from '../mySkin/epoch'
import Fs from '../mySkin/fs'
import Fspw from '../mySkin/fspw'
import Fsr from '../mySkin/fsr'
import Hcsx from '../mySkin/hcsx'
import HykL from '../mySkin/hykL'
import JfxL from '../mySkin/jfxL'
import Jh from '../mySkin/jh'
import Jhjy from '../mySkin/jhjy'
import Jy from '../mySkin/jy'
import Mbjh from '../mySkin/mbjh'
import Qj from '../mySkin/qj'
import Ry from '../mySkin/ry'
import Ryrs from '../mySkin/ryrs'
import Sf from '../mySkin/sf'
import StLfs from '../mySkin/stLfs'
import Tmsmm from '../mySkin/tmsmm'
import Tp from '../mySkin/tp'
import Tz from '../mySkin/tz'
import Xhjh from '../mySkin/xhjh'
import Yjr from '../mySkin/yjr'
import Ys from '../mySkin/ys'
import Ytsx from '../mySkin/ytsx'
import Yzhh from '../mySkin/yzhh'


import productDetail from "../productDetail/productDetail";

import Rotation from "../../component/Rotation";
import BodyCare from "../Wash/BodyCare";
import Hair from "../Wash/Hair";
import Other from "../Wash/Other"
import Body from "../Wash/Body"
import Oil from "../Wash/Oil";
import EpochI from "../Wash/Epoch";
import Siang from "../Wash/Siang";
import BodyCareLis from "../Wash/BodyCareLis";
import Title from "../Title/Title";


import choice from '../../component/condition/Choice'


import AgeLOCSpa from "../ageLOC/AgeLOCSpa";
import AgeLOCLumiSpa from "../ageLOC/AgeLOCLumiSpa";
import AgeLOC3 from "../ageLOC/AgeLOC3";
import AgeLOC4 from "../ageLOC/AgeLOC4";
import AgeLOC5 from "../ageLOC/AgeLOC5";
import AgeLOC6 from "../ageLOC/AgeLOC6";
import AgeLOC7 from "../ageLOC/AgeLOC7";
import AgeLOC8 from "../ageLOC/AgeLOC8";
import AgeLOC9 from "../ageLOC/AgeLOC9";
import AgeLOC10 from "../ageLOC/AgeLOC10";
import AgeLOC11 from "../ageLOC/AgeLOC11";
import AgeLOC12 from "../ageLOC/AgeLOC12";
import Index from "./Index";
class Home extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <Header/>
                </div>
                    <Route path='/home/Home/'  exact component={Index}/>
                    <Route path='/home/Home/Index'  exact component={Index}/>
                <Route path='/home/Home/MakePage1' component={MakePage1}/>
                <Route path="/home/Home/buyCart"  component={buyCart}/>
                
                <Route path="/home/Home/Personal"  component={Personal}/>
                <Route path="/home/Home/Personal1"  render={()=>
                    <Personal1>
                        <Route path="/home/Home/Personal1/" exact component={MyOrder}/>
                        <Route path="/home/Home/Personal1/Myorder"  component={MyOrder}/>



                        <Route path="/home/Home/Personal1/coupon"  component={Coupon}/>
                        <Route path="/home/Home/Personal1/Address"  component={Address}/>
                        <Route path="/home/Home/Personal1/Invoice"  component={Invoice}/>
                        <Route path="/home/Home/Personal1/PersonalInfo"  component={PersonalInfo}/>
                        <Route path='/home/Home/Personal1/myownOrder'  component={myownOrder}/>
                        <Route path='/home/Home/Personal1/myNews'  component={myNews}/>
                        <Route path='/home/Home/Personal1/collect'  component={collect}/>
                        <Route path='/home/Home/Personal1/score'  component={score}/>
                    </Personal1>
                }/>
                <Route path='/home/Home/yingYang'  component={yingYang}/>
                <Route path='/home/Home/baoJianPing'  component={baoJianPing}/>
                <Route path='/home/Home/Jiangdixuezhi'  component={Jiangdixuezhi}/>
                <Route path='/home/Home/Jiyili'  component={Jiyili}/>
                <Route path='/home/Home/Mianyili'  component={Mianyili}/>
                <Route path='/home/Home/yiqianuan'  component={yiqianyuan}/>
                <Route path='/home/Home/yiqianuan1'  component={yiqianyuan1}/>




                <Route path="/home/Home/qjsf" component={Qjsf}/>
                <Route path="/home/Home/zqby" component={Zqby}/>
                <Route path="/home/Home/mm" component={Mm}/>
                <Route path="/home/Home/age_huanxin" component={Age_huanxin}/>
                <Route path="/home/Home/age_jingyou" component={Age_jingyou}/>
                <Route path="/home/Home/age_Lumispa" component={Age_Lumispa}/>
                <Route path="/home/Home/age_yanzhi" component={Age_yanzhi}/>
                <Route path="/home/Home/dt" component={Dt}/>
                <Route path="/home/Home/epoch" component={Epoch}/>
                <Route path="/home/Home/fs" component={Fs}/>
                <Route path="/home/Home/fspw" component={Fspw}/>
                <Route path="/home/Home/fsr" component={Fsr}/>
                <Route path="/home/Home/hcsx" component={Hcsx}/>
                <Route path="/home/Home/hykL" component={HykL}/>
                <Route path="/home/Home/jfxL" component={JfxL}/>
                <Route path="/home/Home/jh" component={Jh}/>
                <Route path="/home/Home/jhjy" component={Jhjy}/>
                <Route path="/home/Home/jy" component={Jy}/>
                <Route path="/home/Home/mbjh" component={Mbjh}/>
                <Route path="/home/Home/qj" component={Qj}/>
                <Route path="/home/Home/ry" component={Ry}/>
                <Route path="/home/Home/ryrs" component={Ryrs}/>
                <Route path="/home/Home/sf" component={Sf}/>
                <Route path="/home/Home/stLfs" component={StLfs}/>
                <Route path="/home/Home/tmsmm" component={Tmsmm}/>
                <Route path="/home/Home/tp" component={Tp}/>
                <Route path="/home/Home/tz" component={Tz}/>
                <Route path="/home/Home/xhjh" component={Xhjh}/>
                <Route path="/home/Home/yjr" component={Yjr}/>
                <Route path="/home/Home/ys" component={Ys}/>
                <Route path="/home/Home/ytsx" component={Ytsx}/>
                <Route path="/home/Home/yzhh" component={Yzhh}/>





                <Route path='/home/Home/productDetail'component={productDetail}/>


                    <Route path='/home/Home/Rotation' component={Rotation}/>
                    <Route path='/home/Home/Title' component={Title}/>
                    <Route path='/home/Home/BodyCare' component={BodyCare}/>
                    <Route path='/home/Home/Hair' component={Hair}/>
                    <Route path='/home/Home/Other' component={Other}/>
                    <Route path='/home/Home/Body' component={Body}/>
                    <Route path='/home/Home/Oil' component={Oil}/>
                    <Route path='/home/Home/EpochI' component={EpochI}/>
                    <Route path='/home/Home/Siang' component={Siang}/>
                    <Route path='/home/Home/BodyCareLis' component={BodyCareLis}/>


                <Route path='/choice' component={choice}></Route>
                <Route path='/home/Home/AgeLOC1' component={AgeLOCSpa}></Route>
                <Route path='/home/Home/AgeLOC2' component={AgeLOCLumiSpa}></Route>
                <Route path='/home/Home/AgeLOC3' component={AgeLOC3}></Route>
                <Route path='/home/Home/AgeLOC4' component={AgeLOC4}></Route>
                <Route path='/home/Home/AgeLOC5' component={AgeLOC5}></Route>
                <Route path='/home/Home/AgeLOC6' component={AgeLOC6}></Route>
                <Route path='/home/Home/AgeLOC7' component={AgeLOC7}></Route>
                <Route path='/home/Home/AgeLOC8' component={AgeLOC8}></Route>
                <Route path='/home/Home/AgeLOC9' component={AgeLOC9}></Route>
                <Route path='/home/Home/AgeLOC10' component={AgeLOC10}></Route>
                <Route path='/home/Home/AgeLOC11' component={AgeLOC11}></Route>
                <Route path='/home/Home/AgeLOC12' component={AgeLOC12}></Route>



                <Footer/>
            </div>
        )
    }
}

export default Home
