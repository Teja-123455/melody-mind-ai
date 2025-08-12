import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Heart, 
  Headphones,
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

const AnalyticsDashboard = () => {
  const stats = [
    { 
      label: "Total Listening Time", 
      value: "142h 23m", 
      change: "+12% from last month",
      icon: <Clock className="w-5 h-5" />,
      color: "text-primary"
    },
    { 
      label: "Songs Played", 
      value: "2,847", 
      change: "+205 this week",
      icon: <Headphones className="w-5 h-5" />,
      color: "text-mood-energetic"
    },
    { 
      label: "Favorite Mood", 
      value: "Energetic", 
      change: "38% of sessions",
      icon: <Heart className="w-5 h-5" />,
      color: "text-mood-romantic"
    },
    { 
      label: "AI Accuracy", 
      value: "94%", 
      change: "+2% improvement",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-mood-calm"
    }
  ];

  const moodTrends = [
    { mood: "Energetic", percentage: 38, color: "bg-mood-energetic" },
    { mood: "Happy", percentage: 24, color: "bg-mood-happy" },
    { mood: "Calm", percentage: 20, color: "bg-mood-calm" },
    { mood: "Romantic", percentage: 12, color: "bg-mood-romantic" },
    { mood: "Sad", percentage: 6, color: "bg-mood-sad" }
  ];

  const timeOfDay = [
    { time: "Morning", percentage: 25, peak: "Energetic music" },
    { time: "Afternoon", percentage: 35, peak: "Focus playlists" },
    { time: "Evening", percentage: 30, peak: "Calm & romantic" },
    { time: "Night", percentage: 10, peak: "Ambient sounds" }
  ];

  const topArtists = [
    { name: "AI Orchestra", plays: "234 plays", trend: "+15%" },
    { name: "Synthetic Souls", plays: "189 plays", trend: "+8%" },
    { name: "Digital Harmony", plays: "167 plays", trend: "+23%" },
    { name: "Electric Pulse", plays: "142 plays", trend: "+5%" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-mood-calm to-primary bg-clip-text text-transparent">
            Your Music Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep insights into your listening habits, mood patterns, and AI recommendation performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 glass-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-card/50 ${stat.color}`}>
                  {stat.icon}
                </div>
                <TrendingUp className="w-4 h-4 text-mood-calm" />
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <Badge variant="outline" className="text-xs text-mood-calm border-mood-calm">
                  {stat.change}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mood Analysis */}
          <Card className="p-6 glass-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-primary" />
                Mood Distribution
              </h3>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Last 30 days
              </Badge>
            </div>

            <div className="space-y-4">
              {moodTrends.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.mood}</span>
                    <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-player-track rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-card rounded-lg">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Peak Mood Time:</span>
                <span className="text-sm text-primary">Evenings (7-9 PM)</span>
              </div>
            </div>
          </Card>

          {/* Time of Day Analysis */}
          <Card className="p-6 glass-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                Listening Patterns
              </h3>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                This week
              </Badge>
            </div>

            <div className="space-y-6">
              {timeOfDay.map((period, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">{period.time}</span>
                      <p className="text-xs text-muted-foreground">{period.peak}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{period.percentage}%</span>
                  </div>
                  <div className="w-full bg-player-track rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-primary transition-all duration-1000"
                      style={{ width: `${period.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Top Artists */}
        <Card className="p-6 glass-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              Top Artists This Month
            </h3>
            <Badge variant="outline" className="border-primary text-primary">
              Based on AI recommendations
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topArtists.map((artist, index) => (
              <div key={index} className="p-4 bg-card/30 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-background">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{artist.name}</p>
                    <p className="text-xs text-muted-foreground">{artist.plays}</p>
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className="text-xs border-mood-calm text-mood-calm"
                >
                  {artist.trend}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Insights */}
        <Card className="p-6 glass-card mt-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-primary" />
            AI Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-card rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">94%</div>
              <p className="text-sm text-muted-foreground">Mood detection accuracy</p>
            </div>
            <div className="text-center p-4 bg-gradient-card rounded-lg">
              <div className="text-2xl font-bold text-mood-energetic mb-2">7.2</div>
              <p className="text-sm text-muted-foreground">Average songs per session</p>
            </div>
            <div className="text-center p-4 bg-gradient-card rounded-lg">
              <div className="text-2xl font-bold text-mood-calm mb-2">89%</div>
              <p className="text-sm text-muted-foreground">Playlist satisfaction rate</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;