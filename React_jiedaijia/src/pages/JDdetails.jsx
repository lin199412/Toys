import React from 'react'
import './JDdetails.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../store/Store.jsx';
import loanList1 from '../api/loanList1.json'
import loanList2 from '../api/loanList2.json'
import loanList3 from '../api/loanList3.json'
import DLhead from '../components/DLhead/DLhead.jsx'

class JDdetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
            goodsId: this.props.location.state.gid,
            goodsInfo: {},
            loan_all_list: [],
            goods_info_tab: [
                {
                    h_id: '1',
                    h_name: '产品详情'
                }, {
                    h_id: '2',
                    h_name: '评论区'
                }
            ],
            index_now: 0
        }
        store.dispatch({
            type: 'nav_is_close'
        })
        console.log(this.props.location.state.gid, this.state.goodsId);
        console.log(this.state.goodsInfo);
    }

    getDataDetails() {
        // console.log(loanList1);
        let loan_list_data1 = loanList1.data.pageDate.list;
        // console.log(loan_list_data1)
        let loan_list_data2 = loanList2.data.pageDate.list;
        let loan_list_data3 = loanList3.data.pageDate.list;

        let loan_list_data = [...loan_list_data1, ...loan_list_data2, ...loan_list_data3];
        // this.setState({
        //     home_good_list: loan_list_data,
        // });
        let good_info = {};
        loan_list_data.map((item) => {
            if (item.id === this.state.goodsId) {
                good_info = item;
            }
        });
        console.log(good_info);
        this.setState(() => {
            return {
                goodsInfo: good_info
            }
        });
        console.log(this.state.goodsInfo)
    }

    componentDidMount() {
        this.getDataDetails();
    }

    // 渲染，此种贷款三大特点
    forTips(arr) {
        return <React.Fragment>
            {
                arr.map((item, index) => {
                    return <i
                        className=""
                        key={index}>
                        {item}
                    </i>
                })
            }
        </React.Fragment>
    }
    // 渲染，此种贷款三大特点
    forInfoTabs(arr) {
        return <React.Fragment>
            {
                arr.map((item, index) => {
                    return <i
                        onClick={this.btn_info.bind(this, index)}
                        className=""
                        key={item.h_id}>
                        {item.h_name}
                    </i>
                })
            }
        </React.Fragment>
    }

    // 点击切换选项卡
    btn_info(i) {
        this.setState(() => {
            return {
                index_now: i
            }
        });
    }

    for_tabs_head(arr) {
        return <React.Fragment>
            {
                arr.map((item, index) => {
                    return <i
                        onClick={this.btn_info.bind(this, index)}
                        className={index === this.state.index_now ? 'active' : ""}
                        key={item.h_id}>
                        {item.h_name}
                    </i>
                })
            }
        </React.Fragment>
    }

    render() {

        return (
            <Router>
                <div id='JDdetails'>
                    <DLhead />
                    <section className="box_good_head">
                        <div className="good_pic">
                            <img src={'https://www.jiedaijia.cn/' + this.state.goodsInfo.logoUrl} alt="" />
                        </div>
                        <div className="good_names">
                            <p className="loansName ">
                                <span>{this.state.goodsInfo.name}</span>
                                <img src="https://www.jiedaijia.cn/h5/publicImg/hot.png" alt="" />
                            </p>
                            <p className="loansType">
                                {/* {this.forTips(this.state.goodsInfo.tagList)} */}
                                <i>{this.state.goodsInfo.tagList ? this.state.goodsInfo.tagList[0] : ''}</i>
                                <i>{this.state.goodsInfo.tagList ? this.state.goodsInfo.tagList[1] : ''}</i>
                                <i>{this.state.goodsInfo.tagList ? this.state.goodsInfo.tagList[2] : ''}</i>
                            </p>
                            <p className="stars">
                                <span>成功率：</span>
                                <i><img src="https://www.jiedaijia.cn/h5/publicImg/star.png" alt="" /></i>
                                <i><img src="https://www.jiedaijia.cn/h5/publicImg/star.png" alt="" /></i>
                                <i><img src="https://www.jiedaijia.cn/h5/publicImg/star.png" alt="" /></i>
                                <i><img src="https://www.jiedaijia.cn/h5/publicImg/star.png" alt="" /></i>
                                <i><img src="https://www.jiedaijia.cn/h5/publicImg/half-star.png" alt="" /></i>
                                <em>{this.state.goodsInfo.hasLoanNum}人已经贷款</em>
                            </p>
                        </div>
                    </section>

                    <section className="good_calc">
                        <div className="calc_1">
                            <div className="calc_1_lt">
                                <p className="money">
                                    <input type="text" placeholder="2000" />
                                    <span>元</span>
                                </p>
                                <p className="section_money">
                                    额度范围：
                                    <i>{this.state.goodsInfo.loanLimitLow}-{this.state.goodsInfo.loanLimitHigh}</i>
                                </p>
                            </div>
                            <div className="calc_1_rt">
                                <p className="time">
                                    <input type="text" placeholder="15" />
                                    <span>日</span>
                                </p>
                                <p className="section_time">
                                    期限范围15-180日
                                </p>
                            </div>
                        </div>
                        <div className="calc_2">
                            <div className="calc_2_lt calc_2_">
                                <p className="calc_num">{this.state.goodsInfo.loanAllRate}/{this.state.goodsInfo.loanRateUnit}</p>
                                <p className="calc_name">参考利率</p>
                            </div>
                            <div className="calc_2_rt calc_2_">
                                <p className="calc_num">{this.state.goodsInfo.loanSpeed}{this.state.goodsInfo.loanSpeedUnit}</p>
                                <p className="calc_name">最快放款时间</p>
                            </div>
                        </div>
                        <div className="calc_3">
                            <span>{this.state.goodsInfo.payBackType}</span>
                            <img src="https://www.jiedaijia.cn/h5/publicImg/right-b.png" alt="" />
                        </div>
                    </section>
                    <section className="tabs_head">
                        {this.for_tabs_head(this.state.goods_info_tab)}
                    </section>
                    <section
                        style={{ display: 0 === this.state.index_now ? 'block' : 'none' }}
                        className="good_words">
                        <div className="require_head good_head">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/details_icon_apply.png" alt="" />
                            <span>申请条件</span>
                        </div>
                        <div className="require_word">
                            <p>{this.state.goodsInfo.loanRequire ? this.state.goodsInfo.loanRequire.split('n')[0].slice(0, -3) : ''}</p>
                            <p>{this.state.goodsInfo.loanRequire ? this.state.goodsInfo.loanRequire.split('n')[1].slice(0, -3) : ''}</p>
                            <p>{this.state.goodsInfo.loanRequire ? this.state.goodsInfo.loanRequire.split('n')[2] : ''}</p>
                        </div>
                        <div className="intrduce_head good_head">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/details_icon_product.png" alt="" />
                            <span>产品介绍</span>
                        </div>
                        <div className="intrduce_word">
                            <p>
                                <span>利率:</span>
                                <em>{this.state.goodsInfo.loanAllRate}/{this.state.goodsInfo.loanRateUnit}</em>
                            </p>
                            <p>
                                <span>平均额度：</span>
                                <em>{this.state.goodsInfo.loanLimitDefault}</em>
                            </p>
                            <p>
                                <span>审核时间：</span>
                                <em>{this.state.goodsInfo.loanSpeed}{this.state.goodsInfo.loanSpeedUnit}</em>
                            </p>
                            <p>
                                <span>放款时间：</span>
                                <em>{this.state.goodsInfo.loanSpeed}{this.state.goodsInfo.loanSpeedUnit}</em>
                            </p>
                        </div>
                        <div className="company_head good_head">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/details_icon_product.png" alt="" />
                            <span>机构介绍</span>
                        </div>
                        <div className="company_word">
                            <p>一款走心的借款神器，致力于为中短期内急需现金的用户提供无抵押、无担保、审核快！准！稳！</p>
                        </div>
                    </section>
                    <section
                        style={{ display: 1 === this.state.index_now ? 'block' : 'none' }}
                        className="good_commits">
                        <span>暂时还没有评论</span>
                    </section>
                    <section className="btn_box">
                        <p className="btn_apply">立即申请</p>
                        <p className="btn_download">下载APP</p>
                    </section>
                </div>
            </Router>
        )
    }
}

// export default MineHead
// export default withRouter(HLmore)
export default withRouter(connect((state) => {
    return state
})(JDdetails))