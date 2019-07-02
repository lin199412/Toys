import React from 'react'
import './MineBody.scss'

class MineBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // title: this.props.location.state.day
        }
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }
    render() {

        return (
            <div id='mine_body'>
                <div className='orders'>
                    <a href="">我的订单</a>
                    <span>全部订单</span>
                </div>
                <div className='orders_items'>
                    <a href="">
                        <img src="https://f4.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/unpaid.png" alt="" />
                        <span>待付款</span>
                    </a>
                    <a href="">
                        <img src="https://f4.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/uncomment.png" alt="" />
                        <span>待成团</span>
                    </a>
                    <a href="">
                        <img src="https://f4.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/unconfirm.png" alt="" />
                        <span>待收货</span>
                    </a>
                    <a href="">
                        <img src="https://f4.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/refund.png" alt="" />
                        <span>退款/售后</span>
                    </a>
                </div>
                <div className='user_items'>
                    <a href="">我的优惠券</a>
                    <a href="">我的收藏</a>
                    <a href="">我的拼团</a>
                    <a href="">
                        我的免单券
                        <span>0张</span>
                    </a>
                    <a href="">
                        借钱
                        <span>新用户免费领1000元</span>
                    </a>
                </div>
                <div className='user_items'>
                    <a href="">客服中心</a>
                    <a href="">关于卷皮</a>
                </div>
                <div className='types'>
                    <a href="">返回首页</a>
                    <a href="">客户端</a>
                    <a href="">电脑版</a>
                </div>
            </div>
        )
    }
}

export default MineBody