import React from 'react';
import './JDgroup.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../store/Store.jsx';
import cityList from '../api/cityList.json'
import GLbanner from '../components/GLbanner/GLbanner.jsx'
import GLpart from '../components/GLpart/GLpart.jsx'
import GLtabs from '../components/GLtabs/GLtabs.jsx'

class JDgroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             contentClass:"search_head",
             isScrollTop: true
        };
        this.windowOnScroll();
        // let isScrollTop = true;
    };

    windowOnScroll(){
        let _this = this;
        window.onscroll = function(){
             //获取滚动条滚动的距离
            // let h = document.body.scrollTop;
            let h = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            // console.log(h);
            if(h > 110){
                _this.setState({
                    isScrollTop: false,
                        contentClass:"search_head background_change"  
                 });
                // if(isScrollTop){
                //          console.log('111');
                //         isScrollTop = false;
                //           _this.setState({
                //             isScrollTop: false,
                //                 contentClass:"search_head background_change"  
                //          });
                                
                //  }else{
                //          console.log("333");
                //          _this.setState({
                //                contentClass:"search_head"
                //          });
                //  }
        }else{
                _this.setState({
                    contentClass:"search_head"
                });
            }
        }
    };

    toBack() {
        console.log('1212');
        this.props.history.go(-1);
    }

    btn_search() {
        console.log('3434');

    }

    render() {
        return (
            <section id="JDgroup_page">
                <div className={this.state.contentClass}>
                    <span
                        className="input_box">
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-soushuo-bai.png" alt="" />
                        <input
                            style={{ color: "#fff" }}
                            type="text" placeholder="搜索帖子或社区" />
                    </span>
                    <em
                        className="btn_more">
                        <img src="https://www.jiedaijia.cn/h5/publicImg/xiangji.png" alt="" />
                    </em>
                </div>
                <GLbanner/>
                <GLpart/>
                <div className="mid_img_box">
                    <img src="https://www.jiedaijia.cn/resource/banner/mj750110.jpg" alt=""/>
                </div>
                <GLtabs/>
            </section>
        )
    }
}

export default withRouter(connect((state) => {
    // console.log(state)
    return state
})(JDgroup))