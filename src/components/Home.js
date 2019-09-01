import React from 'react';
import Child from './Child'
import Footer from './Footer';

// React组件的作用：用于解决html标签构建不足

// 使用React组件的优点：把公共的功能单独抽离成一个组件，可以在任何地方使用；

// 父子组件：调用者是父组件；被调用者是子组件

// 父子组件传值：
        // 父组件给子组件传值：
                // 1）在调用子组件的时候定义一个属性，<Child title='传值'></Child>
                
                // 2）子组件里面this.props.title

                // 说明：父组件不仅可以给子组件传值，还可以传方法以及传递整个 父组件。可以给子组件往父组件传值 
        //子组件给父组件传值：
                // 1）

        // 父组件主动获取子组件的数据（父组件操作子组件）
                // 1）调用子组件指定的ref的值<Child ref='header'/>
                // 2）通过this.refs.header获取整个子组件的实例


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            msg:"这是父组件",
            title:"父传值子"
        }
    }
    run=()=>{
        alert("我是父组件的run方法")
    }
    //获取子组件传过来的
    getChildData=(result)=>{
        alert(result);
        this.setState({
            msg:result
        })
    }

    getData=()=>{
        alert(this.state.msg)
    }
    getFooter=()=>{
        alert(this.refs.foo.state.msg)
    }

    getFooterl=()=>{
        this.refs.foo.getMeg();
    }

    render(){
        return(
            <div>
                {this.state.msg};
                <Child title ={this.state.title} run={this.run}  child = {this}/>

                <Footer ref='foo'></Footer>
                <button onClick={this.getFooter} >获取整个底部组件</button>
                <br></br>
                <button onClick={this.getFooterl} >获取底部组件方法</button>
                
            </div>
        )
    }

}

export default Home;