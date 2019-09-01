import React from 'react'



class Child extends React.Component{

    constructor(props){
        super(props);
        this.state={
            msg:"这是子组件",
            childmsg:'子组件给父组件传值——子组件'
        }
    }
    getMeg=()=>{
       alert(this.props.child.state.title) ;

    }
    render(){


        return(
            <div>
                {this.state.msg}
                <br></br><hr/>
               <h2> {this.props.title}</h2>
               <br/><hr/>
               <button onClick={this.props.run}>传方法</button>
               <br/><hr/>
               <button onClick={this.props.child.getData}>传整个组件</button>
               <br/><hr/>
               <button onClick={this.getMeg}>获取整个方法</button>
               <br /><hr/>
                <button onClick={this.props.child.getChildData.bind(this,this.state.childmsg)}>子组件给父组件传值</button>
                <br/>
                <button onClick={this.props.child.getChildData.bind(this,'我是子组件的值')}>子组件给父组件传值</button>
            </div>
        )
    }

}

export default Child;