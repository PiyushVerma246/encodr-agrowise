import { Button } from "@/components/ui/button";
import { Sprout, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Sprout className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">AgroWise</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Where Agriculture Meets Technology</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost">Login</Button>
          <Button variant="hero">Get Started</Button>
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
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#features" className="block py-2 text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#dashboard" className="block py-2 text-foreground hover:text-primary transition-colors">Dashboard</a>
            <a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors">Contact</a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">Login</Button>
              <Button variant="hero" className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;