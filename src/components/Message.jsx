import { Component } from 'react';

class Message extends Component {
    render(){
        return <div>
            <h1>Message: {this.props.messagecontent}</h1>
            <p>Code: {this.props.messagecode}</p>
            </div>
    }
}

export default Message;