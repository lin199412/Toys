import React from 'react'
import './Jsearch.scss'
import { HashRouter as Router, Route, Link, withRouter } from "react-router-dom";

class Jsearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
        }
        // console.log(this.props.history)
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }

    toGoBack() {
        console.log('1212');
        // this.props.history.goback();
        this.props.history.push('/');

    }
    render() {

        return (
            <div id='Jsearch_head'>
                <div className='head_box'>
                    <div className="search_box">
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee" alt="" />
                        <input type="text" placeholder="搜索商品" />
                    </div>
                    <em className="btn_cancel" onClick={this.toGoBack.bind(this)}>取消</em>
                </div>
                <div className="info_box">
                    <p>热搜</p>
                    <p>搜索历史</p>
                </div>
            </div>
        )
    }
}

// export default MineHead

// export default withRouter(connect((state)=>{
//     return state
// })(Tabbar))
export default withRouter(Jsearch)