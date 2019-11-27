import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';
import Reactpage from './inter/ReactPage';
import Vue from './inter/Vue';
import Flutter from './inter/Flutter';


class video extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
                <div>
                    <div className="topNav">
                        <ul>
                            <li><Link to="/inter/reactpage/">interfaceReact</Link></li>
                            <li><Link to="/inter/vue/">interfaceVue</Link></li>
                            <li><Link to="/inter/flutter/">interfaceFlutter</Link></li>
                        </ul>
                    </div>
                    <div className="videoContent">
                        <Route path="/inter/reactpage/"  component={Reactpage} />
                        <Route path="/inter/vue/"  component={Vue} />
                        <Route path="/inter/flutter/" component={Flutter} />
                    </div>
                </div>

        );
    }
}

export default video;