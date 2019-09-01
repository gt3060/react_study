import React from 'react'



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

export default Footer;