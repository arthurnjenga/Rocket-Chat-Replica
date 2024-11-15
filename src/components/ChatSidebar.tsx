import { Hash, MessageSquare, ChevronDown, Users } from "lucide-react";

const ChatSidebar = () => {
  const channels = [
    { id: 1, name: "general", unread: 2 },
    { id: 2, name: "random", unread: 0 },
    { id: 3, name: "announcements", unread: 5 },
  ];

  const directMessages = [
    { id: 1, name: "John Doe", status: "online" },
    { id: 2, name: "Jane Smith", status: "offline" },
    { id: 3, name: "Mike Johnson", status: "away" },
  ];

  return (
    <div className="flex h-full flex-col border-r border-chat-border bg-chat-sidebar">
      <div className="flex h-16 items-center justify-between border-b border-chat-border px-4">
        <div className="flex items-center gap-2">
          <img src="/gre8-logo.png" alt="Gre8 Intelligence" className="h-8 w-auto" />
          <h1 className="text-lg font-semibold">Gre8 Intelligence Comm</h1>
        </div>
        <ChevronDown className="h-5 w-5 text-chat-text-secondary" />
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between px-2">
            <span className="text-sm font-medium text-chat-text-secondary">Channels</span>
            <span className="text-xs text-chat-text-secondary">{channels.length}</span>
          </div>
          {channels.map((channel) => (
            <button key={channel.id} className="sidebar-item w-full">
              <Hash className="h-4 w-4 text-chat-text-secondary" />
              <span className="flex-1 text-left">{channel.name}</span>
              {channel.unread > 0 && (
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-white">
                  {channel.unread}
                </span>
              )}
            </button>
          ))}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between px-2">
            <span className="text-sm font-medium text-chat-text-secondary">Direct Messages</span>
            <Users className="h-4 w-4 text-chat-text-secondary" />
          </div>
          {directMessages.map((dm) => (
            <button key={dm.id} className="sidebar-item w-full">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-primary-light text-center leading-8">
                  {dm.name.charAt(0)}
                </div>
                <div
                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                    dm.status === "online"
                      ? "bg-green-500"
                      : dm.status === "away"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                />
              </div>
              <span className="flex-1 text-left">{dm.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;