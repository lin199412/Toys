import React from 'react';
import './GLpart.scss'
// import { BrowserRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
// import { connect } from 'react-redux'
// import store from '../store/Store.jsx';

class GLpart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            part_list: [
                {
                    p_id: '1',
                    p_name: '贷款综合讨论',
                    p_update: '44',
                    p_imgurl: 'https://www.jiedaijia.cn/resource/communityImg/group/dkzhtl.png'
                }, {
                    p_id: '2',
                    p_name: '小额极速讨论',
                    p_update: '12',
                    p_imgurl: 'https://www.jiedaijia.cn/resource/communityImg/group/xejstl.png'
                }, {
                    p_id: '3',
                    p_name: '新口子研究生',
                    p_update: '9',
                    p_imgurl: 'https://www.jiedaijia.cn/resource/communityImg/group/xkzyjs.png'
                }, {
                    p_id: '4',
                    p_name: '贷款口子',
                    p_update: '25',
                    p_imgurl: 'https://www.jiedaijia.cn/resource/communityImg/group/hhkz.png'
                },
            ]
        }
        this.forPartList = this.forPartList.bind(this);
    }

    forPartList(arr) {
        return <ul className='c_part_body'>
            {
                arr.map((item) => {
                    return <li
                        key={item.p_id}>
                        <img
                            className="part_img"
                            src={item.p_imgurl} alt="" />
                        <p className="part_name">{item.p_name}</p>
                        <p className="part_update">{item.p_update}更新</p>
                    </li>
                })
            }
        </ul>
    }

    render() {
        return (
            <div id="c_part_box">
                <div className="c_part_head">
                    <img className="icon_lt" 
                    src="https://www.jiedaijia.cn/h5/publicImg/faxian-icon.png" alt=""/>
                    <span>讨论区</span>
                    <img className="icon_rt"
                    src="https://www.jiedaijia.cn/h5/publicImg/gogogo.png" alt=""/>
                    <em>更多</em>
                </div>
                {this.forPartList(this.state.part_list)}
            </div>
        )
    }
}

export default GLpart
// export default withRouter(connect((state) => {
//     return state
// })(JDgroup))