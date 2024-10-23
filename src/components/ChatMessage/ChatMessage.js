import React from "react";

const ChatMessage = ({ username, avatarUrl, message, timestamp, isSelf }) => {
  return (
    <div className={`flex items-start ${isSelf ? "justify-end" : ""}`}>
      {!isSelf && <img src={avatarUrl} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />}
      <div className={isSelf ? "text-right" : ""}>
        <p className="font-semibold">{username}</p>
        <p className={`${isSelf ? "bg-indigo-500 text-white" : "bg-gray-100"} p-2 rounded-lg mt-1`}>
          {message}
        </p>
        <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
