import React, {Component} from "react";

class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: `Welcome ${this.props.name}`,
        };
    }

  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button>Subscibe</button>
        </div>
    ) 
  }
}


export default Message;