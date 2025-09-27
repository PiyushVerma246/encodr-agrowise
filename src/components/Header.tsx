import { Button } from "@/components/ui/button";
import { Sprout, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Sprout className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">AgroWise</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Where Agriculture Meets Technology</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/features" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/features' ? 'text-primary font-semibold' : ''}`}>Features</Link>
          <Link to="/government-schemes" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/government-schemes' ? 'text-primary font-semibold' : ''}`}>Schemes</Link>
          <Link to="/dashboard" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/dashboard' ? 'text-primary font-semibold' : ''}`}>Dashboard</Link>
          <Link to="/about" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-semibold' : ''}`}>About</Link>
          <Link to="/contact" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/contact' ? 'text-primary font-semibold' : ''}`}>Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="hero">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur animate-slide-in-right">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/features" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link to="/government-schemes" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Schemes</Link>
            <Link to="/dashboard" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
            <Link to="/about" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="pt-4 space-y-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" className="w-full">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;