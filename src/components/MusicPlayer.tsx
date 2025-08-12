import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Heart,
  MoreHorizontal,
  Shuffle,
  Repeat
} from "lucide-react";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([0]);
  const [currentTrack] = useState<Track>({
    id: "1",
    title: "Moonlight Sonata (AI Enhanced)",
    artist: "Ludwig van Beethoven",
    album: "Classical AI Remixes",
    duration: "3:42",
    cover: "/placeholder.svg"
  });

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <Card className="bg-player-bg border-border p-6 rounded-2xl glass-card">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-player-bg rounded-md flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-sm" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{currentTrack.title}</h3>
          <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
          <p className="text-xs text-muted-foreground">{currentTrack.album}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <Slider
          value={progress}
          onValueChange={setProgress}
          max={100}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>0:00</span>
          <span>{currentTrack.duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
          <Shuffle className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
          <SkipBack className="w-5 h-5" />
        </Button>
        <Button 
          onClick={togglePlay}
          size="icon" 
          className="w-12 h-12 bg-primary hover:bg-primary-glow text-primary-foreground rounded-full animate-pulse-glow"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
          <SkipForward className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
          <Repeat className="w-4 h-4" />
        </Button>
      </div>

      {/* Volume */}
      <div className="flex items-center space-x-3">
        <Volume2 className="w-4 h-4 text-muted-foreground" />
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="flex-1"
        />
        <span className="text-xs text-muted-foreground w-8">{volume[0]}%</span>
      </div>

      {/* Waveform visualization */}
      <div className="flex items-end justify-center space-x-1 mt-6 h-12">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`w-1 bg-primary rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-waveform' : 'h-2'
            }`}
            style={{
              animationDelay: `${i * 0.1}s`,
              height: isPlaying ? `${Math.random() * 80 + 20}%` : '8px'
            }}
          />
        ))}
      </div>
    </Card>
  );
};

export default MusicPlayer;