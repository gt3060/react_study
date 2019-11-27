import React, { Component } from 'react';
import { BrowserRouter  as Router, Link, Route } from 'react-router-dom';
import Index from './routecase/index';
import './routecase/css/app.css'
import VideoIndex from './routecase/video';

class Approuter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3>一级导航</h3>
                        <ul>
                            <li> <Link to="/">测试中心</Link> </li>
                            <li><Link to="/inter">接口管理</Link> </li>
                        </ul>
                    </div>
                    <div className="rightMain">
                        <Route path="/"  exact component={Index} />
                        <Route path="/inter/"  component={VideoIndex} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Approuter;