import React from 'react'
import './JLogin.scss'
import DownloadApp from '../components/DownloadApp/DownloadApp.jsx'
import LoginHead from '../components/LoginHead/LoginHead.jsx'
import LoginTabs from '../components/LoginTabs/LoginTabs.jsx'
import LoginThird from '../components/LoginThird/LoginThird.jsx'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../components/Store/Store.jsx';

class JLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // title: this.props.location.state.day
        }
        console.log(store);
        // store.dispatch({
        //     type: 'nav_close'
        // })
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }
    render(){
        
        return(
            <section id='login_page'>
                <DownloadApp/>
                <LoginHead/>
                <LoginTabs/>
                <LoginThird/>
            </section>
        )
    }
}

// export default JLogin
export default withRouter(connect((state)=>{
    // console.log(state)
    return state
})(JLogin))