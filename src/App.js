import React from 'react';
import Data from './components/Data';
import Event from './components/Event';
import './css/App.css';
import Eventmvvm from './components/Eventmvvm';
import Todolist from './components/Todolist';
import Todolist_up from './components/Todolist_up';
import Home from './components/Home';


class App extends React.Component{

    render(){
        return(
            <div>
                <Home></Home>
                {/* <Todolist_up></Todolist_up> */}
                {/* <Todolist></Todolist> */}
                {/* <Eventmvvm></Eventmvvm>
                <Event></Event>
                <Data></Data> */}
                
            </div>
        )
    }
}

export default App;