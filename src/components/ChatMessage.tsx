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
          "max-w-[80%] rounded-lg px-4 py-2",
          isAi
            ? "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
            : "bg-asu-maroon dark:bg-asu-gold text-white dark:text-black"
        )}
      >
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};
