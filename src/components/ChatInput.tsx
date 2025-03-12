
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex gap-2 p-4 bg-white/50 backdrop-blur-sm border-t border-gray-200"
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about ASU extracurriculars..."
        className="flex-1 bg-white/50"
        disabled={isLoading}
      />
      <Button
        type="submit"
        disabled={isLoading || !message.trim()}
        className="bg-asu-maroon hover:bg-asu-maroon/90"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};
