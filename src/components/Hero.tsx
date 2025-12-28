import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern agriculture meets technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">{/* Apply animation */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Where Agriculture
            <span className="block text-crop-gold animate-float">Meets Technology</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Empowering farmers with AI-powered crop advisory, real-time weather insights,
            pest diagnosis, and market intelligence. Simple technology for smarter farming.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/signup">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-crop-gold mb-2 animate-glow">50K+</div>
              <div className="text-sm md:text-base text-white/80">Farmers Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-crop-gold mb-2 animate-glow">85%</div>
              <div className="text-sm md:text-base text-white/80">Yield Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-crop-gold mb-2 animate-glow">24/7</div>
              <div className="text-sm md:text-base text-white/80">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-crop-gold mb-2 animate-glow">15+</div>
              <div className="text-sm md:text-base text-white/80">Languages</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// hey
