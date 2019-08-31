import React from 'react';


class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Jack",
            message: "获取数据的值data"
        }

        //第二种方式
        this.setMsg_second = this.setMsg_second.bind(this)
    }

    setMsg_first() {
        alert(this.state.message)
    }

    setMsg_second() {
        alert(this.state.message)
    }

    setMsg_third = () => {
        alert(this.state.message)
    }

    setMsg_value = () =>{
        this.setState({
            username:"Name"
        })
    }

    setMsg_change = (str) =>{
        this.setState({
            username:str
        })
    }

    render() {

        return (
            <div>
                <hr />
                <h2>改变this方向</h2>
                <hr />

                <button onClick={this.setMsg_first.bind(this)}>第一种改变this方向</button>
                <br /><br></br><hr />

                <button onClick={this.setMsg_second}>第二种改变this方向</button>
                <br /><br></br><hr />

                <button onClick={this.setMsg_third}>第三种利用箭头函数改变this方向</button>
                <br /><br></br><hr />

                <button onClick = {this.setMsg_value}>改变state中值</button>
                <br /><br></br><hr />

                <div>啦啦啦：{this.state.username}</div>
                <br></br><br></br><hr />

                <button onClick = {this.setMsg_change.bind(this,'Geng')}>执行方法传值</button>
                <br /><br /> <hr />


            </div>
        )
    }
}

export default Data;
