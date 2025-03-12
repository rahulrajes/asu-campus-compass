
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
}

export const ChatMessage = ({ message, isAi }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-slide-up",
        isAi ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] p-4 rounded-lg backdrop-blur-sm",
          isAi
            ? "bg-white/80 border border-gray-200"
            : "bg-asu-maroon text-white"
        )}
      >
        <p className="text-sm md:text-base leading-relaxed">{message}</p>
      </div>
    </div>
  );
};
