import React from 'react'
import './Htabs.scss'
import axios from 'axios';
import { HashRouter as Router, Route, withRouter, NavLink, Link } from "react-router-dom";

class Htabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index_now: 0,
            t_info: [
                {
                    tid: '11',
                    title: '精选专场'
                },
                {
                    tid: '12',
                    title: '精选单品'
                }
            ],
            tablist1: [],
            tablist2: []
            // title: this.props.location.state.day
        }
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }

    //渲染，选项卡头部按钮
    vFor(arr) {
        return <ul className='t_head'>
            {
                arr.map((item, index) => {
                    return <li
                        key={index}
                        onClick={this.tabOne.bind(this, index)}
                        className={(index === this.state.index_now) ? 'active' : ''}>
                        <div>{item.title}</div>
                    </li>
                })
            }
        </ul>
    }
    //渲染，选项卡内容，商品盒子
    vForlist(arr) {
        return <ul className='t_goods_list'>
            {
                arr.map((item) => {
                    return <li key={item.goods_id} >
                        <NavLink to={{ pathname : '/Jdetails' , state : { gid: item.goods_id }}}>
                            <div className='box_img'>
                                <img src={item.pic_url} alt="" />
                            </div>
                            <div className='box_price'>
                                <span>￥{item.cprice}</span>
                                <del>￥{item.oprice}</del>
                            </div>
                            <div className='box_name'>
                                <p>{item.title}</p>
                            </div>
                        </NavLink>
                    </li>
                })
            }
        </ul>
    }
    //渲染，选项卡内容，专场
    vForSpecial(arr) {
        return <ul className='t_special_list'>
            {
                arr.map((item) => {
                    return <li key={item.goods_id} >
                        <NavLink to={{ pathname : '/Jdetails' , state : { gid: item.goods_id }}}>
                            <div className='box_img'>
                                <img src={item.pic_url} alt="" />
                                <div className='brand_img'>
                                    <img src={item.logo_url} alt="" />
                                </div>
                            </div>
                            <div className='box_title'>
                                <p>{item.coupon_tips}</p>
                            </div>
                            <div className='box_info'>
                                <span>{item.title}</span>
                                <em>{item.time_left}</em>
                            </div>
                        </NavLink>
                    </li>
                })
            }
        </ul>
    }
    //点击按钮，切换选项卡
    tabOne(index) {
        console.log(index)
        this.setState({
            index_now: index
        })
        console.log(this.state.index_now)
    }

    componentDidMount() {
        this.loadMore();
    }
    async loadMore() {
        // this.setState({
        //     loadingStatus: 'show'
        // })
        const goodList1 = (await axios.get('https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/homelist1#!method=get'
        )).data.data.goods
        // console.log(goodList1);
        const goodList2 = (await axios.get('https://www.easy-mock.com/mock/5cfb93cde5e7b850d846cd8a/example/homeList2#!method=get'
        )).data.data.goods
        // console.log(goodList2);
        // sessionStorage.setItem(tab, JSON.stringify([...this.state.news, ...news]))
        // await new Promise((resolve) => { setTimeout(() => { resolve() }, 1000) })

        // this.setState({
        //     page: ++this.state.page,
        //     news: [...this.state.news, ...news],
        //     loadingStatus: 'hide'
        // })
        this.setState({
            tablist1: goodList1,
            tablist2: goodList2
        })
        // console.log(this.state.tablist1);
        // console.log(this.state.tablist2);
    }

    render() {

        return (
            <div id='Htabs_box'>
                {this.vFor(this.state.t_info)}
                <div className='t_cont'>
                    <div className='t_cont_1' style={{ display: (0 === this.state.index_now) ? "block" : "none" }}>
                        {this.vForSpecial(this.state.tablist1)}
                    </div>
                    <div className='t_cont_2' style={{ display: (1 === this.state.index_now) ? "block" : "none" }}>
                        {this.vForlist(this.state.tablist2)}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Htabs)
