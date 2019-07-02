import React from 'react'
import './HiconBox.scss'

class HiconBox extends React.Component {
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
            <div id='HiconBox_box'>
                <div className='icons_box'>
                    <a href="">
                        <img src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png" alt=""/>
                    </a>
                </div>
                <div className='icons_box'>
                    <a href="">
                        <img src="https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png" alt=""/>
                    </a>
                </div>
                <div className='icons_box'>
                    <a href="">
                        <img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png" alt=""/>
                    </a>
                </div>
                <div className='icons_box'>
                    <a href="">
                        <img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png" alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}

export default HiconBox
