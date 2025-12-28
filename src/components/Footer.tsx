import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="AgroWise" className="h-10 w-10 rounded-lg object-contain" />
              <div>
                <h3 className="text-xl font-bold">AgroWise</h3>
                <p className="text-sm text-primary-foreground/80 dark:text-gray-300">Where Agriculture Meets Technology</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 dark:text-gray-300 text-sm leading-relaxed">
              Empowering farmers with cutting-edge technology and AI-driven insights
              for sustainable and profitable agriculture.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/60 dark:text-gray-400 hover:text-accent dark:hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-primary-foreground/60 dark:text-gray-400 hover:text-accent dark:hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-primary-foreground/60 dark:text-gray-400 hover:text-accent dark:hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 text-crop-gold">Features</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">AI Crop Advisory</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Weather Intelligence</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Pest Detection</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Government Schemes</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-crop-gold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-crop-gold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 dark:text-gray-300">support@agrowise.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 dark:text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/80 dark:text-gray-300">
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
            <div className="text-sm text-primary-foreground/60 dark:text-gray-400">
              © 2025 AgroWise. All rights reserved. • Built by Team ENCODR
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// hey
