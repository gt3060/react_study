import React, { Component } from 'react';
// import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom'


class list extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            temp:''
         };
    }
    componentDidMount(){
        let temp = this.props.match.params.id;//通过this.props.params获取值
        this.setState({
            temp
        })
    }
    handlesubmit = () =>{
        this.props.history.push("/home/"); 
    }
    render() {
        const { temp } = this.state;
        return (
            <div>
                <button onClick={this.handlesubmit}>跳转</button>
                <h1>List列表{temp}</h1>
            </div>
        );
    }
}

export default list;