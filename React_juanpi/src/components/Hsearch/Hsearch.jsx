import React from 'react'
import './Hsearch.scss'
import { HashRouter as Router, Route, withRouter, NavLink } from "react-router-dom";

class Hsearch extends React.Component {
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
            <div id='Hsearch_box'>
                <div className='inner_box'>
                    <NavLink className='Hsearch_lt' to="/Jsearch">
                        <span>
                            <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee" alt=""/>
                        </span>
                        <span></span>
                        <span>搜索</span>
                    </NavLink>
                    <NavLink className='Hsearch_rt' to="/Jclassify">
                        <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt="" />
                    </NavLink>
                </div>
            </div>
        )
    }
}

// export default Hsearch
export default withRouter(Hsearch)
