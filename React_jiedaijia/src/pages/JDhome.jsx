import React from 'react';
import HLhead from '../components/HLhead/HLhead.jsx'
import HLbanner from '../components/HLbanner/HLbanner.jsx'
import HLicons from '../components/HLicons/HLicons.jsx'
import HLbannerWords from '../components/HLbannerWords/HLbannerWords.jsx'
import HLmore from '../components/HLmore/HLmore.jsx'
import HLgoodsList from '../components/HLgoodsList/HLgoodsList.jsx'
import { connect } from 'react-redux'
import store from '../store/Store.jsx';
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";

class JDhome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // title: this.props.location.state.day
        }
        store.dispatch({
            type: 'nav_is_show'
        })
        // console.log(store);
        // console.log(this.props.location.state.day)
    }
    render(){
        
        return(
            <section id='home_page'>
                <HLhead/>
                <HLbanner/>
                <HLicons/>
                <HLbannerWords/>
                <HLmore/>
                <HLgoodsList/>
            </section>
        )
    }
}

// export default JDhome
export default withRouter(connect((state) => {
    return state
})(JDhome))