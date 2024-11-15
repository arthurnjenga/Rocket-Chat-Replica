import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";

const Index = () => {
  const [messages] = useState([
    {
      id: 1,
      content: "Hey everyone! How's it going?",
      sender: "John Doe",
      timestamp: new Date(Date.now() - 3600000),
      avatar: "",
    },
    {
      id: 2,
      content: "Working on the new feature. Making good progress!",
      sender: "Jane Smith",
      timestamp: new Date(Date.now() - 1800000),
      avatar: "",
    },
    {
      id: 3,
      content: "That's great to hear! Let me know if you need any help.",
      sender: "Mike Johnson",
      timestamp: new Date(Date.now() - 900000),
      avatar: "",
    },
  ]);

  return (
    <div className="chat-container">
      <ChatSidebar />
      <div className="flex flex-col">
        <div className="flex h-16 items-center justify-between border-b border-chat-border bg-white px-6">
          <div>
            <h2 className="text-lg font-semibold">#general</h2>
            <p className="text-sm text-chat-text-secondary">3 members</p>
          </div>
        </div>
        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Index;