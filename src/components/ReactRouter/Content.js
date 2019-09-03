import React , {Component} from  'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    
    componentDidMount(){
        //通过 match.params.aid获取值
        console.log(this.props.match.params.aid)
    }

    render() {
        return (
            <div>
                新闻详情页面
                <br/>
                <hr/>
                <br/>
                {this.props.match.params.aid}

            </div>
        );
    }
}

export default Content;