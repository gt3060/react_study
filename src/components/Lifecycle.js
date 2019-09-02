import React , {Component} from 'react';

// React生命周期函数：
//     组件加载前，组件加载完成，以及组件的更新销毁，所触发的一系列方法；

// 组件加载的时候触发的函数：

//     constructor、componentWillMount、render、componentDidMount

// 组件更新时候触发的声明周期函数：

    // shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate

//  在父组件里面改变props传值的时候触发：

//     componentWillRecelveProps
      
// 组件销毁时候触发：
    
//     componentWillUnmount

class Lifecycle extends Component {
    constructor(props) {
        console.log("01触发构造函数")
        super(props);
        this.state = { 
            msg:'构造函数中msg数据'
         };
    }

    componentWillMount(){

        console.log("02组件将要挂载WillMount")
    }

    componentDidMount(){
        console.log("04组件挂载完成触发DidMount")
    }

    shouldComponentUpdate(nextProps,nextState){
        //表示 是否要 更新数据,如果返回true，执行更新数据的数据操作，返回false不更新数据
        //有两个参数，nextProps和nextState
        console.log(nextProps);
        console.log(nextState);
        console.log("05是否要更新数据")
        return true
    }

    componentWillReceiveProps(){
        //  在父组件里面改变props传值的时候触发：
        console.log("10在父组件里面改变props传值的时候触发")
    }

    componentWillUpdate(){
        //将要更新数据触发
        console.log("06数据更新前触发")
    }

    componentDidUpdate(){
        //更新数据后触发
        console.log("07数据 更新完成")
    }

    componentWillUnmount(){

        //节点销毁触发的声明周期函数
        console.log("08节点销毁触发的声明周期函数")
    }

    setMsg=()=>{
        this.setState({
            msg:'改变后的msg数据'
        })
    }

    render() {
        console.log("03render方法");
        return (
            <div>
                ---{this.props.title}---
                生命周期函数演示：{this.state.msg}
                <hr/>
                <button onClick={this.setMsg}>按钮</button>
            </div>
        );
    }
}

export default Lifecycle;