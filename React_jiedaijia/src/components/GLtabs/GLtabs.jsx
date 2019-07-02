import React from 'react';
import './GLtabs.scss'
// import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
// import { connect } from 'react-redux'
// import store from '../store/Store.jsx';
import commitList1 from '../../api/commitList1.json'
import commitList2 from '../../api/commitList2.json'

class GLtabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            comment_tab: [
                {
                    c_id: '1',
                    c_name: '推荐',
                    c_imgurl: 'https://www.jiedaijia.cn/h5/publicImg/tuijian-icon.png'
                }, {
                    c_id: '2',
                    c_name: '热门',
                    c_imgurl: 'https://www.jiedaijia.cn/h5/publicImg/remen-icon.png'

                }
            ],
            index_now: 0,
            commit_list_1: [],
            commit_list_2: []
        }
    }

    // 渲染，选项卡头部
    for_tabs_head(arr) {
        return <React.Fragment>
            {
                arr.map((item, index) => {
                    return <span
                        onClick={this.btn_info.bind(this, index)}
                        className={index === this.state.index_now ? 'active' : ""}
                        key={item.c_id}>
                        <img src={item.c_imgurl} alt="" />
                        <em>
                            {item.c_name}
                        </em>
                    </span>
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

    // 获取评论数据
    getDataCommit() {
        let data1 = commitList1;
        let data2 = commitList2;
        // console.log(data1.data.pageDate.list);
        let commits1 = [...data1.data.pageDate.list];
        let commits2 = [...data2.data.pageDate.list];
        // console.log(commits1);
        this.setState(()=>{
            return {
                commit_list_1: commits1,
                commit_list_2: commits2
            }
        })
    }

    componentDidMount() {
        this.getDataCommit();
        // console.log(this.state.commit_list_1.creater);
    }

    // 渲染评论
    for_tabs_body(arr) {
        return <React.Fragment>
            {
                arr.map((item, index) => {
                    return <li
                        key={item.id}>
                        <div className="admin_info clearfix">
                            <div className="admin_pic">
                                <img src="https://www.jiedaijia.cn/resource/app/defaultImg.png" alt=""/>
                                {/* <img src={'https://www.jiedaijia.cn/' + item.creater} alt="" />  */}
                            </div>
                            
                            <div className="admin_text">
                                <p className="admin_name">{item.creater.name}</p>
                                <p className="record_time">{item.createTime}</p>
                            </div>
                            <div className="btn_comment">
                                <img src="https://www.jiedaijia.cn/h5/publicImg/more_dian.png" alt=""/>
                            </div>
                        </div>
                        <div className="admin_comment">{item.textContentShort}</div>
                        <div className="other_info">
                            <span>{item.group.name}</span>
                            <em>
                                <img src="https://www.jiedaijia.cn/h5/publicImg/liulan-icon.png" alt=""/>
                                <i>{item.readedCount}</i>
                            </em>
                        </div>
                    </li>
                })
            }
        </React.Fragment>
    }

    render() {
        return (
            <section id="GLtabs">
                <div className="tabs_head">
                    {this.for_tabs_head(this.state.comment_tab)}
                </div>
                <ul
                    style={{ display: 0 === this.state.index_now ? 'block' : 'none' }}
                    className="tabs_cont_1 tabs_cont_">
                    {this.for_tabs_body(this.state.commit_list_1)}
                </ul>
                <ul
                    style={{ display: 1 === this.state.index_now ? 'block' : 'none' }}
                    className="tabs_cont_2 tabs_cont_">
                    {this.for_tabs_body(this.state.commit_list_2)}
                </ul>
            </section>
        )
    }
}

// export default withRouter(connect((state) => {
//     return state
// })(GLtabs))
export default GLtabs