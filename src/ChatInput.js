import React, { Component } from 'react';

class ChatInput extends Component {
  	
  	state = {
      	username: '',
    	text: ''
    }

    isDisabled = () => {
      return this.state.text === '';
    };

	onChange = (event) => {
      	const text = event.target.value;
    	this.setState((prevState, props) => ({ 
          username: props.user.username,
          text: text 
        }));
    }

	sendMessage = event => {
    	event.preventDefault();
      	this.props.onSendMessage(this.state);
      	this.setState({ text: '' }); // clear input
    }

	render() {
    	return (
        	<div>
              <form className="input-group" onSubmit={this.sendMessage}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.text} onChange={this.onChange} />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default ChatInput;