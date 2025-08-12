import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  MessageCircle,
  Zap,
  CheckCircle,
  Play,
  Pause,
  SkipForward,
  SkipBack
} from "lucide-react";

interface VoiceCommand {
  command: string;
  action: string;
  timestamp: string;
  status: 'completed' | 'processing' | 'failed';
}

const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [recentCommands, setRecentCommands] = useState<VoiceCommand[]>([
    { command: "Play my happy playlist", action: "Playing Happy Vibes Mix", timestamp: "2 mins ago", status: 'completed' },
    { command: "Skip to next song", action: "Skipped to Digital Harmony", timestamp: "5 mins ago", status: 'completed' },
    { command: "Lower the volume", action: "Volume set to 45%", timestamp: "8 mins ago", status: 'completed' }
  ]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setCurrentCommand("Listening...");
      setTimeout(() => {
        setCurrentCommand("I want to hear energetic music");
        setTimeout(() => {
          const newCommand: VoiceCommand = {
            command: "I want to hear energetic music",
            action: "Creating energetic playlist",
            timestamp: "now",
            status: 'completed'
          };
          setRecentCommands([newCommand, ...recentCommands.slice(0, 2)]);
          setCurrentCommand('');
          setIsListening(false);
        }, 2000);
      }, 1000);
    } else {
      setCurrentCommand('');
    }
  };

  const quickCommands = [
    { text: "Play music", icon: <Play className="w-4 h-4" /> },
    { text: "Pause", icon: <Pause className="w-4 h-4" /> },
    { text: "Next song", icon: <SkipForward className="w-4 h-4" /> },
    { text: "Previous song", icon: <SkipBack className="w-4 h-4" /> },
    { text: "Volume up", icon: <Volume2 className="w-4 h-4" /> },
    { text: "Play happy music", icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-mood-energetic to-primary bg-clip-text text-transparent">
            Voice Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Control your music naturally with voice commands. Just speak and let AI understand your intentions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voice Interface */}
          <Card className="p-8 text-center glass-card">
            <div className="mb-8">
              <Button
                onClick={toggleListening}
                size="lg"
                className={`w-24 h-24 rounded-full ${
                  isListening 
                    ? 'bg-mood-energetic hover:bg-mood-energetic/90 animate-pulse-glow' 
                    : 'bg-primary hover:bg-primary-glow'
                }`}
              >
                {isListening ? (
                  <MicOff className="w-8 h-8" />
                ) : (
                  <Mic className="w-8 h-8" />
                )}
              </Button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {isListening ? 'Listening...' : 'Tap to speak'}
              </h3>
              {currentCommand && (
                <div className="bg-card/50 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground">You said:</p>
                  <p className="font-medium">{currentCommand}</p>
                </div>
              )}
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>Try saying:</p>
              <div className="mt-2 space-y-1">
                <p>"Play my calm playlist"</p>
                <p>"I'm feeling energetic"</p>
                <p>"Skip to next song"</p>
                <p>"Set volume to 50%"</p>
              </div>
            </div>
          </Card>

          {/* Quick Commands & History */}
          <div className="space-y-6">
            {/* Quick Commands */}
            <Card className="p-6 glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-primary" />
                Quick Commands
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickCommands.map((cmd, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="justify-start text-left h-auto p-3"
                    onClick={() => {
                      const newCommand: VoiceCommand = {
                        command: cmd.text,
                        action: `Executed: ${cmd.text}`,
                        timestamp: "now",
                        status: 'completed'
                      };
                      setRecentCommands([newCommand, ...recentCommands.slice(0, 2)]);
                    }}
                  >
                    {cmd.icon}
                    <span className="ml-2 text-xs">{cmd.text}</span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Command History */}
            <Card className="p-6 glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                Recent Commands
              </h3>
              <div className="space-y-3">
                {recentCommands.map((cmd, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-card/30">
                    <div className="mt-1">
                      {cmd.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-mood-calm" />
                      ) : cmd.status === 'processing' ? (
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <div className="w-4 h-4 bg-mood-energetic rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">"{cmd.command}"</p>
                      <p className="text-xs text-muted-foreground">{cmd.action}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">{cmd.timestamp}</span>
                        <Badge 
                          variant={cmd.status === 'completed' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {cmd.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Natural Language</h4>
            <p className="text-sm text-muted-foreground">
              Speak naturally - AI understands context and intent
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-mood-energetic/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-mood-energetic" />
            </div>
            <h4 className="font-semibold mb-2">Instant Response</h4>
            <p className="text-sm text-muted-foreground">
              Lightning-fast command processing and execution
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-mood-calm/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-mood-calm" />
            </div>
            <h4 className="font-semibold mb-2">Smart Learning</h4>
            <p className="text-sm text-muted-foreground">
              Learns your preferences and improves over time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceControl;