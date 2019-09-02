import React from 'react';
import axios from 'axios';

// react获取 服务器API接口的教程
// react 中没有提供专门请求数据的模块。但是我们可以使用任何第三方请求数据提供实现请求数据
// 1、axios    https://github.com/axios/axios      
//         1）安装axios模块：npm  install axios --save;

//         2）哪里使用 哪里引入：import axios from 'axios';

//         3）看文档使用    https://www.npmjs.com/package/axios
// axios.get('url')
// .then(function(response){
//     console.log(response.data.result)
// })
// .catch(function(error){
//     console.log(error)
// })

// 2、fetch-jsonp       
// 1）安装jsonp：npm install fetch-jsonp --SVGFEFuncAElement;

// 2）import Fetchjsonp from 'fetch-jsonp'

// 3）看文档使用    https://www.npmjs.com/package/jsonp




class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }

    getData = () => {
        axios.get('url')
            .then((response)=> {
                console.log(response.data.result);
                this.setState({
                    list:response.data.result
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {

        return (
            <div>
                <h2>axios获取服务器数据</h2>
                <button onClick={this.getData}>触发获取数据</button>
                <ul>
                    {
                        // this.state.list.map((value, key) => {
                        //     <li key={key}>{value}</li>
                        // })
                    }
                </ul>

            </div>
        )
    }
}


export default Axios;