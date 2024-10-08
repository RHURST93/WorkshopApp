import React, { useState, useEffect } from 'react';

const GroupChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('Anonymous');

  useEffect(() => {
    // Load chat messages from local storage on component mount
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      console.log('Loaded messages from local storage:', parsedMessages);
      setMessages(parsedMessages);
    } else {
      console.log('No messages found in local storage.');
    }
  }, []);

  useEffect(() => {
    // Save chat messages to local storage whenever messages state changes
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    console.log('Saved messages to local storage:', messages);
  }, [messages]);

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        user: currentUser,
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="container-fluid bg-dark pb-4 " >
      <div className="row justify-content-center ">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-light" style={{ backgroundColor: '#4a07b5' }}>Workshop Chat</div>
            <div className="card-body chat-area bg-dark">
              {messages.map((msg) => (
                <div key={msg.id} className="message text-light p-2 mb-2 rounded" style={{ backgroundColor: '#0688d4' }}>
                  <strong>{msg.user}</strong> ({msg.timestamp}): {msg.text}
                </div>
              ))}
            </div>
            <div className="card-footer text-light" style={{ backgroundColor: '#4a07b5' }}>
              <div className="input-group">
                <input
                  type="text"
                  style={{ borderRadius: 15 }}
                  className="form-control"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={handleMessageChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary border-white" style={{ marginLeft: '10px' }} onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <label htmlFor="username">Your Name:</label>
                <input
                  type="text"
                  style={{ borderRadius: 15, width: '30%' }}
                  id="username"
                  className="form-control"
                  value={currentUser}
                  onChange={(e) => setCurrentUser(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
