This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Learn

## React Install

### 安装nodejs

### npm install -g create-react-app

### create-reactt-app ***

## Catalogue analysis

### public

公共文件，其中初始创建项目中的ico文件是网页的logo

### src文件夹

资源文件，其中包括组件文件，样式表文件，图片文件以及封装的模块文件；
serviceWorker.js文件是：是用于加快react运行速度的js文件；
index.js文件是其实加载js文件；

其中 model指的是模块组件的封装

### package.json/package-lock.json

项目的配置文件

### README.md

阅读文档的一个文件

## Learn  Frame

以下内容用于简述各个组件的内容：


### Data.js

基本的获取数据的方式

### Event.js/EventMvvm.js

事件的监听，使用，获取，react实现vue的双向绑定 ，约束性和非约束性组件，导入图片


### Axios.js

利用axios方式请求数据，详情参考：https://github.com/axios/axios

### FetchJsonp.js

利用Fetch-jsonp方式跨域请求数据，详情参考：https://www.npmjs.com/package/jsonp

### Todolist.js/Todolist.js

基本的input组件的添加删除同步等内容

### Lifecycle.js

声明 周期的使用

React生命周期函数：
    组件加载前，组件加载完成，以及组件的更新销毁，所触发的一系列方法；

组件加载的时候触发的函数：

    constructor、componentWillMount、render、componentDidMount

组件更新时候触发的声明周期函数：

    shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate

 在父组件里面改变props传值的时候触发：

    componentWillRecelveProps
      
组件销毁时候触发：
    
    componentWillUnmount

### Home.js/Child.js/Footer.js

父子组件之间传值的使用

React组件的作用：用于解决html标签构建不足

使用React组件的优点：把公共的功能单独抽离成一个组件，可以在任何地方使用；

父子组件：调用者是父组件；被调用者是子组件

父子组件传值：
        父组件给子组件传值：
                1）在调用子组件的时候定义一个属性，<Child title='传值'></Child>
                
                2）子组件里面this.props.title

                说明：父组件不仅可以给子组件传值，还可以传方法以及传递整个 父组件。可以给子组件往父组件传值 
                        defaultProps:父子组件传值中，如果父组件调用 子组件时不给子组件传值，则用其定义默认值；
                        propsTypes:验证组件传值类型的合法性;
                                写法：
                                    I：引入import PropTypes from'props-types'

                                    II：类.propTypes = {
                                        // name:propTypes.string //定义 了name是string类型；
                                    }
                        以上两种都是定义在子组件中

        子组件给父组件传值：
                1）父组件中child={this}
                2）子组件：this.props.child.method.bind(this,'子组件向父组件传的值')

        父组件主动获取子组件的数据（父组件操作子组件）
                1）调用子组件指定的ref的值<Child ref='header'/>
                2）通过this.refs.header获取整个子组件的实例

### ReactRouter文件夹中的Home.js/New.js/Product.js

这三个组件用于实现React路由的问题

react路由的配置：

    1、找到官方文档：http://reacttraining.com/react-router/web/example/basic

    2、安装     npm install react - router - dom--save

    3、找到项目的根组件引入 react - router - dom
        import { HashRouter as Router, Link, Route } from 'react-router-dom'

    4、进行代码编写：
                <Router>
                    <div>
                        <header className="rout_header">
                            <br />
                            <Link to="/" className="rout_header_con">首页</Link><br />
                            <br />
                            <Link to="/news" className="rout_header_con">新闻</Link><br />
                            <br />
                            <Link to="/product" className="rout_header_con">商品</Link><br />
                        </header>

                        <br /><hr />
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/product" component={Product} />
                    </div>
                </Router>

一个页面跳转到另一个页面进行传值：
    
    1、get传值；

    2、动态路由；

    3、localStorage

### ReactRouter文件夹中的Conetent.js/ProductConten.js

这两个组件主要和New.js/Product.js结合使用，用于实现动态路由的问题

在react里面使用url模块需要安装url模块：npm istall url --save

react动态路由和get传值 ：

    1、动态路由配置：
        <Route path="/content/:aid" component={Content} />

    2、对应的动态路由加载的组件里面获取传值
        this.props.match.params
    
    跳转：<Link to="/news" className="rout_header_con">新闻</Link>

react get 传值：

    1、获取this.props.location.search

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
