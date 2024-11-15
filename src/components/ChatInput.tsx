import { useState } from "react";
import { Bold, Italic, Link, Smile, PaperclipIcon, Send } from "lucide-react";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-chat-border bg-white p-4">
      <div className="flex items-center gap-2 rounded-lg border border-chat-border bg-white p-2">
        <div className="flex gap-1">
          <button type="button" className="p-2 text-chat-text-secondary hover:text-primary">
            <Bold className="h-4 w-4" />
          </button>
          <button type="button" className="p-2 text-chat-text-secondary hover:text-primary">
            <Italic className="h-4 w-4" />
          </button>
          <button type="button" className="p-2 text-chat-text-secondary hover:text-primary">
            <Link className="h-4 w-4" />
          </button>
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-transparent px-2 py-1 focus:outline-none"
        />
        <div className="flex gap-1">
          <button type="button" className="p-2 text-chat-text-secondary hover:text-primary">
            <Smile className="h-4 w-4" />
          </button>
          <button type="button" className="p-2 text-chat-text-secondary hover:text-primary">
            <PaperclipIcon className="h-4 w-4" />
          </button>
          <button
            type="submit"
            className="rounded bg-primary px-3 py-1 text-white transition-colors hover:bg-primary-hover"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;