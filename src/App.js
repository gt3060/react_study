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