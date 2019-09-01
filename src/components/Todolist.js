import React from 'react'
import '../css/Todolist.css'


// 基本的添加删除

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "text",
            list: [
                // {
                //     title: '录制ionic',
                //     checked: true
                // },

                // {
                //     title: '录制react',
                //     checked: false
                // },

                // {
                //     title: '录制js',
                //     checked: false
                // },

                // {
                //     title: '录制nodejs',
                //     checked: true
                // }


            ]
        }
    }

    add_data = (e) => {
        // console.log(e.keyCode);
        if (e.keyCode == 13) {
            console.log(this.refs.title.value)
            let ls = this.refs.title.value;
            let t = this.state.list;
            t.push(ls);
            this.refs.title.value = null;

            this.setState({
                list: t
            })
        }

    }

    delete_data = (key) => {
        // console.log("key:"+key)
        let t = this.state.list;
        t.splice(key, 1);
        this.setState({
            list: t
        })

    }

    // keyup=(e)=>{
    //     console.log(e.keyCode)
    // }

    change_value=()=>{
        console.log("alalla")
    }

    render() {

        return (
            <div className="sum">
                <div className="top">
                    <div className="top_left">ToDolist</div>
                    <div className="top_right">
                        <input ref="title" onKeyUp={this.add_data} className="top_right_input" placeholder="添加ToDo" />
                    </div>
                </div>
                <h2>基本的添加删除input事件</h2>
                {/* <h2>待办事项</h2>
                <ul>
                    {
                        this.state.list.map((value, key) =>{
                            if (!value.checked){
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.change_value}/>
                                        {value.title}-----<button >删除</button>
                                    </li>

                                )
                            }
                            else{

                            }
                                
                        })
                    }
                </ul>



                <hr />
                <h2>已完成是像</h2>

                <ul>
                    {
                        this.state.list.map((value, key) =>{
                            if (value.checked){
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.change_value}/>
                                        {value.title}-----<button onClick={this.delete.data.bind(this,key)}>删除</button>
                                    </li>

                                )
                            }
                            else{

                            }
                                
                        })
                    }
                </ul> */}

                {/* <button onClick={this.add_data}>增加</button> */}

                <hr />
                <ul className="list">
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}>{value}----<button onClick={this.delete_data.bind(this, key)}>删除</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Todolist;