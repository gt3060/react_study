import React , {Component} from 'react';
import Child from './Child'


class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"第二个父组件"
         };
    }
    render() {
        return (
            <div>
                <Child title={this.state.title}></Child>
            </div>
        );
    }
}

export default Parent;