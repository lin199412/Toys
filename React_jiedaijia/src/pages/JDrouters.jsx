import React from "react";
import { HashRouter as Router, Route, withRouter, NavLink } from "react-router-dom";
import JDhome from './JDhome.jsx'
import JDloan from './JDloan.jsx'
import JDgroup from './JDgroup.jsx'
import JDmine from './JDmine.jsx'
import JDcitys from './JDcitys.jsx'
import JDsearch from './JDsearch.jsx'
import JDdetails from './JDdetails.jsx'
import JDlogin from './JDlogin.jsx'

import { connect } from 'react-redux'
import store from '../store/Store.jsx';

import './JDrouters.scss'

class AppRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anmin_on: false,
            // title: this.props.location.state.day
            // index_now: 0,
            nav_on: true,
            navs: [
                {
                    n_id: 'n1',
                    n_name: '首页',
                    n_url: '/',
                    n_img: 'https://www.jiedaijia.cn/h5/publicImg/home-w.png',
                    n_img_a: 'https://www.jiedaijia.cn/h5/publicImg/home-b.png'
                }, {
                    n_id: 'n2',
                    n_name: '贷款',
                    n_url: '/JDloan',
                    n_img: 'https://www.jiedaijia.cn/h5/publicImg/loans-w.png',
                    n_img_a: 'https://www.jiedaijia.cn/h5/publicImg/loans-b.png'
                }, {
                    n_id: 'n3',
                    n_name: '社区',
                    n_url: '/JDgroup',
                    n_img: 'https://www.jiedaijia.cn/h5/publicImg/jiedaiquan-w.png',
                    n_img_a: 'https://www.jiedaijia.cn/h5/publicImg/jiedaiquan-b.png'
                }, {
                    n_id: 'n4',
                    n_name: '我的',
                    n_url: '/JDmine',
                    n_img: 'https://www.jiedaijia.cn/h5/publicImg/me-w.png',
                    n_img_a: 'https://www.jiedaijia.cn/h5/publicImg/me-b.png'
                },
            ]
        }
        // console.log(store);
        // console.log(store.getState().show_nav);
        // store.dispatch({
        //     type: 'nav_is_show'
        // })
        store.subscribe(this.handleStoreChange.bind(this)); 
    }

    handleStoreChange() {
        this.state.nav_on = store.getState().show_nav;
        this.setState({
            nav_on : this.state.nav_on
        })
    }
    tabNav(i, url,im) {
        this.setState(() => {
            return {
                index_now: i
            }
        });
        this.props.history.push(`${url}`);
        console.log(i);
        // console.log(this.props.location.pathname);
    }

    forNavList(arr) {
        return <ul>
            {
                arr.map((item, index) => {
                    return <li
                        key={item.n_id}
                        onClick={this.tabNav.bind(this, index, item.n_url,item)}>
                        <em className={(item.n_url === this.props.location.pathname) ? 'nav-bot-active' : ''}>
                            <img src={(item.n_url === this.props.location.pathname) ? item.n_img_a : item.n_img} alt="" />
                            <span>{item.n_name}</span>
                        </em>
                    </li>
                })
            }
        </ul>
    }

    render() {
        return (

            <div id='nav_bottom'>
                {/* <nav style={{ display: (this.state.nav_on) ? "block" : "none" }}>
                        <ul>
                            <li>
                                <NavLink className='home' to="/" exact activeClassName="nav-bot-active">
                                    <i></i>
                                    <span>首页</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='loan' to="/JDloan" activeClassName="nav-bot-active">
                                    <i></i>
                                    <span>贷款</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='group' to="/JDgroup" activeClassName="nav-bot-active">
                                    <i></i>
                                    <span>社区</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='mine' to="/JDmine" activeClassName="nav-bot-active">
                                    <i></i>
                                    <span>我的</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav> */}

                <nav style={{ display: (this.state.nav_on) ? "block" : "none" }}>
                    {this.forNavList(this.state.navs)}
                </nav>

                <Route path="/" exact component={JDhome} />
                <Route path="/JDloan" component={JDloan} />
                <Route path="/JDgroup" component={JDgroup} />
                <Route path="/JDmine" component={JDmine} />
                <Route path="/JDcitys" component={JDcitys} />
                <Route path="/JDsearch" component={JDsearch} />
                <Route path="/JDdetails" component={JDdetails} />
                <Route path="/JDlogin" component={JDlogin} />

                {/* <Route path="/Jdetails" component={Jdetails} />
                    <Route path="/JLogin" component={JLogin} />
                    <Route path="/Jsearch" component={Jsearch} /> */}
            </div>

        );
    }

}

export default withRouter(connect((state) => {
    // console.log(state)
    return state
})(AppRouter))