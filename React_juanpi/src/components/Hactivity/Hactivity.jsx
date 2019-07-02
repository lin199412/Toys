import React from 'react'
import './Hactivity.scss'

class Hactivity extends React.Component {
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
            <div id='Hactivity_box'>
                <div className='Hactivity_1'>
                    <div className='Hactivity_1_lt'>
                        <a className='lt_img1' href="">
                            <img src="https://s2.juancdn.com/jas/190620/0/a/5d0adc9e33b0897307218c21_540x656.gif" alt=""/>
                        </a>
                    </div>
                    <div className='Hactivity_1_rt'>
                        <a className='rt_img1' href="">
                            <img src="https://goods5.juancdn.com/jas/190620/8/a/5d0adcc733b0896ecc396f3f_540x328.png?iopcmd=convert&Q=85&dst=png" alt=""/>
                        </a>
                        <a className='rt_img2' href="">
                            <img src="https://goods1.juancdn.com/jas/190620/1/e/5d0adce733b08974bc06b5b1_540x328.png?iopcmd=convert&Q=85&dst=png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className='Hactivity_2'>
                    <a href="">
                        <img src="https://s2.juancdn.com/jas/190621/4/c/5d0c32bab6f8ea6fec5e96b7_1080x312.gif" alt=""/>
                    </a>
                </div>
                <div className='Hactivity_3'>
                    <a href="">
                        <img src="https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png" alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Hactivity
