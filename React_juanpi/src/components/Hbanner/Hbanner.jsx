import React from 'react'
import './Hbanner.scss'
// import Swiper from '../../assets/swiper.js'
import '../../assets/swiper.min.css'
import Swiper from 'swiper'


class Hbanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // title: this.props.location.state.day
        }
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }

    componentDidMount() {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })        
    }

    render() {
        return (
            <div id='Hbanner_box'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://goods8.juancdn.com/jas/190621/e/6/5d0c513ab6f8ea76110b1b9e_1080x418.png" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://goods3.juancdn.com/jas/190621/4/9/5d0caeb2b6f8ea49f330605e_1080x418.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://goods5.juancdn.com/jas/190422/8/2/5cbd6608b6f8ea54ff237631_1080x418.png" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}

export default Hbanner
