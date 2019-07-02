import React from 'react'
import './Jdetails.scss'
import axios from 'axios';
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../components/Store/Store.jsx';

class Jdetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsListAll: [],
            goodsInfo: {},
            goodsId: this.props.location.state.gid
        }
        store.dispatch({
            type: 'nav_is_close'
        })
        // console.log(this.props.location.search)
        console.log(this.props.location.state.gid,this.state.goodsId);
    }

    componentDidMount() {
        this.loadMore();
    }

    async loadMore() {
        const goodList1 = (await axios.get('https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/homelist1#!method=get'
        )).data.data.goods
        // console.log(goodList1);
        const goodList2 = (await axios.get('https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/homeList2#!method=get'
        )).data.data.goods
        this.state.goodsListAll = [...goodList1,...goodList2]
        
        this.setState({
            goodsListAll: this.state.goodsListAll,
            // tablist2: goodList2
        })
        console.log(this.state.goodsListAll);
        this.state.goodsListAll.map((item)=>{
            if(item.goods_id == this.state.goodsId){
                this.setState({
                    goodsInfo: item,
                })
                return this.state.goodsInfo
            }
        })
        console.log(this.state.goodsInfo);
    }

    render() {

        return (
            <div id="Jdetails_box">
                {/* 按钮盒子 */}
                <div className="cart_box">
                    <NavLink to="/" className="tohome">
                        <img src="https://web.juanpi.com/static/media/home_dark.41f2a808.png" alt="" />
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/Jcart" className="tocart">
                        <img src="https://web.juanpi.com/static/media/cart_icon.5d19f0b4.png" alt="" />
                        <span>购物车</span>
                    </NavLink>
                    <p className="btn_buy_now">
                        <span>立即购买</span>
                    </p>
                    <p className="btn_add_cart">
                        <span>加入购物车</span>
                    </p>
                </div>
                {/* 商品详情 */}
                <div className="goods_box">
                    <section className="img_box">
                        <img src={this.state.goodsInfo.pic_url} alt=""/>
                    </section>
                    <section className="price_box">
                        <span className="price_on">
                            <em>￥</em>
                            {this.state.goodsInfo.cprice}
                        </span>
                        <del className="price_off">￥{this.state.goodsInfo.oprice}</del>
                        <span className="baoyou">包邮</span>
                        <span className="others">{this.state.goodsInfo.time_left}</span>
                    </section>
                    <section className="title_box">
                        <span className="title">
                            {this.state.goodsInfo.title_long}
                        </span>
                        <span className="btn_collect">
                            <img src="https://web.juanpi.com/static/media/collect.f8400f03.png" alt=""/>
                        </span>
                    </section>
                </div>

            </div>
        )
    }
}

// export default withRouter(Jdetails)
export default withRouter(connect((state)=>{
    console.log(state)
    return state
})(Jdetails))