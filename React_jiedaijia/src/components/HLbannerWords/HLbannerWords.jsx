import React from 'react'
import './HLbannerWords.scss'
import '../../assets/swiper.min.css'
import Swiper from 'swiper'
import boardList from '../../api/boardList.json'


class HLbannerWords extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
            boardList_o : boardList.data.broadcastList
        }
    }

    componentDidMount() {
        console.log(this.state.boardList_o);
        var mySwiper2 = new Swiper('#HLbannerWords .swiper-container', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            // pagination: {
            //     el: '.swiper-pagination',
            // }
        })
    }

    // 渲染轮播图的内容
    forBoardList(arr) {
        return <React.Fragment>
        {
            arr.map((item) => {
                return <div className="swiper-slide" key={item.id}>
                <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-laba.png" alt="" />
                <span>
                    {item.content}
                </span>
            </div>
            })
        }
    </React.Fragment>
    }

    render() {
        return (
            <section id='HLbannerWords'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.forBoardList(this.state.boardList_o)}
                        {/* <div className="swiper-slide">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-laba.png" alt="" />
                            <span>
                                温州的冯先生刚刚在 
                                <em>小赢卡贷</em>
                                 申请的15000元成功放款。
                            </span>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-laba.png" alt="" />
                            <span>
                                江苏的陈先生刚刚在 
                                <em>我来贷</em>
                                 申请的10000元已成功放款。
                            </span>
                        </div> */}
                    </div>
                    {/* <div className="swiper-pagination"></div> */}
                </div>
            </section>
        )
    }
}

// export default MineHead
// export default withRouter(HLbannerWords)
export default HLbannerWords