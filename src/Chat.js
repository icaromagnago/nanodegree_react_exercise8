import React from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

const Chat = (props) => {
	return (
    	<div className="chat-window">
      		<ChatWindow user={props.user} messages={props.messages} />
  			<ChatInput user={props.user} onSendMessage={props.onSendMessage} />
  		</div>
  	)
}

export default Chat;