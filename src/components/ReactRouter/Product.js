import React , {Component} from  'react';
import {HashRouter as Router,Link,Route} from 'react-router-dom'


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {
                    aid: '111',
                    title: '我是商品111'
                },
                {
                    aid: '222',
                    title: '我是商品222'
                },
                {
                    aid: '333',
                    title: '我是商品333'
                },
                {
                    aid: '444',
                    title: '我是商品444'
                }
            ]
         };
    }
    render() {
        return (
            <div>
                Product 组件
                <br></br>
                <hr />
                <br />
                <ul> 
                    {
                        this.state.list.map((value, key) => {
                            return (

                                <li key={key}>
                                    {/* 下面的￥{value.aid}就是动态路由 */}
                                    {/* <Link to ={`/productcontent${value.aid}`}>{value.title}</Link> */}
                                    <Link to ={`/productcontent?aid=${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Product;