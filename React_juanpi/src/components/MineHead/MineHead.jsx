import React from 'react'
import './MineHead.scss'
import { HashRouter as Router, Route, Link, withRouter } from "react-router-dom";
// import JLogin from '../../pages/JLogin.jsx'
import { connect } from 'react-redux'
import store from '../Store/Store.jsx';

class MineHead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anmin_on: false
            // title: this.props.location.state.day
        }
        console.log(this.props.history);
        this.state.anmin_on = store.getState().admin_online;
        store.dispatch({
            type: 'nav_is_show'
        })
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }

    toLogin() {
        console.log('1212');
        this.props.history.push('/JLogin');
    }
    render() {

        return (
            <div id='mine_head'>
                <div className='head_box'>
                    <i>
                        <a href="">&lt;</a>
                    </i>
                    <span>个人中心</span>
                    <em>{this.state.anmin_on ? '退出' : ''}</em>
                </div>
                <div className='admin_off' style={{ display: (!this.state.anmin_on) ? "block" : "none" }}>
                    <span>注册</span>
                    <i>|</i>
                    <span onClick={this.toLogin.bind(this)}>登录</span>
                </div>
                <div className='admin_on' style={{ display: (this.state.anmin_on) ? "block" : "none" }}>
                    <div className='admin_img'>
                        <img src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg" alt="" />
                    </div>
                    <div className='admin_info'>
                        <h3>与神对话1994</h3>
                        <p>
                            <span>我的账户</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

// export default MineHead

// export default withRouter(connect((state)=>{
//     return state
// })(Tabbar))
// export default withRouter(MineHead)
export default withRouter(connect((state) => {
    console.log(state)
    return state
})(MineHead))