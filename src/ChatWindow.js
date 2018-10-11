import React from 'react';

const ChatWindow = (props) => {
	return (
    	<div>
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.user.username}</div>

            <ul className="message-list">
              {props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === props.user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
		</div>
    )
}

export default ChatWindow;