import React from "react";
import { HashRouter as Router, Route, withRouter,NavLink } from "react-router-dom";
import Jhome from './Jhome.jsx'
import Jclassify from './Jclassify.jsx'
import Jcart from './Jcart.jsx'
import Jmine from './Jmine.jsx'
import Jdetails from './Jdetails.jsx'
import JLogin from './JLogin.jsx'
import Jsearch from './Jsearch.jsx'
import { connect } from 'react-redux'
import store from '../components/Store/Store.jsx';

import './Jrouters.scss'

class AppRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
            index_now : 0,
            nav_on: true,
            navs: [
                {
                    n_id: 'n1',
                    n_name: '首页',
                    n_url: '/',
                    n_img: 'https://goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png',
                    n_img_a: 'http://s2.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png'
                }, {
                    n_id: 'n2',
                    n_name: '分类',
                    n_url: '/Jclassify',
                    n_img: 'http://s2.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png',
                    n_img_a: 'https://goods7.juancdn.com/bao/171127/c/3/5a1bcef5a9fcf842f140cb1d_72x72.png'
                }, {
                    n_id: 'n3',
                    n_name: '购物车',
                    n_url: '/Jcart',
                    n_img: 'http://s2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png',
                    n_img_a: 'https://goods4.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png'
                }, {
                    n_id: 'n4',
                    n_name: '我的卷皮',
                    n_url: '/Jmine',
                    n_img: 'http://s2.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png',
                    n_img_a: 'https://goods1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png'
                },
            ]
        }
        console.log(store);
        console.log(store.getState().show_nav);
        // store.dispatch({
        //     type: 'nav_is_show'
        // })
        store.subscribe(this.handleStoreChange.bind(this));
    }

    handleStoreChange() {
        this.state.nav_on = store.getState().show_nav;
        this.setState({
            nav_on: this.state.nav_on
        })
    }

    tabNav(i,url) {
        this.setState(()=>{
            return{
                index_now : i
            }
        });
        this.props.history.push(`${url}`);
        console.log(i);
    }

    forNavList(arr) {
        return <ul>
            {
                arr.map((item, index) => {
                    return <li
                        key={item.n_id}
                        onClick={this.tabNav.bind(this, index,item.n_url)}>
                        <em className={(item.n_url === this.props.location.pathname) ? 'nav-bot-active' : ''}>
                            <img src={(item.n_url === this.props.location.pathname)?item.n_img_a:item.n_img} alt=""/>
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
                            <NavLink activeClassName='nav-bot-active' className='home' to="/" exact >
                                <i></i>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='nav-bot-active' className='class' to="/Jclassify">
                                <i></i>
                                <span>分类</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='nav-bot-active' className='cart' to="/Jcart">
                                <i></i>
                                <span>购物车</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="nav-bot-active" className='mine' to="/Jmine">
                                <i></i>
                                <span>我的卷皮</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav> */}

                <nav style={{ display: (this.state.nav_on) ? "block" : "none" }}>
                    {this.forNavList(this.state.navs)}
                </nav>

                <Route path="/" exact component={Jhome} />
                <Route path="/Jclassify" component={Jclassify} />
                <Route path="/Jcart" component={Jcart} />
                <Route path="/Jmine" component={Jmine} />
                <Route path="/Jdetails" component={Jdetails} />
                <Route path="/JLogin" component={JLogin} />
                <Route path="/Jsearch" component={Jsearch} />
            </div>
        );
    }

}

export default withRouter(connect((state) => {
    // console.log(state)
    return state
})(AppRouter))