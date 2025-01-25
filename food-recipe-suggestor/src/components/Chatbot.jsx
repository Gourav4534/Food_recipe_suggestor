import React, { useState } from 'react';
import { getGroqChatCompletion } from '../services/groqService';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [chat, setChat] = useState([]);

    const handleSend = async () => {
        if (input.trim() === '') return;

        const newChat = [...chat, { sender: 'user', message: input }];
        setChat(newChat);
        setInput('');

        try {
            const response = await getGroqChatCompletion(`Suggest a meal based on these ingredients: ${input}`);
            const botMessage = response.choices[0]?.message?.content.trim() || 'Sorry, I am having trouble processing your request.';
            setChat([...newChat, { sender: 'bot', message: botMessage }]);
        } catch (error) {
            console.error('Error fetching data from API:', error);
            setChat([...newChat, { sender: 'bot', message: 'Sorry, I am having trouble processing your request.' }]);
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-window">
                {chat.map((c, index) => (
                    <div key={index} className={`chat-message ${c.sender}`}>
                        {c.message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter ingredients..."
                className="form-control"
            />
            <button onClick={handleSend} className="btn btn-primary mt-2">Send</button>
        </div>
    );
};

export default Chatbot;