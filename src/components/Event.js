import React from 'react';
// import one from '../images/one.png';
// import two from '../images/two.png';
class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Jack',
            input_text: '',
            input_text_ref:'',
            input_d:''

        }
    }

    // parents =()=>{
    //     alert("parents")
    // }

    // one =(e)=>{
    //     e.stopPropagation();
    //     console.log(e)
    //     alert("one");

    // }

    // two =()=>{
    //     alert("two")
    // }

    run = (event) => {
        console.log(event.target.style.background = "red");
        // alert(this.state.username)
    }

    ev_attr = (event) => {
        let str = event.target.getAttribute('aid')
        console.log(str);
        this.setState({
            username: str
        })

        // alert(this.state.username)
    }

    ev_input = (e) => {
        //监听input表单改变事件
        console.log('111');
        //获取表单值：
        let value_input = e.target.value;
        console.log(value_input);
        //赋值
        this.setState({
            input_text: value_input
        })


    }

    getinputvalue = () => {
        alert(this.state.input_text)
    }

    ev_input_ref=()=>{
        let val = this.refs.inputtext.value;
        this.setState({
            input_text_ref:val
        })
    }

    getinputvalue_ref=()=>{
        alert(this.state.input_text_ref)
    }

    keyUp=(e)=>{
        console.log(e.keyCode);
        if(e.keyCode === 13){
            alert(e.target.value)
        }
    }

    input_d_change=(e)=>{
        this.setState({
            input_d:e.target.value
        })
    }
    input_d_change_t=()=>{
        this.setState({
            input_d:"Geng Tian"
        })
    }

    render() {

        return (
            <div>
                <hr />
                <h2>事件对象演示</h2>

                <hr />
                <div>名字：{this.state.username}</div>
                <button onClick={this.run} >对象演示</button>
                <br /><br /><hr />

                <button onClick={this.ev_attr} aid="132">获取事件对象的属性</button>
                <br /><br /><hr />

                {/* 
                获取表单的值:
                1、监听表单的改变事件；                      onchange
                2、在改变的事件里面获取表单输入的值；         事件对象
                3、把表单输入的值赋给input_text；            this.setstate({})
                4、点击按钮时候获取state中input_text的值     this.state.*** */}
                <input onChange={this.ev_input} />
                <button onClick={this.getinputvalue}>获取input内容</button>
                <br /><br /><hr />

                {/* 通过ref获取input值 */}
                <input ref="inputtext" onChange={this.ev_input_ref} />
                <button onClick={this.getinputvalue_ref}>获取input内容</button>
                <br /><br /><hr />

                {/* 键盘事件 keyUp/keyDown/*/}
                <input onKeyUp={this.keyUp} />
                <br /><br /><hr />

                <h2>react实现类似vue的双向绑定</h2>
                <hr />
                {/* module改变影响view（视图），view改变影响module */}
                <input  value ={this.state.input_d} onChange={this.input_d_change}/>
                <button onClick={this.input_d_change_t}>改变input_d值</button>
                <br />
                {this.state.input_d}
                <br /><hr />

                {/* <div onClick={this.parents}>
                    <img onClick={this.one} src={one} alt="111111"></img>
                    <img onClick={this.two} src={two} alt="222222"></img>
                </div> */}
            </div>
        )
    }
}

export default Event;