import React from 'react'
import './LoginHead.scss'
import { HashRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../Store/Store.jsx';

class LoginHead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
        }
        console.log(store.getState().show_nav);
        store.dispatch({
            type: 'nav_is_close'
        })
        console.log(store.getState().show_nav)
    }

    toGoBack() {
        console.log('1212');
        // this.props.history.goback();
        this.props.history.push('/Jmine');
        store.dispatch({
            type: 'nav_is_show'
        })
    }
    render() {

        return (

            <div id='login_head'>
                <div className='head_box'>
                    <i onClick={this.toGoBack.bind(this)}>
                        &lt;
                        </i>
                    <span>登录</span>
                    <em>注册</em>
                </div>
            </div>
        )
    }
}

// export default MineHead
// export default withRouter(LoginHead)
export default withRouter(connect((state) => {
    // console.log(state)
    return state
})(LoginHead))