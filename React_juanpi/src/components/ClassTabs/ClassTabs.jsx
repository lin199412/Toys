import React from 'react'
import './ClassTabs.scss'

class ClassTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index_now: 0,
            t_info: [
                {
                    classId: '1',
                    title: '女装',
                    t_list: [{
                        tId: '101',
                        tName: 'T恤',
                        tImgurl: 'https://s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '102',
                        tName: '女士裙装',
                        tImgurl: 'https://s2.juancdn.com/bao/190528/4/d/5cecb17433b089435d52d0ab_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '103',
                        tName: '衬衫雪纺',
                        tImgurl: 'https://s2.juancdn.com/bao/190527/f/b/5cebb63333b08946b820e6dc_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '104',
                        tName: '休闲裤',
                        tImgurl: 'https://s2.juancdn.com/bao/180510/f/6/5af4305c33b08974b25d97c5_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '105',
                        tName: '女士外套',
                        tImgurl: 'https://s2.juancdn.com/bao/190527/5/f/5cebb8a233b0893ffe22ca3e_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '106',
                        tName: '懒人套装',
                        tImgurl: 'https://s2.juancdn.com/bao/190219/f/d/5c6b8188b6f8ea14bc1d2890_200x200.jpg?iopcmd=convert&dst=webp'
                    }, {
                        tId: '107',
                        tName: '针织衫',
                        tImgurl: 'https://s2.juancdn.com/bao/190527/6/d/5cebb52fb6f8ea5b1578f11d_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '108',
                        tName: '连体/背带裤',
                        tImgurl: 'https://s2.juancdn.com/bao/190528/9/9/5cecafac33b08944cb03644c_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '109',
                        tName: '西装外套',
                        tImgurl: 'https://s2.juancdn.com/bao/190220/0/6/5c6cd4b933b08976b41fa2a2_200x200.jpg?iopcmd=convert&dst=webp'
                    }, {
                        tId: '110',
                        tName: '风衣',
                        tImgurl: 'https://s2.juancdn.com/bao/190220/5/b/5c6cd61633b089196459057c_200x200.jpg?iopcmd=convert&dst=webp'
                    }, {
                        tId: '111',
                        tName: '冬季外套',
                        tImgurl: 'https://s2.juancdn.com/bao/190220/3/8/5c6cd6c7b6f8ea24e1776e46_200x200.jpg?iopcmd=convert&dst=webp'
                    }, {
                        tId: '112',
                        tName: '卫衣',
                        tImgurl: 'https://s2.juancdn.com/bao/190220/a/e/5c6cd52833b089139a429f3d_200x200.jpg?iopcmd=convert&dst=webp'
                    }, {
                        tId: '113',
                        tName: '中老年女装',
                        tImgurl: 'https://s2.juancdn.com/bao/190220/d/a/5c6cda8233b0891a8c2ff71a_200x200.jpg?iopcmd=convert&dst=webp'
                    }, {
                        tId: '114',
                        tName: '牛仔裤',
                        tImgurl: 'https://s2.juancdn.com/bao/180517/b/0/5afd2b2133b08909906c57af_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '115',
                        tName: '职业套装',
                        tImgurl: 'https://s2.juancdn.com/bao/181106/4/a/5be163f1b6f8ea61f7712835_200x200.png?iopcmd=convert&dst=webp'
                    }]
                },
                {
                    classId: '2',
                    title: '男装',
                    t_list: [{
                        tId: '201',
                        tName: '套装',
                        tImgurl: 'https://s2.juancdn.com/bao/190528/7/d/5cecdd8b33b08951d6492de9_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '202',
                        tName: 'T恤',
                        tImgurl: 'https://s2.juancdn.com/bao/190528/2/a/5cecd8c9b6f8ea5ae1362821_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '203',
                        tName: '男士衬衫',
                        tImgurl: 'https://s2.juancdn.com/bao/190528/d/e/5cecdc3833b08955c532a6a4_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '204',
                        tName: '夹克',
                        tImgurl: 'https://s2.juancdn.com/bao/170815/a/9/5992e3d18150a12e9903fc68_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '205',
                        tName: '卫衣',
                        tImgurl: 'https://s2.juancdn.com/bao/171011/7/c/59ddcb028150a1342d541a29_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '206',
                        tName: 'POLO衫',
                        tImgurl: 'https://s2.juancdn.com/bao/190528/1/5/5cecd984b6f8ea5ca8567b37_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '207',
                        tName: '牛仔裤',
                        tImgurl: 'https://s2.juancdn.com/bao/170828/2/a/59a3d51a8150a108c4711bc3_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '208',
                        tName: '休闲裤',
                        tImgurl: 'https://s2.juancdn.com/bao/170828/6/a/59a3d4faa9fcf831ca0a6202_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '209',
                        tName: '西裤',
                        tImgurl: 'https://s2.juancdn.com/bao/170828/4/6/59a3d531a9fcf8337b0f195e_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '210',
                        tName: '内衣',
                        tImgurl: 'https://s2.juancdn.com/bao/170526/2/3/5927c3c9ad0a496da18b45cd_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '211',
                        tName: '袜子',
                        tImgurl: 'https://s2.juancdn.com/bao/170526/f/6/5927c3d8a43d1f4ca80c9b57_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '212',
                        tName: '背心马甲',
                        tImgurl: 'https://s2.juancdn.com/bao/170918/2/4/59bfc077a9fcf869cc021996_200x200.png?iopcmd=convert&dst=webp'
                    }]
                },
                {
                    classId: '3',
                    title: '母婴',
                    t_list: [{
                        tId: '301',
                        tName: '男童套装',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/f/0/5a9669b5a9fcf89c253b904b_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '302',
                        tName: '女童套装',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/5/e/5a9677fea9fcf81fab76f155_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '303',
                        tName: '儿童裙装',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/c/e/5a96783da9fcf8211b3f1944_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '304',
                        tName: '儿童上衣',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/3/9/5a96726c8150a1463439c066_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '305',
                        tName: '儿童裤子',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/0/4/5a96728da9fcf89c3959bf88_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '306',
                        tName: '内衣配饰',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/3/f/5a9680e3a9fcf820232d051c_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '307',
                        tName: '儿童帆布鞋',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/4/9/5a9678cf8150a14543171d6a_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '308',
                        tName: '儿童运动鞋',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/9/7/5a96791b8150a145e53384a7_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '309',
                        tName: '儿童皮鞋',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/8/a/5a9673118150a146a518b4c4_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '310',
                        tName: '婴幼服饰',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/1/c/5a96734a8150a145ff079406_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '311',
                        tName: '纸尿裤',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/1/a/5a9673748150a14689138d26_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '312',
                        tName: '喂养用品',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/9/6/5a9674eba9fcf89ca813961f_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '313',
                        tName: '孕妈服饰',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/d/7/5a967956a9fcf8213265ccd6_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '314',
                        tName: '洗护用品',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/0/5/5a96756ba9fcf89c3e6b4d8e_200x200.png?iopcmd=convert&dst=webp'
                    }, {
                        tId: '315',
                        tName: '益智早教',
                        tImgurl: 'https://s2.juancdn.com/bao/180228/3/d/5a9675948150a145ea2cc4c5_200x200.png?iopcmd=convert&dst=webp'
                    }]
                },
                {
                    classId: '4',
                    title: '鞋子'
                },
                {
                    classId: '5',
                    title: '箱包'
                },
                {
                    classId: '6',
                    title: '居家百货'
                },
                {
                    classId: '7',
                    title: '家电数码'
                },
                {
                    classId: '8',
                    title: '内衣配饰'
                },
                {
                    classId: '9',
                    title: '美妆'
                },
                {
                    classId: '10',
                    title: '运动户外'
                },
                {
                    classId: '11',
                    title: '美食'
                },
                {
                    classId: '12',
                    title: '车品文娱'
                },
                {
                    classId: '13',
                    title: '通讯旅游'
                }
            ],
            tablist1: [],
            tablist2: []
            // title: this.props.location.state.day
        }
        // console.log(this.props.location.search)
        // console.log(this.props.location.state.day)
    }

    //渲染，选项卡头部按钮
    vFor(arr) {
        return <ul className='t_head'>
            {
                arr.map((item, index) => {
                    return <li
                        key={item.classId}
                        onClick={this.tabOne.bind(this, index)}
                        className={(index === this.state.index_now) ? 'active' : ''}>
                        <div className='names'>{item.title}</div>
                    </li>
                })
            }
        </ul>
    }
    //渲染，选项卡内容，商品盒子
    vForlist(arr) {
        return <ul className='t_goods_list'>
            {
                arr.map((item) => {
                    return <li key={item.tid} >
                        <a href="">
                            <img src={item.tImgurl} alt="" />
                            <span>{item.tName}</span>
                        </a>
                    </li>
                })
            }
        </ul>
    }
    //点击按钮，切换选项卡
    tabOne(index) {
        console.log(index)
        this.setState({
            index_now: index
        })
        console.log(this.state.index_now)
    }

    render() {

        return (
            <div id='ClassTabs_box'>
                {this.vFor(this.state.t_info)}
                <div className='t_cont'>
                    <div className='t_cont_1 cont_box' style={{ display: (0 === this.state.index_now) ? "block" : "none" }}>
                        {/* <h2>女装</h2> */}
                        {this.vForlist(this.state.t_info[0].t_list)}
                    </div>
                    <div className='t_cont_2 cont_box' style={{ display: (1 === this.state.index_now) ? "block" : "none" }}>
                        {/* <h2>男装</h2> */}
                        {this.vForlist(this.state.t_info[1].t_list)}
                    </div>
                    <div className='t_cont_3 cont_box' style={{ display: (2 === this.state.index_now) ? "block" : "none" }}>
                        {/* <h2>母婴</h2> */}
                        {this.vForlist(this.state.t_info[2].t_list)}
                    </div>
                    <div className='t_cont_4 cont_box' style={{ display: (3 === this.state.index_now) ? "block" : "none" }}>
                        <h2>鞋子</h2>
                    </div>
                    <div className='t_cont_5 cont_box' style={{ display: (4 === this.state.index_now) ? "block" : "none" }}>
                        <h2>箱包</h2>
                    </div>
                    <div className='t_cont_6 cont_box' style={{ display: (5 === this.state.index_now) ? "block" : "none" }}>
                        <h2>居家百货</h2>
                    </div>
                    <div className='t_cont_7 cont_box' style={{ display: (6 === this.state.index_now) ? "block" : "none" }}>
                        <h2>家电数码</h2>
                    </div>
                    <div className='t_cont_8 cont_box' style={{ display: (7 === this.state.index_now) ? "block" : "none" }}>
                        <h2>内衣配饰</h2>
                    </div>
                    <div className='t_cont_9 cont_box' style={{ display: (8 === this.state.index_now) ? "block" : "none" }}>
                        <h2>美妆</h2>
                    </div>
                    <div className='t_cont_10 cont_box' style={{ display: (9 === this.state.index_now) ? "block" : "none" }}>
                        <h2>运动户外</h2>
                    </div>
                    <div className='t_cont_11 cont_box' style={{ display: (10 === this.state.index_now) ? "block" : "none" }}>
                        <h2>美食</h2>
                    </div>
                    <div className='t_cont_12 cont_box' style={{ display: (11 === this.state.index_now) ? "block" : "none" }}>
                        <h2>车品文娱</h2>
                    </div>
                    <div className='t_cont_13 cont_box' style={{ display: (12 === this.state.index_now) ? "block" : "none" }}>
                        <h2>通讯旅游</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassTabs
