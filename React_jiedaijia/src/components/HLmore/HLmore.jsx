import React from 'react'
import './HLmore.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
// import { connect } from 'react-redux'
// import store from '../Store/Store.jsx';

class HLmore extends React.Component {
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
                <div id='HLmore'>
                    <div className="title_box">
                        <img src="https://www.jiedaijia.cn/h5/publicImg/daikuan-icon.png" alt="" />
                        <span>热门贷款</span>
                    </div>
                    <NavLink className="more_btn" to='./'>
                        <span>更多</span>
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-jiantou-hui.png" alt="" />
                    </NavLink>
                </div>
            </Router>
        )
    }
}

// export default MineHead
// export default withRouter(HLmore)
export default withRouter(HLmore)