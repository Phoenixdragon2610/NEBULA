import React from 'react';

interface Message {
  role: string;
  content: string;
}

interface NovaChatProps {
  conversation: Message[];
}

const NovaChat: React.FC<NovaChatProps> = ({ conversation }) => {
  return (
    <div className="space-y-4">
      {conversation.map((message, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            message.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'
          } max-w-3/4`}
        >
          <p className={`text-sm ${message.role === 'user' ? 'text-blue-800' : 'text-gray-800'}`}>
            {message.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NovaChat;