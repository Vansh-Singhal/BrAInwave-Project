import React, { useState } from "react";
import ChatMessage from "../components/ChatMessage/ChatMessage";
import MessageInput from "../components/MessageInput/MessageInput";
import CommunityInfo from "../components/CommunityInfo/CommunityInfo";

const CommunityChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      username: "John Doe",
      avatarUrl: "/placeholder.svg?height=40&width=40",
      message: "Hey everyone! Excited to join this community. Anyone working on calculus problems?",
      timestamp: "2:30 PM",
      isSelf: false,
    },
    {
      id: 2,
      username: "Jane Smith",
      avatarUrl: "/placeholder.svg?height=40&width=40",
      message: "Welcome, John! I'm currently working on integration techniques. What specific area are you focusing on?",
      timestamp: "2:35 PM",
      isSelf: false,
    },
    {
      id: 3,
      username: "You",
      avatarUrl: "/placeholder.svg?height=40&width=40",
      message: "Hi everyone! I'm new here too. I'm struggling with limits. Any good resources you can recommend?",
      timestamp: "2:40 PM",
      isSelf: true,
    },
  ]);

  const sendMessage = (newMessage) => {
    const newMessageObj = {
      id: messages.length + 1,
      username: "You",
      avatarUrl: "/placeholder.svg?height=40&width=40",
      message: newMessage,
      timestamp: new Date().toLocaleTimeString(),
      isSelf: true,
    };
    setMessages([...messages, newMessageObj]);
  };

  return (
    <div>
      <main className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-indigo-500 text-white p-4">
            <h1 className="text-2xl font-bold">Math Enthusiasts</h1>
            <p className="text-sm">Members: 11 | Created: Jan 1, 2023</p>
          </div>
          <div className="flex flex-col h-[600px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  username={msg.username}
                  avatarUrl={msg.avatarUrl}
                  message={msg.message}
                  timestamp={msg.timestamp}
                  isSelf={msg.isSelf}
                />
              ))}
            </div>
            <MessageInput sendMessage={sendMessage} />
          </div>
        </div>
        <CommunityInfo />
      </main>
    </div>
  );
};

export default CommunityChat;
