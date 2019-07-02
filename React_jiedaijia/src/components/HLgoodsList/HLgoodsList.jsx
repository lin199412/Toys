import React from 'react'
import './HLgoodsList.scss'
import { HashRouter as Router, Route, NavLink, withRouter } from "react-router-dom";
// import { connect } from 'react-redux'
// import store from '../Store/Store.jsx';
// import axios from 'axios'
// import '../../setupProxy'
import loanList1 from '../../api/loanList1.json'
import loanList2 from '../../api/loanList2.json'
import loanList3 from '../../api/loanList3.json'

class HLgoodsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // anmin_on: false
            // title: this.props.location.state.day
            // axiosAddress: [
            //     1561442284787,
            //     1561442990634,
            //     1561454372709
            // ],
            home_good_list: []
        }
    }
    // async getDataHome() {
    //     let url =
    //         '/homelist' + this.state.axiosAddress[1]
    //     const home_list = await axios.get(url);
    //     console.log(home_list);
    //     let home_list_data = home_list.data.data.pageDate.list;
    //     console.log(home_list_data);
    //     this.setState({
    //         home_good_list: home_list_data
    //     })
    //     console.log(this.state.home_good_list);
    // }
    getDataHome() {
        // console.log(loanList1);
        let loan_list_data1 = loanList1.data.pageDate.list;
        // console.log(loan_list_data1)
        let loan_list_data2 = loanList2.data.pageDate.list;
        let loan_list_data3 = loanList3.data.pageDate.list;

        let loan_list_data = [...loan_list_data1, ...loan_list_data2, ...loan_list_data3];
        this.setState({
            home_good_list: loan_list_data1,
            // loan_good_list_o: loan_list_data
        })
    }

    componentDidMount() {
        this.getDataHome();
    }

    toDetalis(id) {
        console.log(121);
        this.props.history.push({pathname:'/JDdetails', state:{ gid: id }});
    }

    forGoodsList(arr) {
        return <ul className='goods_box'>
            {
                arr.map((item) => {
                    return <li
                        key={item.id}>
                        {/* <NavLink to={{ pathname: '/JDdetails', state: { gid: item.id } }}> */}
                        <div className="goods"
                        onClick={this.toDetalis.bind(this,item.id)}>
                            <div className='box_img'>
                                <img src={'https://www.jiedaijia.cn/' + item.logoUrl} alt="" />
                            </div>
                            <div className='box_text'>
                                <p className="loansName ">{item.name}</p>
                                <p className="loansType">
                                    <i>{item.tagList[0] ? item.tagList[0] : ''}</i>
                                    <i>{item.tagList[1] ? item.tagList[1] : ''}</i>
                                    <i>{item.tagList[2] ? item.tagList[2] : ''}</i>
                                </p>
                                <p className="loansMassage">
                                    参考利率：
                                    <i>{item.loanRate}/{item.loanRateUnit}</i>
                                    额度：
                                    <i>{item.loanLimitLow}-{item.loanLimitHigh}</i>
                                </p>
                            </div>
                            <div className='box_icon'>
                                <img src="https://www.jiedaijia.cn/h5/publicImg/shouye-jiantou-hui.png" alt="" />
                            </div>
                        </div>
                        {/* </NavLink> */}
                    </li>
                })
            }
        </ul>
    }

    render() {

        return (
            <Router>
                <div id='HLgoodsList'>
                    {this.forGoodsList(this.state.home_good_list)}
                </div>
            </Router>
        )
    }
}

// export default MineHead
// export default withRouter(HLgoodsList)
export default withRouter(HLgoodsList)