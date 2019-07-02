import React from 'react'
import './JDlogin.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../store/Store.jsx';
import LLhead from '../components/LLhead/LLhead.jsx'

class JDlogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
            login_tab: [
                {
                    l_id: '1',
                    l_name: '普通登录'
                }, {
                    l_id: '2',
                    l_name: '动态验证码登录'
                }
            ],
            index_now: 0
        }
        store.dispatch({
            type: 'nav_is_close'
        })
        // console.log(this.props.location.state.gid, this.state.goodsId);
        // console.log(this.state.goodsInfo);
    }



    componentDidMount() {
        // this.getDataDetails();
    }

    // 渲染，此种贷款三大特点
    forInfoTabs(arr) {
        return <React.Fragment>
            {
                arr.map((item, index) => {
                    return <i
                        onClick={this.btn_info.bind(this, index)}
                        className=""
                        key={item.l_id}>
                        {item.l_name}
                    </i>
                })
            }
        </React.Fragment>
    }

    // 点击切换选项卡
    btn_info(i) {
        this.setState(() => {
            return {
                index_now: i
            }
        });
    }

    for_tabs_head(arr) {
        return <React.Fragment>
            {
                arr.map((item, index) => {
                    return <i
                        onClick={this.btn_info.bind(this, index)}
                        className={index === this.state.index_now ? 'active' : ""}
                        key={item.l_id}>
                        {item.l_name}
                    </i>
                })
            }
        </React.Fragment>
    }

    //点击按钮，登录
    admin_login() {
        let name1 = store.getState().admin_phone;
        console.log(store.getState().admin_phone,store.getState().admin_psw);
        console.log(this.a_phone.value);
        console.log(this.a_psw.value);
        if(store.getState().admin_phone == this.a_phone.value 
        && store.getState().admin_psw == this.a_psw.value){
            store.dispatch({
                type: 'admin_is_on'
            })
            this.props.history.push('/JDmine');
        }else{
            alert('登录失败，请重新确认信息~')
        }
    }

    render() {

        return (
            <section id='JDlogin'>
                <LLhead />
                <div className="box_img">
                    <img src="https://www.jiedaijia.cn/h5/publicImg/touxiang.png" alt="" />
                </div>
                <div className="box_tab">
                    <div className="tab_head">
                        {this.for_tabs_head(this.state.login_tab)}
                    </div>
                    <div
                        style={{ display: 0 === this.state.index_now ? 'block' : 'none' }}
                        className="tab_body body1">
                        <p className="phone_box">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/login_icon_phone.png" alt="" />
                            <input 
                            id="a_phone"
                            ref={(input) => { this.a_phone = input }}
                            type="text" placeholder="请输入11位手机号码" />
                        </p>
                        <p className="psw_box">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/login_icon_password.png" alt="" />
                            <input 
                            id="a_psw"
                            ref={(input) => { this.a_psw = input }}
                            type="password" name="" id="" placeholder="密码6-18位" />
                        </p>
                    </div>
                    <div
                        style={{ display: 1 === this.state.index_now ? 'block' : 'none' }}
                        className="tab_body body2">
                        <p className="phone_box">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/login_icon_phone.png" alt="" />
                            <input 
                            id="a_phonn_2"
                            type="text" placeholder="请输入11位手机号码" />
                        </p>
                        <p className="psw_a_box">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/denglu-yan.png" alt="" />
                            <input 
                            id="a_psw_2"
                            type="password" name="" id="" placeholder="请输入验证码" />
                            <i>获取验证码</i>
                        </p>
                    </div>
                </div>
                <div className="box_other">
                    <span>忘记密码？</span>
                </div>
                <div className="box_btn">
                    <span onClick={this.admin_login.bind(this)}>
                        登录
                    </span>
                </div>
                <div className="login_foot">
                    <span>登录</span>
                    <span>即表示同意</span>
                    <em>《借贷家服务协议》</em>
                </div>


            </section>
        )
    }
}

// export default MineHead
// export default withRouter(HLmore)
export default withRouter(connect((state) => {
    return state
})(JDlogin))