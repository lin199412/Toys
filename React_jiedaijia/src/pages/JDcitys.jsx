import React from 'react';
import './JDcitys.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../store/Store.jsx';
import cityList from '../api/cityList.json'

class JDcitys extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            letterList: cityList.data.classify_nav,
            all_city_data: cityList.data.city_nav,
            keywords:'',
            hotCity: [
                {
                    c_id: 'c1',
                    c_name: '北京市'
                }, {
                    c_id: 'c2',
                    c_name: '上海市'
                }, {
                    c_id: 'c3',
                    c_name: '广州市'
                }, {
                    c_id: 'c4',
                    c_name: '深圳市'
                }, {
                    c_id: 'c5',
                    c_name: '杭州市'
                }, {
                    c_id: 'c6',
                    c_name: '南京市'
                }, {
                    c_id: 'c7',
                    c_name: '重庆市'
                }, {
                    c_id: 'c8',
                    c_name: '武汉市'
                }, {
                    c_id: 'c9',
                    c_name: '天津市'
                },
            ]
        }
        store.dispatch({
            type: 'nav_is_close'
        });
        console.log(this.state.all_city_data);
    }

    toBack() {
        console.log('1212');
        this.props.history.go(-1);
    }

    forLetterList(arr) {
        return <ul id="letter_list">
            {
                arr.map((item, index) => {
                    return <li key={item.idx}>
                        {item.idx}
                    </li>
                })
            }
        </ul>
    }

    forHotCity(arr) {
        return <ul id="hot_city_list">
            {
                arr.map((item, index) => {
                    return <li key={item.c_id} onClick={this.checkCity.bind(this,item.c_name)}>
                        {item.c_name}
                    </li>
                })
            }
        </ul>
    }

    forAllCity(arr) {
        return <ul id="all_city_list">
        {
            arr.map((item, index) => {
                return <li key={item.idx}>
                {
                <div className="letter_city_list">
                    <span>{item.idx}</span>
                    {
                    item.cities.map((item, index) => {
                        return <p key={item.city_id} onClick={this.checkCity.bind(this,item.city_name)}>
                            {item.city_name}
                            {/* className={(item.city_name.indexOf(this.state.keywords)>-1 && this.state.keywords)?'active':''} key={item.city_id} */}
                        </p>
                    })
                }
            </div>
        }
                </li>
            })
        }
    </ul>
    }

    forAllCity2(arr) {
        return <ul id="all_city_list">
        {
            arr.map((item, index) => {
                return <li key={item.idx}>
                {
                <div className="letter_city_list">
                    {
                    item.cities.map((item, index) => {
                        return <p className={(item.city_name.indexOf(this.state.keywords)>-1)?'':'disappear'} key={item.city_id} onClick={this.checkCity.bind(this,item.city_name)}>
                            {item.city_name}
                            {/* className={(item.city_name.indexOf(this.state.keywords)>-1 && this.state.keywords)?'active':''} key={item.city_id} */}
                        </p>
                    })
                }
            </div>
        }
                </li>
            })
        }
    </ul>
    }

    searchCity(e){
        console.log(e.target.value);
        let input_city = e.target.value;
        this.setState(()=>{
            return {
                keywords :input_city
            }
        })
    }

    checkCity(name){
        store.dispatch({
            type: 'city_name_change',
            name_now: name
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <section id="city_page">
                <div id="city_head">
                    <div className="head_1">
                        <img
                            className="btn_back"
                            onClick={this.toBack.bind(this)}
                            src="https://www.jiedaijia.cn/h5/publicImg/left-color.png" alt="" />
                        <p className="title">选择地区</p>
                    </div>
                    <div className="head_2">
                        <div className="search_box">
                            <img
                                className="icon_search"
                                src="https://www.jiedaijia.cn/h5/publicImg/search-cc.png" alt="" />
                            <input
                                onChange={this.searchCity.bind(this)}
                                className="input_search"
                                type="text" placeholder="输入城市名" />
                        </div>
                    </div>
                </div>
                {this.forLetterList(this.state.letterList)}
                <div id="cities_big_box">
                    <div 
                    style={{display:this.state.keywords?'none':'block'}}
                    className="city_now">
                        <em>定位城市:</em>
                        <p>
                            <img src="https://www.jiedaijia.cn/h5/publicImg/loaction.png" alt="" />
                            <span>广州市</span>
                        </p>
                    </div>
                    <div 
                    style={{display:this.state.keywords?'none':'block'}}
                    className="city_hot">
                        <em>热门城市:</em>
                        {this.forHotCity(this.state.hotCity)}
                    </div>
                    <div 
                    style={{display:this.state.keywords?'none':'block'}}
                    className="city_all">
                        {this.forAllCity(this.state.all_city_data)}
                    </div>
                    <div 
                    style={{display:this.state.keywords?'block':'none'}}
                    className="city_all">
                        {this.forAllCity2(this.state.all_city_data)}
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(connect((state) => {
    // console.log(state)
    return state
})(JDcitys))