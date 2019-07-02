import React from 'react'
import './HLhead.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../../store/Store.jsx';

class HLhead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city_name_now:''
            // anmin_on: false
            // title: this.props.location.state.day
        }
        this.state.city_name_now = store.getState().city_name
        // console.log(store.getState().show_nav);
        // store.dispatch({
        //     type: 'nav_is_close'
        // })
        // console.log(store.getState().show_nav)
    }

    toCity() {
        console.log('1212');
        // this.props.history.goback();
        this.props.history.push('/JDcitys');
        // store.dispatch({
        //     type: 'nav_is_show'
        // })
    }

    toSerach() {
        this.props.history.push('/JDsearch');
    }

    render() {

        return (
            <Router>
                <div id='HLhead'>
                    <div 
                    onClick={this.toCity.bind(this)}
                    className='loaction_box'>
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-dingwei.png" alt=""/>
                        <span>{this.state.city_name_now}</span>
                    </div>
                    <div 
                    onClick={this.toSerach.bind(this)}
                    className='search_box'>
                        <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-soushuo.png" alt=""/>
                        <span>根据产品或关键词搜索</span>
                    </div>
                </div>
            </Router>
        )
    }
}

// export default MineHead
// export default withRouter(HLhead)
// export default withRouter(HLhead)
export default withRouter(connect((state) => {
    return state
})(HLhead))