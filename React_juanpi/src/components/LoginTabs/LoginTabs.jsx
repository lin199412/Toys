import React from 'react'
import './LoginTabs.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../Store/Store.jsx';


class LoginTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index_now: 0,
            t_info: [
                {
                    tid: '11',
                    title: '卷皮账号登录'
                },
                {
                    tid: '12',
                    title: '手机快捷登录'
                }
            ],
            admin_name_o: '',
            admin_psw_o: ''
            // title: this.props.location.state.day
        }
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }

    //渲染，选项卡头部按钮
    vFor(arr) {
        return <ul className='t_head'>
            {
                arr.map((item, index) => {
                    return <li
                        key={index}
                        onClick={this.tabOne.bind(this, index)}
                        className={(index === this.state.index_now) ? 'active' : ''}>
                        <div>{item.title}</div>
                    </li>
                })
            }
        </ul>
    }
    //点击按钮，切换选项卡
    tabOne(index) {
        console.log(index)
        this.setState({
            index_now: index
        })
        console.log(this.state.index_now)
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
            this.props.history.push('/Jmine');
        }else{
            alert('登录失败，请重新确认信息~')
        }

    }

    render() {

        return (
            <div id='LoginTabs_box'>
                {this.vFor(this.state.t_info)}
                <div className='t_cont'>
                    <div className='t_cont_1 cont_box' style={{ display: (0 === this.state.index_now) ? "block" : "none" }}>
                        <form action="">
                            <p className="admin_name">
                                <input 
                                ref={(input) => { this.a_phone = input }}
                                type="text" placeholder="手机号/邮箱/用户名" />
                            </p>
                            <p className="admin_psw">
                                <input
                                ref={(input) => { this.a_psw = input }}
                                type="password" placeholder="密码" />
                            </p>
                            <input 
                            onClick={this.admin_login.bind(this)}
                            className="btn_login" type="button" value="登录" />
                        </form>
                        <div className="login_set">
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                <span>两周内免登录</span>
                            </label>
                            <a href="">忘记密码？</a>
                        </div>
                    </div>
                    <div className='t_cont_2 cont_box' style={{ display: (1 === this.state.index_now) ? "block" : "none" }}>
                        <form action="">
                            <p className="admin_name">
                                <input type="text" placeholder="请输入手机号码" />
                            </p>
                            <p className="admin_psw">
                                <input type="password" placeholder="请输入验证码" />
                                <span>获取验证码</span>
                            </p>
                            <input className="btn_login" type="button" value="登录" />
                        </form>
                        <div className="login_set">
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                <span>两周内免登录</span>
                            </label>
                            <a href="">忘记密码？</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export default LoginTabs
export default withRouter(connect((state)=>{
    console.log(state)
    return state
})(LoginTabs))
