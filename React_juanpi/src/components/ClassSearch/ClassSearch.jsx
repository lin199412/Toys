import React from 'react'
import './ClassSearch.scss'
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

class ClassSearch extends React.Component {
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
            <div id='ClassSearch_box'>
                <div className='inner_box'>
                    <NavLink to="/">
                        <input type="text" placeholder='搜索商品'/>
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee" alt="" />
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default ClassSearch
