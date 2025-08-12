import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MessageSquare, 
  Smile, 
  Frown, 
  Zap, 
  Heart,
  Leaf,
  Sparkles
} from "lucide-react";
import moodImage from "@/assets/mood-detection.jpg";

interface Mood {
  name: string;
  icon: React.ReactNode;
  color: string;
  confidence: number;
}

const MoodDetection = () => {
  const [selectedMode, setSelectedMode] = useState<'camera' | 'text'>('camera');
  const [textInput, setTextInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectedMoods, setDetectedMoods] = useState<Mood[]>([
    { name: 'Happy', icon: <Smile className="w-4 h-4" />, color: 'bg-mood-happy', confidence: 85 },
    { name: 'Energetic', icon: <Zap className="w-4 h-4" />, color: 'bg-mood-energetic', confidence: 72 },
    { name: 'Calm', icon: <Leaf className="w-4 h-4" />, color: 'bg-mood-calm', confidence: 45 }
  ]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      // Update moods based on mode
      if (selectedMode === 'text' && textInput) {
        // Simulate text-based mood analysis
        const newMoods = [
          { name: 'Determined', icon: <Sparkles className="w-4 h-4" />, color: 'bg-primary', confidence: 90 },
          { name: 'Focused', icon: <Zap className="w-4 h-4" />, color: 'bg-mood-energetic', confidence: 78 }
        ];
        setDetectedMoods(newMoods);
      }
    }, 2000);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Emotion Detection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let AI understand your mood through facial recognition or text analysis to curate the perfect soundtrack
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Detection Interface */}
          <div className="space-y-6">
            <Card className="p-6 glass-card">
              <div className="flex space-x-4 mb-6">
                <Button
                  variant={selectedMode === 'camera' ? 'default' : 'outline'}
                  onClick={() => setSelectedMode('camera')}
                  className="flex-1"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Camera
                </Button>
                <Button
                  variant={selectedMode === 'text' ? 'default' : 'outline'}
                  onClick={() => setSelectedMode('text')}
                  className="flex-1"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Text
                </Button>
              </div>

              {selectedMode === 'camera' ? (
                <div className="space-y-4">
                  <div className="aspect-video bg-player-bg rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Camera feed will appear here</p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="w-full bg-primary hover:bg-primary-glow"
                  >
                    {isAnalyzing ? 'Analyzing Expression...' : 'Detect Mood from Camera'}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Input
                    placeholder="How are you feeling today? Describe your mood..."
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    className="min-h-20"
                  />
                  <Button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !textInput.trim()}
                    className="w-full bg-primary hover:bg-primary-glow"
                  >
                    {isAnalyzing ? 'Analyzing Text...' : 'Detect Mood from Text'}
                  </Button>
                </div>
              )}
            </Card>

            {/* Detected Moods */}
            {detectedMoods.length > 0 && (
              <Card className="p-6 glass-card">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-primary" />
                  Detected Emotions
                </h3>
                <div className="space-y-3">
                  {detectedMoods.map((mood, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${mood.color}`}>
                          {mood.icon}
                        </div>
                        <span className="font-medium">{mood.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {mood.confidence}%
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90">
                  Generate Mood-Based Playlist
                </Button>
              </Card>
            )}
          </div>

          {/* Mood Visualization */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={moodImage} 
                alt="Mood Detection Visualization" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating mood indicators */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 animate-float">
                  <div className="bg-mood-happy/80 backdrop-blur-sm rounded-full p-3">
                    <Smile className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="bg-mood-sad/80 backdrop-blur-sm rounded-full p-3">
                    <Frown className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-24 left-32 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="bg-mood-romantic/80 backdrop-blur-sm rounded-full p-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-32 right-24 animate-float" style={{ animationDelay: '3s' }}>
                  <div className="bg-mood-energetic/80 backdrop-blur-sm rounded-full p-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodDetection;