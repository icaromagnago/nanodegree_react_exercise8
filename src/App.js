import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';


/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
 
  state = {
    	messages: []
    }

	onSendMessage = (message) => {
    	this.setState((prevState) => ({
        	messages: [...prevState.messages, message]
        }));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
		  <Chat user={users[0]} onSendMessage={this.onSendMessage} messages={this.state.messages} />
		  <Chat user={users[1]} onSendMessage={this.onSendMessage} messages={this.state.messages} />
		</div>
      </div>
    );
  }
}

export default App;
