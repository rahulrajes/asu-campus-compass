import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { ChatMessage } from "@/components/ChatMessage";
import { SuggestedTopics } from "@/components/SuggestedTopics";

interface Message {
  text: string;
  isAi: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm your ASU Campus Compass. I can help you discover and learn about clubs, organizations, and activities at Arizona State University. What would you like to know?",
      isAi: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    setMessages((prev) => [...prev, { text: message, isAi: false }]);
    setIsLoading(true);

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
    <div className="min-h-[calc(100vh-6rem)] px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="py-8">
          <div style={{ backgroundColor: '#E0E0E0' }} className="rounded-lg shadow-xl border border-gray-200 backdrop-blur-sm">
            <div className="h-[calc(100vh-16rem)] overflow-y-auto p-4">
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
            <div className="border-t border-gray-300">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.elements.namedItem("message") as HTMLInputElement;
                  if (input.value.trim()) {
                    handleSendMessage(input.value);
                    input.value = "";
                  }
                }}
                className="flex gap-2 p-4"
              >
                <Input
                  name="message"
                  placeholder="Ask about ASU extracurriculars..."
                  className="flex-1 bg-white/80"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-asu-maroon hover:bg-asu-maroon/90 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
