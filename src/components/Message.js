import React, {Component} from "react";

class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: `Welcome ${this.props.name}`,
        };
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        });
    }

  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscibe</button>
        </div>
    ) 
  }
}


export default Message;