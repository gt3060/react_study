import React from 'react'

// 非约束性组件：<input type="text" defaultValue="a" />这里的defaultvalue其实就是原生DOM的value属性
// 用于只实现获取input中的值，用defaultvalue
// 约束性组件：<input value ={this.state.username} />
// 这里的value属性是一个动态的值，他是this.state.username,而this.state.username是由this.handleChange负责管理的
// 此时的value根本不是用户输入的内容，而是onchange事件触发后由于this.setstate导致一次重新渲染。

class Eventmvvm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Jack',
            name: '',
            sex: 1,
            citys: '',
            city: [
                '北京', '上海', '武汉', '深圳'
            ],
            hobbys: '',
            hobby: [
                {
                    'title': "睡觉",
                    'checked': true
                },
                {
                    'title': "吃饭",
                    'checked': false
                },
                {
                    'title': "代码",
                    'checked': true
                }
            ],
            info: ''
        }
    }

    handle_name = (e) => {
        // console.log("tijiap")
        this.setState({
            name: e.target.value
        })
    }

    handle_submit = (e) => {
        // 阻止submit提交事件
        e.preventDefault();
        console.log(this.state.name, this.state.sex, this.state.citys, this.state.hobby, this.state.info, this.state.hobbys)
    }

    handle_sex = (e) => {
        // console.log(e.target.value)
        this.setState({
            sex: e.target.value
        })
    }
    handle_city = (e) => {
        this.setState({
            citys: e.target.value
        })
    }

    handle_check = (key) => {
        var hobby1 = this.state.hobby;
        hobby1[key].checked = !hobby1[key].checked;
        let ls = this.state.hobby.filter(item => {
            return item.checked == true;
        })
        let a =ls.map(function(value,key){
            // console.log(value.title);
            return value.title
        })


        this.setState({
            hobby: hobby1,
            hobbys: a
        })
    }

    handle_area = (e) => {
        this.setState({
            info: e.target.value
        })
    }

    render() {

        return (
            <div>
                <hr />
                <h2>约束性组件和非约束性组件</h2>

                {/* <input defaultValue="lalala"></input> */}
                {/* <input value="lalal"></input>这里会出错 */}
                <hr />
                <form onSubmit={this.handle_submit}>
                    用户名：
                    <input type="text" value={this.state.name} onChange={this.handle_name} /><br></br>
                    性别：
                    <input type="radio" value="1" checked={this.state.sex == 1} onChange={this.handle_sex} />男
                    <input type="radio" value="2" checked={this.state.sex == 2} onChange={this.handle_sex} />女<br></br>
                    居住城市：
                    <select value={this.state.citys} onChange={this.handle_city}>
                        {
                            this.state.city.map(function (value, key) {
                                return <option key={key}>{value}</option>
                            })
                        }

                    </select><br />
                    爱好：
                    {
                        this.state.hobby.map((value, key) => {
                            return (
                                <div key={key}>
                                    {value.title} <input type="checkbox" checked={value.checked} onChange={this.handle_check.bind(this, key)} />
                                </div>

                            )
                        })
                    }
                    <br></br>
                    详情：
                    <textarea value={this.state.info} onChange={this.handle_area}></textarea>
                    <br /><input type="submit" value="提交" />
                </form>

            </div>
        )
    }
}
export default Eventmvvm