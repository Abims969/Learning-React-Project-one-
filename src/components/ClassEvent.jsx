import {Component} from 'react';

class ClassEvent extends Component {
    
    handleClick(){
        console.log ('Class Based Button Clcked')
    }
    render(){
        return <div>
            This is a class based component
            <button onClick = {this.handleClick}>Click Me</button>
        </div>
    }
}

export default ClassEvent;