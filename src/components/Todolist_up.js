import React from 'react'
import '../css/Todolist.css';
import Storage from '../model/storage';
import Num from '../model/number'


// 添加删除交互以及缓存的使用,计数


class Todolist_up extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "text",
            number_bottom: 0,
            number_top: 0,
            list: [
            ]
        }
    }

    add_data = (e) => {

        if (e.keyCode == 13) {
            console.log(e);
            // console.log(this.refs.title.value)
            let ls = this.refs.title.value;
            var t = this.state.list;

            t.push({
                title: ls,
                checked: false
            });
            this.refs.title.value = null;

            let list = this.state.list
            let cnum = Num.sum(list, false);
            Storage.set('number', cnum);

            this.setState({
                list: t,
                number_top: cnum
            })
        }


        // console.log(this.state.list)



        //执行缓存数据localStorage
        // localStorage.setItem('todolist',JSON.stringify(t));


        Storage.set('todolist', t);

    }

    delete_data = (key,value) => {
        // console.log("key:"+key)
        let t = this.state.list;
        t.splice(key, 1);
        if(value === false){
            var cnum = Num.sum(t, value);
            this.setState({
                list: t,
                number_top:cnum
            })
        }
        else if(value === true){
            var cnum1 = Num.sum(t, value);
            this.setState({
                list: t,
                number_bottom:cnum1
            })
        }
        
        
        // let list = this.state.list
        
        Storage.set('number', cnum);
        Storage.set('number1', cnum1);


        //执行缓存数据localStorage
        //  localStorage.setItem('todolist',JSON.stringify(t));
        Storage.set('todolist', t);

    }


    change_value = (key) => {
        console.log("alalla");
        let t = this.state.list;
        t[key].checked = !t[key].checked
        let cnum = Num.sum(t, false);
        let cnum1 = Num.sum(t,true);
        Storage.set('number', cnum);
        // console.log(e.)
        this.setState({
            list: t,
            number_top:cnum,
            number_bottom:cnum1
        })

        //执行缓存数据localStorage
        //  localStorage.setItem('todolist',JSON.stringify(t));
        Storage.set('number1', cnum1);
        Storage.set('todolist', t);
    }



    //生命周期函数进行渲染缓存中内容
    componentDidMount() {

        //获取缓存数据
        // var list =JSON.parse(localStorage.getItem('todolist'));

        var list = Storage.get('todolist');

        var cnum1 = Storage.get('number1');

        var cnum = Storage.get('number')

        if (list) {
            this.setState({
                list: list,
                number_top: cnum,
                number_bottom:cnum1

            })
        }

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

                <h2>待办事项</h2><h3>{
                    this.state.number_top

                }
                </h3>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (!value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.change_value.bind(this, key)} />
                                        {value.title}-----<button onClick={this.delete_data.bind(this,key,false)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <hr />
                <h2>已完成事项</h2><h3>{this.state.number_bottom}</h3>

                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.change_value.bind(this, key)} />
                                        {value.title}-----<button onClick={this.delete_data.bind(this,key,true)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>



                <hr />

            </div>
        )
    }
}
export default Todolist_up;