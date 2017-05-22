import React,{Component} from 'react';
import {Link} from 'react-router';
import Message from '../containers/message';

class App extends Component{
    render(){
        return <div>
            <ul>
                <li>home</li>
                <li><Link to="Message">message</Link></li>
                <li>personal</li>
                {this.props.children}
            </ul>
        </div>
    }

}

export default App;