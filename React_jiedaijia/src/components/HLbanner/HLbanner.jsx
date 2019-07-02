import React from 'react'
import './HLbanner.scss'
import '../../assets/swiper.min.css'
import Swiper from 'swiper'

class HLbanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
        }
    }

    componentDidMount() {
        var mySwiper1 = new Swiper('#HLbanner .swiper-container', {
            loop: true, // 循环模式选项
            // autoplay: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

    render() {
        return (
            <section id='HLbanner'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://www.jiedaijia.cn/resource/product/2019-05-10/155747530223006.png" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://www.jiedaijia.cn/resource/banner/mj702180.png" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://www.jiedaijia.cn/resource/product/2019-05-08/155727932367646.png" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://www.jiedaijia.cn/resource/product/2018-11-09/154175770555683.jpg" alt="" />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        )
    }
}

// export default MineHead
// export default withRouter(HLbanner)
export default HLbanner