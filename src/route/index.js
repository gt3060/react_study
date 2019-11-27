import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: '我是APp组件的title',
            // flag: true
            count: 0,
            list: [
                { id: "001", value: "星期一" },
                { id: "002", value: "星期二" },
                { id: "003", value: "星期三" },
            ]
        }
        // this.props.history.push("/home/");
    }
    
    render() {
        return (
            <div>
                {/* <Redirect to="/home" /> */}
                {
                    this.state.list.map((item, index) => {
                        return (
                            <li key={index}><Link to={'/list/'+item.id}>{item.value}</Link></li>
                        )
                    })
                }
                <h1>index首页</h1>
                
            </div>
        );
    }
}

export default index;