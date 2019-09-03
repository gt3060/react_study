import React from 'react';
import Data from './components/Data';
import Event from './components/Event';
import './css/App.css';
import Eventmvvm from './components/Eventmvvm';
import Todolist from './components/Todolist';
import Todolist_up from './components/Todolist_up';
// import Home from './components/Home';
import Axios from './components/Axios';
import FetchJsonp from './components/FetchJsonp';
import Lifecycle from './components/Lifecycle';
import Home from './components/ReactRouter/Home';
import News from './components/ReactRouter/New';
import Product from './components/ReactRouter/Product';
import Content from './components/ReactRouter/Content';

import { HashRouter as Router, Link, Route } from 'react-router-dom'
import ProductContent from './components/ReactRouter/ProductContent';


class App extends React.Component {

    //生命周期
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         title: '我是APp组件的title',
    //         flag: true
    //     }
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

    render() {
        return (

            <div>
                {/* {
                    this.state.flag ? <Lifecycle title={this.state.title} />:"" 
                }
                <br /><hr /><br />
                <button onClick={this.setflag}>挂载和销毁声明周期函数组件</button>
                <button onClick={this.settitle}>改变父组件title的值</button> */}

                <Router>
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
                </Router>


                {/* <FetchJsonp></FetchJsonp> */}
                {/* <Axios></Axios> */}
                {/* <Home></Home> */}
                {/* <Todolist_up></Todolist_up> */}
                {/* <Todolist></Todolist> */}
                {/* <Eventmvvm></Eventmvvm>
                <Event></Event>
                <Data></Data> */}



            </div>
        )
    }
}

export default App;