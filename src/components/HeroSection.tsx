import { Button } from "@/components/ui/button";
import { Play, Mic, Brain, Music } from "lucide-react";
import heroImage from "@/assets/hero-music.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Music Player Interface" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <Music className="w-8 h-8 text-primary-glow opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <Brain className="w-10 h-10 text-mood-calm opacity-50" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '4s' }}>
          <Mic className="w-6 h-6 text-mood-energetic opacity-70" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-glow via-primary to-mood-romantic bg-clip-text text-transparent">
            Melody Mind
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            AI-Powered Music Player
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience music like never before with intelligent mood detection, 
            AI-curated playlists, and voice-controlled interactions that adapt to your emotions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary-glow transition-all duration-300 animate-pulse-glow">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Start Listening
          </Button>
          <Button variant="outline" size="lg" className="border-primary-glow text-primary-glow hover:bg-primary-glow hover:text-background">
            <Brain className="w-5 h-5 mr-2" />
            Detect My Mood
          </Button>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6 rounded-xl">
            <Brain className="w-12 h-12 text-primary-glow mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Mood Detection</h3>
            <p className="text-sm text-muted-foreground">
              AI analyzes your facial expressions or text input to understand your emotional state
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <Music className="w-12 h-12 text-mood-calm mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Smart Playlists</h3>
            <p className="text-sm text-muted-foreground">
              Intelligent curation based on your mood, listening history, and music preferences
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <Mic className="w-12 h-12 text-mood-energetic mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Voice Control</h3>
            <p className="text-sm text-muted-foreground">
              Hands-free music control with natural voice commands and speech recognition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;