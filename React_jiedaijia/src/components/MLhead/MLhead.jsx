import React from 'react'
import './MLhead.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../../store/Store.jsx';

class MLhead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anmin_on: false,
            // title: this.props.location.state.day
        }
        this.state.anmin_on = store.getState().admin_online;
        // store.subscribe(this.handleStoreChange); 
        store.dispatch({
            type: 'nav_is_show'
        })
    }

    // handleStoreChange() {
    //     let admin_status = store.getState().admin_online;
    //     this.setState(()=>{
    //         return{
    //             anmin_on: admin_status
    //         }
    //     })
    // }

    toLogin() {
        console.log('122');
        this.props.history.push('/JDlogin');
    }

    render() {

        return (
            <Router>
                <section id='MLhead'>
                    <div className="admin_img">
                        <img src="https://www.jiedaijia.cn/h5/publicImg/publish.png" alt=""/>
                    </div>
                    <div 
                    style={{display:!this.state.anmin_on?'block':'none'}}
                    onClick={this.toLogin.bind(this)}
                    className="btn_login">
                        <span>点击登录</span>
                    </div>
                    <div 
                    style={{display:this.state.anmin_on?'block':'none'}}                    
                    className="admin_info">
                        <p className="admin_name">
                            <span>与神对话1994</span>
                            <img src="https://www.jiedaijia.cn/resource/degree/1pinnong.png" alt=""/>
                        </p>
                        <p className="admin_num">
                            <span>
                                <i>6</i>
                                <em>帖子</em>
                            </span>
                            <span>
                                <i>12</i>
                                <em>评论</em>
                            </span>
                            <span>
                                <i>121</i>
                                <em>积分</em>
                            </span>
                        </p>
                    </div>

                    {/* <NavLink className="more_btn" to='./'>
                        <span>更多</span>
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-jiantou-hui.png" alt="" />
                    </NavLink> */}
                </section>
            </Router>
        )
    }
}

// export default MineHead
// export default withRouter(HLmore)
export default withRouter(connect((state) => {
    // console.log(state)
    return state
})(MLhead))