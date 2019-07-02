import React from 'react'
import DownloadApp from '../components/DownloadApp/DownloadApp.jsx'
import Hsearch from '../components/Hsearch/Hsearch.jsx'
import Hbanner from '../components/Hbanner/Hbanner.jsx'
import HiconBox from '../components/HiconBox/HiconBox.jsx'
import Hactivity from '../components/Hactivity/Hactivity.jsx'
import Htabs from '../components/Htabs/Htabs.jsx'
import { connect } from 'react-redux'
import store from '../components/Store/Store.jsx';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

class Jhome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // title: this.props.location.state.day
        }
        store.dispatch({
            type: 'nav_is_show'
        })
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }

    render(){
        
        return(
            <div>
                <DownloadApp/>
                <Hsearch/>
                <Hbanner/>
                <HiconBox/>
                <Hactivity/>
                <Htabs/>
            </div>
        )
    }
}

// export default Jhome
export default connect((state)=>{
    console.log(state)
    return state
})(Jhome)