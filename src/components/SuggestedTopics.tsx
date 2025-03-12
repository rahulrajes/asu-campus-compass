
import { Button } from "@/components/ui/button";

interface SuggestedTopicsProps {
  onSelectTopic: (topic: string) => void;
}

export const SuggestedTopics = ({ onSelectTopic }: SuggestedTopicsProps) => {
  const topics = [
    "Sports clubs at ASU",
    "Academic societies",
    "Cultural organizations",
    "Volunteer opportunities",
    "Greek life",
    "Professional development clubs",
  ];

  return (
    <div className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fade-in">
      <h3 className="text-lg font-semibold text-asu-maroon mb-3">
        Suggested Topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Button
            key={topic}
            variant="outline"
            className="bg-white/50 hover:bg-asu-gold/10 border-asu-maroon/20 text-asu-maroon"
            onClick={() => onSelectTopic(topic)}
          >
            {topic}
          </Button>
        ))}
      </div>
    </div>
  );
};
