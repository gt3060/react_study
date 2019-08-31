import React from 'react';
import Data from './components/Data';
import Event from './components/Event';
import './css/App.css';
import Eventmvvm from './components/Eventmvvm';

class App extends React.Component{

    render(){
        return(
            <div>
                <Eventmvvm></Eventmvvm>
                <Event></Event>
                <Data></Data>
                
            </div>
        )
    }
}

export default App;