import { Sprout, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-accent to-crop-gold rounded-lg flex items-center justify-center">
                <Sprout className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AgroWise</h3>
                <p className="text-sm text-primary-foreground/80">Where Agriculture Meets Technology</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering farmers with cutting-edge technology and AI-driven insights 
              for sustainable and profitable agriculture.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 text-crop-gold">Features</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">AI Crop Advisory</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Weather Intelligence</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Pest Detection</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Government Schemes</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-crop-gold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-crop-gold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">support@agrowise.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  Pune, Maharashtra<br />
                  India 411001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2025 AgroWise. All rights reserved. • Built by Team ENCODR
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// hey
