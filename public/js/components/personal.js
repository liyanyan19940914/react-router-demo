import React,{Component} from 'react';

class Personal extends Component{
    render(){
        return <div>
            <label>useName:</label><input type="text"/>
            <label>password:</label><input type="password"/>
        </div>
    }
}

export default Personal;