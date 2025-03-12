
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { SuggestedTopics } from "@/components/SuggestedTopics";

interface Message {
  text: string;
  isAi: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm your ASU Extracurriculars Assistant. I can help you discover and learn about clubs, organizations, and activities at Arizona State University. What would you like to know?",
      isAi: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    // Add user message
    setMessages((prev) => [...prev, { text: message, isAi: false }]);
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I understand you're interested in ASU extracurriculars. I'm a demo response - in the full version, I'll provide detailed information about specific clubs, activities, and organizations at ASU. What specific aspects would you like to learn more about?",
          isAi: true,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleTopicSelect = (topic: string) => {
    handleSendMessage(topic);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-asu-gold/10 to-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="py-8">
          <h1 className="text-4xl font-bold text-asu-maroon mb-2 animate-fade-in">
            ASU Activities Explorer
          </h1>
          <p className="text-gray-600 mb-8 animate-fade-in">
            Discover and learn about extracurricular opportunities at Arizona State
            University
          </p>

          <div className="bg-white/30 rounded-lg shadow-lg border border-gray-200 backdrop-blur-sm">
            <div className="h-[60vh] overflow-y-auto p-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  message={message.text}
                  isAi={message.isAi}
                />
              ))}
              {messages.length === 1 && (
                <div className="mt-4">
                  <SuggestedTopics onSelectTopic={handleTopicSelect} />
                </div>
              )}
            </div>
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
