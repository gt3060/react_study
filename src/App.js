import React from 'react';
import Data from './components/Data';
import Event from './components/Event';
import './css/App.css';
import Eventmvvm from './components/Eventmvvm';
import Todolist from './components/Todolist';
import Todolist_up from './components/Todolist_up';
import Home from './components/Home';
import Axios from './components/Axios';
import FetchJsonp from './components/FetchJsonp';
import Lifecycle from './components/Lifecycle';
// import Home from './components/ReactRouter/Home';
import News from './components/ReactRouter/New';
import Product from './components/ReactRouter/Product';
import Content from './components/ReactRouter/Content';

import { HashRouter as Router, Link, Route } from 'react-router-dom'
import ProductContent from './components/ReactRouter/ProductContent';
// import Home from './components/ant-design/Home';
import Child from './components/Child';
import Parent from './components/Parent';


class App extends React.Component {

    //生命周期
    constructor(props) {
        super(props);
        this.state = {
            // title: '我是APp组件的title',
            // flag: true
            count:0
        }
    }
    // componentDidMount(){
    //    this.setState({
    //        count: this.select.value
    //    })
    // }

    // setflag = () => {
    //     this.setState({

    //         flag: !this.state.flag
    //     })
    // }
    // settitle=()=>{
    //     this.setState({
    //         title:'woshi 改变后的父组件title'
    //     })
    // }
    handleadd = () =>{
        const {count} = this.state;
        const number = parseInt(this.select.value) + count;
        this.setState({
            count:number
        })
        
    }  
    decrease = () =>{
        const {count} = this.state;
        const number =count - parseInt(this.select.value) ;
        console.log(number);
        console.log(this.select.value)
        this.setState({
            count:number
        })
    }

    increnodd =() =>{

    }

    render() {
        return (

            <div style={{marginLeft:"100px",marginTop:"100px"}}>

                {/* <Home></Home> */}
                {/* <Child></Child> */}

                {/* {
                    this.state.flag ? <Lifecycle title={this.state.title} />:"" 
                }
                <br /><hr /><br />
                <button onClick={this.setflag}>挂载和销毁声明周期函数组件</button>
                <button onClick={this.settitle}>改变父组件title的值</button> */}

                {/* <Router>
                    <div>
                        <header className="rout_header">
                            <br />
                            <Link to="/" className="rout_header_con">首页</Link><br />
                            <br />
                            <Link to="/news" className="rout_header_con">新闻</Link><br />
                            <br />
                            <Link to="/product" className="rout_header_con">商品</Link><br />
                        </header>

                        <br /><hr />
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/product" component={Product} />
                        <Route path="/content:aid" component={Content}/>
                        <Route path="/productcontent" component={ProductContent}/>
                        <Route path="/productcontent:aid" component={ProductContent}/>
                    </div>
                </Router> */}


                {/* <FetchJsonp></FetchJsonp> */}
                {/* <Axios></Axios> */}
                {/* <Home></Home> */}
                {/* <Parent></Parent> */}
                {/* <Child></Child> */}
                {/* <Todolist_up></Todolist_up> */}
                {/* <Todolist></Todolist> */}
                {/* <Eventmvvm></Eventmvvm>
                <Event></Event>
                <Data></Data> */}

                {/* 测试redux */}
                <p>click {this.state.count} times</p>
                <select ref={select => this.select = select} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.handleadd}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrease}>-</button>&nbsp;&nbsp;
                <button onClick={this.increnodd}>increment if odd</button>&nbsp;&nbsp;
                <button onClick={this.asyncincrement}>increment async</button>&nbsp;&nbsp;
                

            </div>
        )
    }
}

export default App;