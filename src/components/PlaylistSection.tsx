import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Heart, 
  MoreHorizontal, 
  Shuffle,
  Clock,
  TrendingUp,
  Sparkles,
  Music
} from "lucide-react";
import musicWaves from "@/assets/music-waves.jpg";

interface Playlist {
  id: string;
  name: string;
  description: string;
  trackCount: number;
  duration: string;
  mood: string;
  moodColor: string;
  aiGenerated: boolean;
  cover: string;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  mood: string;
  isPlaying?: boolean;
}

const PlaylistSection = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  
  const playlists: Playlist[] = [
    {
      id: '1',
      name: 'Happy Vibes Mix',
      description: 'AI-curated uplifting tracks based on your mood',
      trackCount: 24,
      duration: '1h 32m',
      mood: 'happy',
      moodColor: 'bg-mood-happy',
      aiGenerated: true,
      cover: musicWaves
    },
    {
      id: '2',
      name: 'Calm Evening',
      description: 'Peaceful melodies for relaxation',
      trackCount: 18,
      duration: '54m',
      mood: 'calm',
      moodColor: 'bg-mood-calm',
      aiGenerated: true,
      cover: musicWaves
    },
    {
      id: '3',
      name: 'Energy Boost',
      description: 'High-energy tracks for motivation',
      trackCount: 32,
      duration: '2h 15m',
      mood: 'energetic',
      moodColor: 'bg-mood-energetic',
      aiGenerated: true,
      cover: musicWaves
    }
  ];

  const tracks: Track[] = [
    { id: '1', title: 'Sunshine Dreams', artist: 'AI Orchestra', duration: '3:24', mood: 'happy', isPlaying: true },
    { id: '2', title: 'Digital Harmony', artist: 'Synthetic Souls', duration: '4:12', mood: 'happy' },
    { id: '3', title: 'Neon Nights', artist: 'Electric Pulse', duration: '3:45', mood: 'energetic' },
    { id: '4', title: 'Peaceful Waters', artist: 'Nature AI', duration: '5:18', mood: 'calm' },
    { id: '5', title: 'Cosmic Journey', artist: 'Space Harmonics', duration: '4:33', mood: 'calm' }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-mood-romantic bg-clip-text text-transparent">
            Smart Playlists
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-generated playlists that adapt to your mood, time of day, and listening preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Playlists */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-primary" />
              AI Recommendations
            </h3>
            {playlists.map((playlist) => (
              <Card 
                key={playlist.id}
                className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-glow glass-card ${
                  selectedPlaylist === playlist.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedPlaylist(playlist.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <img 
                      src={playlist.cover} 
                      alt={playlist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${playlist.moodColor} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-sm">{playlist.name}</h4>
                      {playlist.aiGenerated && (
                        <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                          AI
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{playlist.description}</p>
                    <div className="flex items-center text-xs text-muted-foreground space-x-3">
                      <span className="flex items-center">
                        <Music className="w-3 h-3 mr-1" />
                        {playlist.trackCount}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {playlist.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate New Playlist
            </Button>
          </div>

          {/* Track List */}
          <div className="lg:col-span-2">
            <Card className="p-6 glass-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Happy Vibes Mix</h3>
                  <p className="text-sm text-muted-foreground">24 tracks • 1h 32m • AI Generated</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-primary hover:bg-primary-glow">
                    <Play className="w-4 h-4 mr-2" />
                    Play All
                  </Button>
                  <Button size="sm" variant="outline">
                    <Shuffle className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                {tracks.map((track, index) => (
                  <div 
                    key={track.id}
                    className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-card/50 transition-colors ${
                      track.isPlaying ? 'bg-primary/10' : ''
                    }`}
                  >
                    <div className="w-8 text-center">
                      {track.isPlaying ? (
                        <div className="flex space-x-0.5 justify-center">
                          <div className="w-0.5 h-4 bg-primary animate-waveform" />
                          <div className="w-0.5 h-4 bg-primary animate-waveform" style={{ animationDelay: '0.1s' }} />
                          <div className="w-0.5 h-4 bg-primary animate-waveform" style={{ animationDelay: '0.2s' }} />
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`font-medium ${track.isPlaying ? 'text-primary' : ''}`}>
                        {track.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{track.artist}</p>
                    </div>

                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        track.mood === 'happy' ? 'border-mood-happy text-mood-happy' :
                        track.mood === 'calm' ? 'border-mood-calm text-mood-calm' :
                        'border-mood-energetic text-mood-energetic'
                      }`}
                    >
                      {track.mood}
                    </Badge>

                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {track.duration}
                    </span>

                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-card rounded-lg border">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Mood Match: 94%</p>
                    <p className="text-xs text-muted-foreground">
                      This playlist perfectly matches your current emotional state
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;