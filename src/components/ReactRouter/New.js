import React, { Component } from 'react';
import {HashRouter as Router,Link,Route} from 'react-router-dom'


class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: '1',
                    title: '我是新闻111'
                },
                {
                    aid: '2',
                    title: '我是新闻222'
                },
                {
                    aid: '3',
                    title: '我是新闻333'
                },
                {
                    aid: '4',
                    title: '我是新闻444'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                News 组件
                <br></br>
                <hr />
                <br />
                <ul> 
                    {
                        this.state.list.map((value, key) => {
                            return (

                                <li key={key}>
                                    {/* 下面的￥{value.aid}就是动态路由 */}
                                    <Link to ={`/content${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default New;