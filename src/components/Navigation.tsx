import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Music, 
  Brain, 
  Mic, 
  BarChart3, 
  Settings,
  User,
  Menu,
  X
} from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <Music className="w-4 h-4" />, label: "Player", href: "#player" },
    { icon: <Brain className="w-4 h-4" />, label: "Mood", href: "#mood" },
    { icon: <Mic className="w-4 h-4" />, label: "Voice", href: "#voice" },
    { icon: <BarChart3 className="w-4 h-4" />, label: "Analytics", href: "#analytics" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Melody Mind
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 hover:bg-primary/10 hover:text-primary"
                onClick={() => {
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-glow">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              ))}
              <div className="border-t border-border pt-2 mt-4">
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4" />
                  <span className="ml-2">Settings</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4" />
                  <span className="ml-2">Profile</span>
                </Button>
                <Button className="w-full mt-2 bg-primary hover:bg-primary-glow">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;