import { format } from "date-fns";

interface ChatMessageProps {
  message: {
    id: number;
    content: string;
    sender: string;
    timestamp: Date;
    avatar: string;
  };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className="message-bubble animate-message-in group">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary-light text-center leading-10">
          {message.sender.charAt(0)}
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{message.sender}</span>
            <span className="text-xs text-chat-text-secondary">
              {format(message.timestamp, "h:mm a")}
            </span>
          </div>
          <p className="text-[15px] leading-relaxed">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;