import React from 'react'
import './LoginThird.scss'


class LoginThird extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
            // title: this.props.location.state.day
        }
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }

    render() {

        return (
            <div id='third_box'>
                <h2>第三方账号快速登录</h2>
                <div className="third_icons">
                    <a href="">
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee" alt=""/>
                    </a>
                    <a href="">
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee" alt=""/>
                    </a>
                    <a href="">
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee" alt=""/>
                    </a>
                </div>
                <div className="line"></div>
                <ul className="third_others">
                    <li>
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" alt=""/>
                        全场包邮
                    </li>
                    <li>
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/search.png?597c2e82-1&sv=449ce9ee" alt=""/>
                        100%人工质检
                    </li>
                    <li>
                        <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/seven.png?902d32d9-1&sv=449ce9ee" alt=""/>
                        7天放心退
                    </li>
                </ul>
            </div>
        )
    }
}

export default LoginThird
