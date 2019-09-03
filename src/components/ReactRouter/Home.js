import React, { Component } from 'react';
// import {HashRouter as Router,Link,Route} from 'react-router-dom'

// react路由的配置：

//     1、找到官方文档：http://reacttraining.com/react-router/web/example/basic

//     2、安装     npm install react - router - dom--save

//     3、找到项目的根组件引入 react - router - dom
//         import { HashRouter as Router, Link, Route } from 'react-router-dom'

//     4、进行代码编写：
                // <Router>
                //     <div>
                //         <header className="rout_header">
                //             <br />
                //             <Link to="/" className="rout_header_con">首页</Link><br />
                //             <br />
                //             <Link to="/news" className="rout_header_con">新闻</Link><br />
                //             <br />
                //             <Link to="/product" className="rout_header_con">商品</Link><br />
                //         </header>

                //         <br /><hr />
                //         <Route exact path="/" component={Home} />
                //         <Route path="/news" component={News} />
                //         <Route path="/product" component={Product} />
                //     </div>
                // </Router>

// 一个页面跳转到另一个页面进行传值：
    
//     1、get传值；

//     2、动态路由；

//     3、localStorage

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                Home 组件
            </div>
        );
    }
}

export default Home;