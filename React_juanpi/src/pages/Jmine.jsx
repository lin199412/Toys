import React from 'react'
import MineHead from '../components/MineHead/MineHead.jsx'
import MineBody from '../components/MineBody/MineBody.jsx'

class Jmine extends React.Component{
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
            <section>
                <MineHead/>
                <MineBody/>
            </section>
        )
    }
}

export default Jmine