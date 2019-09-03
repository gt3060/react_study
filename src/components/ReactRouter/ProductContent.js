import React , {Component} from  'react';

//利用nodejs的url进行解析   在react里面使用url模块需要安装url模块：npm istall url --save
import url from 'url';

class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    
    componentDidMount(){
        //通过 match.params.aid获取get传值
        console.log(url.parse(this.props.location.search,true));
        
        var aid = url.parse(this.props.location.search,true).query.aid;

        console.log(aid)

        
    }

    render() {
        return (
            <div>
                商品详情页面
                <br/>
                <hr/>
                <br/>
                {url.parse(this.props.location.search,true).query.aid}

            </div>
        );
    }
}

export default ProductContent;