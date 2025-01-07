import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        const response = await axios.post("http://localhost:8000/chat/", { user_input: input });
        setMessages([...messages, { user: input, bot: response.data.response }]);
        setInput("");
    };

    return (
        <div>
            <h1>MindEase Chat</h1>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}><strong>You:</strong> {msg.user}<br/><strong>Bot:</strong> {msg.bot}</p>
                ))}
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
