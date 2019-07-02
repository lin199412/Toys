import React from 'react'
import './Jcart.scss'
// import CartEmpty from '../components/CartEmpty/CartEmpty.jsx'
import { connect } from 'react-redux'
import store from '../components/Store/Store.jsx';

class Jcart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            admin_is_on: false,
            is_edit: false,
            is_activity_check: false,
            is_all_check: false,
            price_all: 0,
            num_all: 0,
            orders: [
                {
                    o_id: '101',
                    o_name: '尖头纯色高跟绑带女鞋',
                    o_img: 'https://goods6.juancdn.com/goods/171219/b/8/5a38d5c98150a16b1b3b3c94_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg',
                    o_buy: '1',
                    o_rest: '7',
                    o_types: '黑色 38',
                    o_price_on: '160',
                    o_price_off: '288',
                    o_count_type: '满减',
                    o_count_info: '再凑25元可减3元'
                }, {
                    o_id: '102',
                    o_name: '名媛气质洋气时尚套装',
                    o_img: 'https://goods4.juancdn.com/tao/190105/6/0/5c3083cd33b0897d0e42c727_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg',
                    o_buy: '2',
                    o_rest: '5',
                    o_types: '白色条纹西装',
                    o_price_on: '188',
                    o_price_off: '399',
                    o_count_type: '满件折',
                    o_count_info: '已享满1件8折再凑1件可享7.5折'
                }, {
                    o_id: '103',
                    o_name: '雪纺碎花黑色连衣裙',
                    o_img: 'https://goods1.juancdn.com/tao/190430/0/6/5cc822f133b08978da672db6_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg',
                    o_buy: '1',
                    o_rest: '8',
                    o_types: '黑色 160',
                    o_price_on: '246',
                    o_price_off: '499',
                    o_count_type: '满件折',
                    o_count_info: '再凑一件可享5折'
                }, {
                    o_id: '104',
                    o_name: '网纱仙女T恤蓬蓬裙',
                    o_img: 'https://goods8.juancdn.com/goods/190530/f/9/5cef5619b6f8ea71c01b855d_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg',
                    o_buy: '2',
                    o_rest: '9',
                    o_types: '白色 M',
                    o_price_on: '38',
                    o_price_off: '128',
                    o_count_type: '满件减',
                    o_count_info: '再凑一件减10元'
                }
            ]
            // title: this.props.location.state.day
        }
        store.dispatch({
            type: 'nav_is_show'
        })
        this.state.admin_is_on = store.getState().admin_online;
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
        // console.log(this.state.admin_is_on)
    }

    // 渲染商品列表
    cartList(arr) {
        return <ul className='cart_list'>
            {
                arr.map((item, index) => {
                    return <li key={item.o_id} >
                        <div className="box_check">
                            <span
                                style={{ background: (item.o_ischecked) ? "#ff464e" : "#fff" }}
                                onClick={this.btn_check_goods.bind(this, item)}>
                                <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee" alt="" />
                            </span>
                        </div>
                        <div className="box_cont">
                            <div className="box_count">
                                <em>{item.o_count_type}</em>
                                <span>{item.o_count_info}</span>
                                <i>去凑单 &gt;</i>
                            </div>
                            <div className="box_goods">
                                <div className="box_img">
                                    <img src={item.o_img} alt="" />
                                </div>
                                <div className="box_info">
                                    <h2>{item.o_name}</h2>
                                    <h3>{item.o_types}</h3>
                                    <p className="price">
                                        <span>￥{item.o_price_on}</span>
                                        <del>￥{item.o_price_off}</del>
                                    </p>
                                    <div className="box_num">
                                        <em style={{ display: (!this.state.is_edit) ? "block" : "none" }}>x{item.o_buy}</em>
                                        <div className="box_num_ch" style={{ display: (this.state.is_edit) ? "block" : "none" }}>
                                            <input
                                                onClick={this.dis_one.bind(this, item)}
                                                className="add" type="button" value="-" />
                                            <span className="text">{item.o_buy}</span>
                                            <input
                                                onClick={this.add_one.bind(this, item)}
                                                className="dis" type="button" value="+" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                })
            }
        </ul>
    }

    // 点击按钮，切换到商品编辑页面
    btn_edit() {
        this.setState({
            is_edit: !this.state.is_edit
        });
        // console.log(this.state.is_edit);
    }

    // 给每个数据绑定勾选状态的布尔值
    bindBool() {
        this.state.orders.map((item) => {
            item.o_ischecked = false
        })
        this.setState({
            orders: this.state.orders
        });
    }

    //计算
    //计算总价
    sum_price() {
        this.state.price_all = 0;
        this.state.orders.map((item) => {
            if (item.o_ischecked) {
                this.state.price_all += item.o_price_on * item.o_buy
            }
        });
        this.state.price_all = this.state.price_all.toFixed(2);
        this.setState({
            price_all: this.state.price_all
        });
        // console.log(this.state.price_all);
    }
    //计算总数
    sum_num() {
        this.state.num_all = 0;
        this.state.orders.map((item) => {
            if (item.o_ischecked) {
                this.state.num_all += item.o_buy - 0;
            }
        });
        this.setState({
            num_all: this.state.num_all
        });
        // console.log(this.state.num_all);
    }

    // 生命周期
    componentDidMount() {
        this.bindBool();
        // console.log(this.state.orders);
    }

    // shouldComponentUpdate() {
    //     this.sum_price();
    //     return true
    // }

    // componentWillUpdate() {
    //     this.sum_price();
    //     console.log('1212');  
    // }

    // 勾选（全选，单选，活动按钮）
    // 全选
    btn_check_all() {
        // 全选按钮
        this.state.is_all_check = !this.state.is_all_check
        this.setState({
            is_all_check: this.state.is_all_check
        });
        // 控制单个商品
        this.state.orders.map((item) => {
            item.o_ischecked = this.state.is_all_check;
            this.setState({
                item: item
            });
        });
        // 控制活动按钮勾选状态
        this.is_activity_check = this.state.is_all_check;
        this.setState({
            is_activity_check: this.is_activity_check
        });
        // 计算总价和总数
        this.sum_price();
        this.sum_num();
    }
    // 勾选活动（店铺）
    btn_check_activity() {
        // 勾选活动
        this.state.is_activity_check = !this.state.is_activity_check;
        this.setState({
            is_activity_check: this.state.is_activity_check
        });
        // 勾选单件商品
        this.state.orders.map((item) => {
            item.o_ischecked = this.state.is_activity_check;
            this.setState({
                item: item
            });
        });
        // 控制全选按钮，只有一个活动，不需要判断
        this.state.is_all_check = this.state.is_activity_check
        this.setState({
            is_all_check: this.state.is_all_check
        });

        // 计算总价和总数
        this.sum_price();
        this.sum_num();
    }
    // 勾选单件商品
    btn_check_goods(item) {
        // 勾选单件商品
        item.o_ischecked = !item.o_ischecked;
        this.setState({
            item: item
        });
        let good_checked_num = 0;
        let good_number = this.state.orders.length;
        this.state.orders.map((item) => {
            if (item.o_ischecked) {
                good_checked_num++;
            }
        });
        if (good_checked_num === good_number) {
            // this.state.is_all_check = true;
            // this.state.is_activity_check = true;
            this.setState({
                is_all_check: true,
                is_activity_check: true
            });
        } else {
            this.setState({
                is_all_check: false,
                is_activity_check: false
            });
        }
        // 计算总价和总数
        this.sum_price();
        this.sum_num();
    }


    //点击按钮 数量加一
    add_one(item) {
        item.o_buy >= item.o_rest ? item.o_buy = item.o_rest : item.o_buy++;
        this.setState({
            item: item
        });
        this.sum_price();
        this.sum_num();
    }
    //点击按钮 数量减一
    dis_one(item) {
        item.o_buy <= 1 ? item.o_buy = 1 : item.o_buy--;
        this.setState({
            item: item
        });
        this.sum_price();
        this.sum_num();
    }

    // 删除所选商品
    del_goods() {
        for(let del = this.state.orders.length-1; del>=0; del--){
            if(this.state.orders[del].o_ischecked){
                this.state.orders.splice(del, 1);
                console.log(this.state.orders)
                this.setState({
                    orders: this.state.orders
                });
            }
        }
    }

    // 渲染页面
    render() {
        return (
            <section id='cart_box' >

                {/* 购物车 头部 */}
                <div id='cart_head'>
                    <i>
                        <a href="">&lt;</a>
                    </i>
                    <span>购物车</span>
                    <em onClick={this.btn_edit.bind(this)}>{!this.state.is_edit ? "编辑" : "完成"}</em>
                </div>

                {/* 购物车有商品 */}
                <div id="cart_full" style={{ display: (this.state.admin_is_on) ? "block" : "none" }} >
                    <div className="activity_head">
                        <span
                            className="head_check"
                            style={{ background: (this.state.is_activity_check) ? "#ff464e" : "#fff" }}
                            onClick={this.btn_check_activity.bind(this)}>
                            <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee" alt="" />
                        </span>
                        <span className="head_icon">
                            <img src="http://s2.juancdn.com/bao/170615/2/b/5942339ea43d1f47ef70e59a_72x72.png" alt="" />
                        </span>
                        <span className="head_text">
                            跨店促销
                        </span>
                    </div>
                    {this.cartList(this.state.orders)}
                    <div className="box_sum">
                        <div className="all_check">
                            <span
                                style={{ background: (this.state.is_all_check) ? "#ff464e" : "#fff" }}
                                onClick={this.btn_check_all.bind(this)}>
                                <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee" alt="" />
                            </span>
                            <em>全选</em>
                        </div>
                        <div className="all_text" style={{ display: (!this.state.is_edit) ? "block" : "none" }}>
                            <p className="sum_big">
                                合计
                                <span>￥
                                    {this.state.price_all ? this.state.price_all : '00.00'}
                                </span>
                            </p>
                            <p className="sum_small">
                                总额：
                                <em>￥
                                    {this.state.price_all ? this.state.price_all : '00.00'}
                                </em>
                                立减
                                <em>00.00</em>
                            </p>
                        </div>
                        <div className="all_text all_text_a" style={{ display: (this.state.is_edit) ? "block" : "none" }}>
                            <i>移入收藏夹</i>
                        </div>
                        <i className="all_btn" style={{ display: (!this.state.is_edit) ? "block" : "none" }}>
                            去结算({this.state.num_all})
                        </i>
                        <i
                            onClick={this.del_goods.bind(this)}
                            className="all_btn all_btn_a"
                            style={{ display: (this.state.is_edit) ? "block" : "none" }}>
                            删除
                        </i>
                    </div>
                </div>

                {/* 购物车为空 */}
                <div id='cart_empty' style={{ display: (!this.state.admin_is_on) ? "block" : "none" }}>
                    <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt="" />
                    <span>看到喜欢的就带回家吧</span>
                    <a href="">今日推荐</a>
                </div>
            </section>
        )
    }
}

// export default Jcart
export default connect((state)=>{
    console.log(state)
    return state
})(Jcart)