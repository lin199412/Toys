import React from 'react'
import './MLbody.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../../store/Store.jsx';

class MLbody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            service_list: [
                {
                    s_id: 1,
                    s_name: '产品申请记录',
                    s_icon_1: 'https://www.jiedaijia.cn/h5/publicImg/history.png',
                    s_icon_arrow: 'https://www.jiedaijia.cn/h5/publicImg/gogogo.png',
                    s_page: ''
                }, {
                    s_id: 2,
                    s_name: '额度评估',
                    s_icon_1: 'https://www.jiedaijia.cn/h5/publicImg/userInfo.png',
                    s_icon_arrow: 'https://www.jiedaijia.cn/h5/publicImg/gogogo.png',
                    s_page: ''
                }, {
                    s_id: 3,
                    s_name: '意见反馈',
                    s_icon_1: 'https://www.jiedaijia.cn/h5/publicImg/yijianfankui.png',
                    s_icon_arrow: 'https://www.jiedaijia.cn/h5/publicImg/gogogo.png',
                    s_page: ''
                }, {
                    s_id: 4,
                    s_name: '微信',
                    s_icon_1: 'https://www.jiedaijia.cn/h5/publicImg/weixinlogo.png',
                    s_icon_arrow: 'https://www.jiedaijia.cn/h5/publicImg/gogogo.png',
                    s_page: ''
                }, {
                    s_id: 5,
                    s_name: '常见问题',
                    s_icon_1: 'https://www.jiedaijia.cn/h5/publicImg/wenti.png',
                    s_icon_arrow: 'https://www.jiedaijia.cn/h5/publicImg/gogogo.png',
                    s_page: ''
                }, {
                    s_id: 6,
                    s_name: '联系客服',
                    s_icon_1: 'https://www.jiedaijia.cn/h5/publicImg/sever.png',
                    s_icon_arrow: 'https://www.jiedaijia.cn/h5/publicImg/gogogo.png',
                    s_page: ''
                }, {
                    s_id: 7,
                    s_name: '商务合作',
                    s_icon_1: 'https://www.jiedaijia.cn/h5/publicImg/shangwu.png',
                    s_icon_arrow: 'https://www.jiedaijia.cn/h5/publicImg/gogogo.png',
                    s_page: ''
                }, {
                    s_id: 8,
                    s_name: '设置',
                    s_icon_1: 'https://www.jiedaijia.cn/h5/publicImg/shezhi.png',
                    s_icon_arrow: 'https://www.jiedaijia.cn/h5/publicImg/gogogo.png',
                    s_page: ''
                }
            ]
            // anmin_on: false
            // title: this.props.location.state.day
        }
    }

    forMineList(arr) {
        return <ul className='services_box'>
            {
                arr.map((item, index) => {
                    return <li
                        key={index}>
                        <div className="service">
                            <img className="service_icon" src={item.s_icon_1} alt="" />
                            <span className="service_name">{item.s_name}</span>
                        </div>

                        <i className="icon_box">
                            <img className="icon_arrow" src={item.s_icon_arrow} alt="" />
                        </i>
                    </li>
                })
            }
        </ul>
    }

    login_out() {
        console.log('退出');
        store.dispatch({
            type: 'admin_is_off'
        });
        this.props.history.push('/');
    }

    render() {

        return (
            <Router>
                <div id='MLbody'>
                    {this.forMineList(this.state.service_list)}
                    <p className="loginOut_box">
                        <span 
                        onClick={this.login_out.bind(this)}
                        className="btn_out">
                            退出登录
                        </span>
                    </p>
                    {/* <NavLink className="more_btn" to='./'>
                        <span>更多</span>
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-jiantou-hui.png" alt="" />
                    </NavLink> */}
                </div>
            </Router>
        )
    }
}

// export default MineHead
// export default withRouter(HLmore)
export default withRouter(connect((state) => {
    // console.log(state)
    return state
})(MLbody))