import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummydata } from './dummydata';

function ChatWindow() {
  const { contactId } = useParams();
  const conversation = dummydata.find((conv) => conv.id === parseInt(contactId));
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(conversation.messages);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, { id: messages.length + 1, text: newMessage }];
      setMessages(updatedMessages);
      setNewMessage('');
    }
  };

  return (
<div className="chat-window">
  <h2 className="chat-header">Chat with {conversation.contactName}</h2>
  <div>
    {messages.map((message) => (
      <p key={message.id} className="chat-message">
        {message.text}
      </p>
    ))}
  </div>
  <div className="message-input">
    <input
      type="text"
      placeholder="Type a message..."
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
    />
    <button onClick={handleSendMessage}>Send</button>
  </div>
</div>

  );
}

export default ChatWindow;
