import React from 'react';
import MLhead from '../components/MLhead/MLhead.jsx'
import MLbody from '../components/MLbody/MLbody.jsx'

class JDmine extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // title: this.props.location.state.day
        }
        // console.log(store);
        // console.log(this.props.location.state.day)
    }
    render(){
        
        return(
            <section id='mine_page'>
                <MLhead/>
                <MLbody/>
            </section>
        )
    }
}

export default JDmine
