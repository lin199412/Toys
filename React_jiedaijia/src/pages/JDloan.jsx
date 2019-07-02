import React from 'react';
import './JDloan.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../store/Store.jsx';
import axios from 'axios'
import '../setupProxy'
import loanList1 from '../api/loanList1.json'
import loanList2 from '../api/loanList2.json'
import loanList3 from '../api/loanList3.json'


class JDloan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            axiosAddress: [
                1561442284787,
                1561442990634,
                1561454372709
            ],
            loan_good_list: [],
            loan_good_list_o: [],
            show_Rank_list: false,
            show_section_list: false,
            rank_list: [
                {
                    r_id: 1,
                    r_fn: 'rank_default',
                    r_key: '',
                    r_name: '默认排序',
                    r_active: true,
                    r_img: 'https://www.jiedaijia.cn/h5/publicImg/daikuan-moren-icon.png',
                }, {
                    r_id: 2,
                    r_fn: 'rank_success',
                    r_key: 'rankValue',
                    r_name: '贷款成功率',
                    r_active: false,
                    r_img: 'https://www.jiedaijia.cn/h5/publicImg/daikuan-chenggong-icon.png',
                }, {
                    r_id: 3,
                    r_fn: 'rank_speed',
                    r_key: 'loanAllSpeed',
                    r_name: '贷款速度',
                    r_active: false,
                    r_img: 'https://www.jiedaijia.cn/h5/publicImg/daikuan-sudu-icon.png',
                }, {
                    r_id: 4,
                    r_fn: 'rank_rate',
                    r_key: 'loanAllRate',
                    r_name: '贷款利率',
                    r_active: false,
                    r_img: 'https://www.jiedaijia.cn/h5/publicImg/daikuan-lilv-icon.png',
                }, {
                    r_id: 5,
                    r_fn: 'rank_limit',
                    r_key: 'loanLimitHigh',
                    r_name: '贷款额度',
                    r_active: false,
                    r_img: 'https://www.jiedaijia.cn/h5/publicImg/daikuan-edu-icon.png',
                }
            ],
            section_list_money: [
                {
                    t_id: '11',
                    t_name: '不限',
                    t_low: 0,
                    t_top: Infinity,
                    t_check: true
                }, {
                    t_id: '12',
                    t_name: '2000以下',
                    t_low: 0,
                    t_top: 2000,
                    t_check: false
                }, {
                    t_id: '13',
                    t_name: '2000-5000',
                    t_low: '2000',
                    t_top: '5000',
                    t_check: false
                }, {
                    t_id: '14',
                    t_name: '5000-10000',
                    t_low: '5000',
                    t_top: '10000',
                    t_check: false
                }, {
                    t_id: '15',
                    t_name: '10000-20000',
                    t_low: '10000',
                    t_top: '20000',
                    t_check: false
                }, {
                    t_id: '16',
                    t_name: '20000-50000',
                    t_low: '20000',
                    t_top: '50000',
                    t_check: false
                }, {
                    t_id: '17',
                    t_name: '5万以上',
                    t_low: '50000',
                    t_top: Infinity,
                    t_check: false
                },
            ],
            section_list_keyword: [
                {
                    k_id: '21',
                    k_name: '类型不限',
                    k_keyword: '',
                    t_check: true
                }, {
                    k_id: '22',
                    k_name: '热门贷款',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '23',
                    k_name: '小额极速',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '24',
                    k_name: '息费低',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '25',
                    k_name: '额度高',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '26',
                    k_name: '新品专区',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '27',
                    k_name: '芝麻分贷',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '28',
                    k_name: '运营商授信',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '29',
                    k_name: '工薪贷',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '30',
                    k_name: '信用卡授信',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '31',
                    k_name: '不查征信',
                    k_keyword: '',
                    t_check: false
                }, {
                    k_id: '32',
                    k_name: '社保公积金贷',
                    k_keyword: '',
                    t_check: false
                }
            ]
        }
        store.dispatch({
            type: 'nav_is_show'
        })
        // this.btn_check_section = this.btn_check_section.bind(this)
    }

    // 获取商品初始数据，根据初始数据进行排序
    async getDataHome() {
        // console.log(loanList1);
        let loan_list_data1 = loanList1.data.pageDate.list;
        // console.log(loan_list_data1)
        let loan_list_data2 = loanList2.data.pageDate.list;
        let loan_list_data3 = loanList3.data.pageDate.list;

        let loan_list_data = [...loan_list_data1, ...loan_list_data2, ...loan_list_data3];
        this.setState({
            loan_good_list: loan_list_data,
            loan_good_list_o: loan_list_data
        })
    }

    // 尝试跨域获取数据的方案
    // async getDataHome() {
    //     let url1 = '/homelist' + this.state.axiosAddress[1];
    //     const loan_list1 = await axios.get(url1);
    //     let url2 = '/homelist' + this.state.axiosAddress[1];
    //     const loan_list2 = await axios.get(url2);
    //     let url3 = '/homelist' + this.state.axiosAddress[1];
    //     const loan_list3 = await axios.get(url3);

    //     let loan_list_data1 = loan_list1.data.data.pageDate.list;
    //     let loan_list_data2 = loan_list2.data.data.pageDate.list;
    //     let loan_list_data3 = loan_list3.data.data.pageDate.list;

    //     let loan_list_data = [...loan_list_data1,...loan_list_data2,...loan_list_data3];

    //     console.log(loan_list_data);
    //     this.setState({
    //         loan_good_list: loan_list_data
    //     })
    //     console.log(this.state.loan_good_list);
    // }

    componentDidMount() {
        this.getDataHome();
    }
    
    toDetalis(id) {
        console.log(121);
        // this.props.history.push('/JDdetails', { gid: id });
        this.props.history.push({pathname:'/JDdetails', state:{ gid: id }});

    }
    // 渲染，商品列表
    forGoodsList(arr) {
        return <ul className='goods_box'>
            {
                arr.map((item) => {
                    return <li
                        key={item.id}>
                        {/* <NavLink to={{ pathname: '/JDdetails', state: { gid: item.id } }}> */}
                        <div className="goods"
                        onClick={this.toDetalis.bind(this,item.id)}>
                            <div className='box_img'>
                                <img src={'https://www.jiedaijia.cn/' + item.logoUrl} alt="" />
                            </div>
                            <div className='box_text'>
                                <p className="loansName ">{item.name}</p>
                                <p className="loansType">
                                    <i>{item.tagList[0] ? item.tagList[0] : ''}</i>
                                    <i>{item.tagList[1] ? item.tagList[1] : ''}</i>
                                    <i>{item.tagList[2] ? item.tagList[2] : ''}</i>
                                </p>
                                <p className="loansMassage">
                                    参考利率：
                                    <i>{item.loanRate}/{item.loanRateUnit}</i>
                                    额度：
                                    <i>{item.loanLimitLow}-{item.loanLimitHigh}</i>
                                </p>
                            </div>
                            <div className='box_icon'>
                                <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-jiantou-hui.png" alt="" />
                            </div>
                        </div>
                        {/* </NavLink> */}
                    </li>
                })
            }
        </ul>
    }

    //渲染，区间筛选表
    forSectionList_money(arr) {
        return <React.Fragment>
            {
                arr.map((item, index) => {
                    return <span
                        className={item.t_check ? 'active' : ''}
                        onClick={this.section_type_m.bind(this, item)}
                        key={item.t_id}>
                        {item.t_name}
                    </span>
                })
            }
        </React.Fragment>
    }
    //渲染，区间筛选表
    forSectionList_keyword(arr) {
        return <React.Fragment>
            {
                arr.map((item) => {
                    return <span
                        className={item.t_check ? 'active' : ''}
                        onClick={this.section_type_k.bind(this, item)}
                        key={item.k_id}>
                        {item.k_name}
                    </span>
                })
            }
        </React.Fragment>
    }
    // 选择区间类型，金额
    section_type_m(im) {
        // 点亮按钮
        let list_money = [...this.state.section_list_money];
        list_money.map((item) => {
            item.t_check = false;
        })
        im.t_check = true;
        // 筛选区间
        let loan_o_list = [...this.state.loan_good_list_o];
        let money_low = im.t_low;
        let money_high = im.t_high;
        let loan_o_list_filter = [];
        console.log(loan_o_list);
        loan_o_list.filter((item) => {
            if (item.loanLimitHigh > money_low && item.loanLimitLow <= money_low) {
                loan_o_list_filter.push(item)
            }
        })
        console.log(loan_o_list_filter);
        // 确定修改，更新数据
        this.setState(() => {
            return {
                section_list_money: list_money,                
                loan_good_list: loan_o_list_filter
            }
        })
    }
    // 选择区间类型，关键词
    section_type_k(im) {
        // 点亮按钮
        let list_keyword = [...this.state.section_list_keyword];
        list_keyword.map((item) => {
            item.t_check = false;
        })
        im.t_check = true;
        // 确定修改，更新数据
        this.setState(() => {
            return {
                section_list_keyword: list_keyword,
            }
        })
    }

    //渲染，排行按钮列表
    forRankList(arr) {
        return <ul className="rank_list" id="rank_list" style={{ display: this.state.show_Rank_list ? 'block' : 'none' }}>
            {
                arr.map((item, index) => {
                    return <li
                        key={item.r_id}
                        onClick={this.rank_list_type.bind(this, item.r_key, item)}>
                        <img src={item.r_img} alt="" />
                        <span style={{ color: item.r_active ? '#01cbe9' : '#626262' }}>{item.r_name}</span>
                    </li>
                })
            }
        </ul>
    }
    // 点击按钮，开关排行
    fn_show_rank_list() {
        console.log(this.state.loan_good_list);
        let btn_show = this.state.show_Rank_list;
        btn_show = !btn_show;
        this.setState({
            show_Rank_list: btn_show
        })
    }
    // 点击按钮排序
    // 给对象的键值排序，降序
    compare(p) {
        return function (m, n) {
            var a = m[p];
            var b = n[p];
            return b - a; //降序
        }
    }
    // 给对象的键值排序，升序
    compare2(p) {
        return function (m, n) {
            var a = m[p];
            var b = n[p];
            return b - a; //升序
        }
    }
    // 根据传入的关键字，给商品排序
    rank_list_type(key, im) {
        let loan_o_list = [...this.state.loan_good_list_o];
        // 根据关键字排序
        loan_o_list.sort(this.compare(key));
        // 修改字体颜色
        this.state.rank_list.map((item) => {
            item.r_active = false;
        })
        im.r_active = true;
        this.setState({
            loan_good_list: loan_o_list,
            rank_list: this.state.rank_list
        })
    }

    //根据键盘输入的值，筛选数据
    input_selet(e) {
        console.log(e.target.value);
        let keywords = e.target.value;
        let loan_o_list = [...this.state.loan_good_list_o];
        let loan_o_list_filter = [];
        loan_o_list.filter((item) => {
            if (item.name.indexOf(keywords) > -1
                || item.tagList[0].indexOf(keywords) > -1
                || item.tagList[1].indexOf(keywords) > -1
                || item.tagList[2].indexOf(keywords) > -1
                || item.loanRate.toString().indexOf(keywords) > -1
                || item.loanLimitLow.toString().indexOf(keywords) > -1
                || item.loanLimitHigh.toString().indexOf(keywords) > -1) {
                loan_o_list_filter.push(item)
            }
        })
        this.setState({
            loan_good_list: loan_o_list_filter
        })

        // this.setState(()=>{

        // },()=>{

        // })
    }

    // 打开筛选框
    btn_open_section() {
        this.setState(() => {
            return {
                show_section_list: true
            }
        })
        console.log(this.state.show_section_list)
    }

    // 关闭筛选框
    btn_close_section() {
        this.setState(() => {
            return {
                show_section_list: false
            }
        })
    }

    // 筛选框按钮，确定
    btn_check_section() {
        this.btn_close_section();
    }

    render() {
        return (
            <section id='loan_page'>
                <div id='loan_head'>
                    <div
                        onClick={this.btn_open_section.bind(this)}
                        className="loan_filter">
                        <img src="https://www.jiedaijia.cn/h5/publicImg/daikuan-shaixuan-icon.png" alt="" />
                        <span>筛选</span>
                    </div>
                    <div className="head_title">
                        贷款
                    </div>
                    <div className="loan_rank" onClick={this.fn_show_rank_list.bind(this)}>
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shunxu.png" alt="" />
                    </div>
                    {this.forRankList(this.state.rank_list)}
                </div>
                <div id="loan_search">
                    <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-soushuo.png" alt="" />
                    <input
                        onChange={this.input_selet.bind(this)}
                        type="text" placeholder="根据产品或金额搜索" />
                </div>
                {this.forGoodsList(this.state.loan_good_list)}
                <div
                    style={{ display: this.state.show_section_list ? 'block' : 'none' }}
                    id="section_list_bg">
                    <div className="section_list_box">
                        <i>贷款金额</i>
                        {this.forSectionList_money(this.state.section_list_money)}
                        <i>贷款类型</i>
                        {this.forSectionList_keyword(this.state.section_list_keyword)}
                        <input
                            onClick={this.btn_check_section.bind(this)}
                            type="button" value="确定" />
                    </div>
                    <div
                        onClick={this.btn_close_section.bind(this)}
                        className="mask"></div>
                </div>
            </section>
        )
    }
}

// export default JDloan
export default withRouter(connect((state) => {
    return state
})(JDloan))