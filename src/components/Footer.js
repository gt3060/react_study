import React from 'react';
// import PropType from 'prop-type'



class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            msg:'我是底部组件'
        }
    }
    getMeg=()=>{
       alert("底部组件的getMes方法") ;

    }
    render(){


        return(
           <div></div>
        )
    }

}
Footer.defaultProps={
    title:'标题'
}

// Footer.propsTypes={
//     num:PropType.number
// }

export default Footer;