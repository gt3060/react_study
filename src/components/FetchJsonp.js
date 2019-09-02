import React, { Component } from 'react';
// import fetchJsonp from 'fetch-jsonp';


// 2、fetch-jsonp  
// 查看如何使用jsonp  只需要在路径后面加上&callback=xxxx(xxx为参数)   
// 1）安装jsonp：npm install fetch-jsonp --SVGFEFuncAElement;

// 2）import Fetchjsonp from 'fetch-jsonp'

// 3）看文档使用    https://www.npmjs.com/package/jsonp

class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    getData = () => {
        console.log("lalal")

        //获取数据
        // fetchJsonp('url')
        //     .then(function (response) {
        //         return response.json()
        //     }).then((json) => {
        //         console.log(json)//指向成功
        //         this.setState({
        //             list: this.json.result
        //         })
        //     }).catch(function (error) {
        //         console.log(error)//指向失败
        //     })

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
        );
    }
}

export default FetchJsonp;