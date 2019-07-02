import React from 'react'
import './HLicons.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
// import { connect } from 'react-redux'
// import store from '../Store/Store.jsx';

class HLicons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
        }
    }

    render() {

        return (
            <Router>
                <div id='HLicons'>
                    <NavLink to='./'>
                        <img src="https://www.jiedaijia.cn/resource/banner/xinpinzhuanqu.png" alt=""/>
                        <span>新品专区</span>
                    </NavLink>
                    <NavLink to='./'>
                        <img src="https://www.jiedaijia.cn/resource/banner/xiaoejisu.png" alt=""/>
                        <span>小额极速</span>
                    </NavLink>
                    <NavLink to='./'>
                        <img src="https://www.jiedaijia.cn/resource/banner/shequ.png" alt=""/>
                        <span>社区</span>
                    </NavLink>
                    <NavLink to='./'>
                        <img src="https://www.jiedaijia.cn/resource/banner/jinrixintie.png" alt=""/>
                        <span>今日新帖</span>
                    </NavLink>
                </div>
            </Router>
        )
    }
}

// export default MineHead
// export default withRouter(HLicons)
export default withRouter(HLicons)