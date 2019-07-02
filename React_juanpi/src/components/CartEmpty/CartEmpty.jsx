import React from 'react'
import './CartEmpty.scss'

class CartEmpty extends React.Component{
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
            <div id='cart_empty'>
                <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt=""/>
                <span>看到喜欢的就带回家吧</span>
                <a href="">今日推荐</a>
            </div>
        )
    }
}

export default CartEmpty