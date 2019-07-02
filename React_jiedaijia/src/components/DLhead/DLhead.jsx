import React from 'react'
import './DLhead.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
// import { connect } from 'react-redux'
// import store from '../Store/Store.jsx';

class DLhead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
        }
        // console.log(store.getState().show_nav);
        // store.dispatch({
        //     type: 'nav_is_close'
        // })
        // console.log(store.getState().show_nav)
    }

    toBack() {
        console.log('1212');
        // this.props.history.goback();
        this.props.history.go(-1);
        // this.props.history.push('/JDcitys');
        // store.dispatch({
        //     type: 'nav_is_show'
        // })
    }

    toMore() {
        this.props.history.push('/JDloan');
    }

    render() {

        return (
            <Router>
                <div id='DLhead'>
                    <img 
                    onClick={this.toBack.bind(this)}
                    className="btn_back"
                    src="https://www.jiedaijia.cn/h5/publicImg/left-color.png" alt=""/>
                    <span 
                    className="head_title">贷款详情</span>
                    <em 
                    onClick={this.toMore.bind(this)}
                    className="btn_more">更多贷款</em>
                    {/* <div 
                    onClick={this.toCity.bind(this)}
                    className='loaction_box'>
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-dingwei.png" alt=""/>
                        <span>广州市</span>
                    </div>
                    <div 
                    onClick={this.toSerach.bind(this)}
                    className='search_box'>
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-soushuo.png" alt=""/>
                        <span>根据产品或关键词搜索</span>
                    </div> */}
                </div>
            </Router>
        )
    }
}

// export default MineHead
// export default withRouter(DLhead)
export default withRouter(DLhead)