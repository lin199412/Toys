import React from 'react';
import './JDsearch.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../store/Store.jsx';
import cityList from '../api/cityList.json'

class JDsearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        store.dispatch({
            type: 'nav_is_close'
        })
    }

    toBack() {
        console.log('1212');
        this.props.history.go(-1);
    }

    btn_search() {
        console.log('3434');

    }

    render() {
        return (
            <section id="JDsearch_page">
                <div className="search_head">
                    <img
                        onClick={this.toBack.bind(this)}
                        className="btn_back"
                        src="https://www.jiedaijia.cn/h5/publicImg/left-w.png" alt="" />
                    <span
                        className="head_title">
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-soushuo-bai.png" alt="" />
                        <input 
                        style={{color: "#fff"}}
                        type="text" placeholder="根据产品或关键词搜索" />
                    </span>
                    <em
                        onClick={this.btn_search.bind(this)}
                        className="btn_more">搜索</em>
                </div>
                <div className="search_body">
                    <div className="input_empty">
                        <img src="https://www.jiedaijia.cn/h5/publicImg/sousuo-zhanwei@2x.png" alt=""/>
                        <p>根据产品或关键词搜索</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(connect((state) => {
    // console.log(state)
    return state
})(JDsearch))