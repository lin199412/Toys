import React from 'react'
import './DownloadApp.scss'

class DownloadApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // title: this.props.location.state.day
        }
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }
    render(){
        
        return(
            <div id='Download_box'>
                <img src="https://jp.juancdn.com/jpwebapp/images/go_load_new.png" alt=""/>
            </div>
        )
    }
}

export default DownloadApp