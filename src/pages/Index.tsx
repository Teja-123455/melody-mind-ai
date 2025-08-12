import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MusicPlayer from "@/components/MusicPlayer";
import MoodDetection from "@/components/MoodDetection";
import PlaylistSection from "@/components/PlaylistSection";
import VoiceControl from "@/components/VoiceControl";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="player" className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-mood-energetic bg-clip-text text-transparent">
                Intelligent Music Player
              </h2>
              <p className="text-muted-foreground">
                Experience music with AI-enhanced audio processing and smart controls
              </p>
            </div>
            <MusicPlayer />
          </div>
        </section>

        <section id="mood">
          <MoodDetection />
        </section>

        <PlaylistSection />

        <section id="voice">
          <VoiceControl />
        </section>

        <section id="analytics">
          <AnalyticsDashboard />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded"></div>
            <span className="text-lg font-semibold">Melody Mind</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            AI-Powered Music Player - Where emotion meets technology
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Artificial Intelligence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
