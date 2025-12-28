import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  CloudRain,
  Bug,
  TrendingUp,
  FileText,
  Smartphone,
  ArrowRight,
  Brain,
  Wifi,
  Shield,
  Zap
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FeaturesPage = () => {
  const navigate = useNavigate();
  const mainFeatures = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "AI Crop Advisory",
      description: "Advanced machine learning algorithms analyze your soil, climate, and farming history to provide personalized crop recommendations that can increase your yield by up to 85%.",
      features: ["Soil analysis integration", "Climate pattern recognition", "Yield prediction modeling", "Fertilizer optimization"],
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      link: "/crop-advisory"
    },
    {
      icon: <CloudRain className="h-8 w-8" />,
      title: "Weather Intelligence",
      description: "Real-time weather forecasts, rainfall predictions, and irrigation timing recommendations powered by multiple meteorological data sources.",
      features: ["7-day weather forecast", "Rainfall prediction", "Irrigation alerts", "Storm warnings"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      link: "/weather"
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Pest & Disease Detection",
      description: "Upload crop images for instant AI-powered pest and disease identification with detailed treatment recommendations and prevention strategies.",
      features: ["Image recognition AI", "Disease database", "Treatment recommendations", "Prevention guides"],
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      link: "/pest-detection"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Intelligence",
      description: "Live market prices, trend analysis, and optimal selling time recommendations to maximize your profits with real-time mandi data.",
      features: ["Live price updates", "Trend analysis", "Profit optimization", "Market forecasting"],
      color: "text-crop-gold",
      bgColor: "bg-crop-gold/10",
      borderColor: "border-crop-gold/20",
      link: "/market-prices"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Government Schemes",
      description: "Stay updated on agricultural subsidies, schemes, and funding opportunities with automated eligibility checks and application guidance.",
      features: ["Scheme updates", "Eligibility checker", "Application assistance", "Document guidance"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      link: "/government-schemes"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Voice Assistant",
      description: "Access all features through voice commands in your local language for easy, hands-free operation designed for all literacy levels.",
      features: ["Voice commands", "Multi-language support", "Hands-free operation", "Audio responses"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  ];

  const techFeatures = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered",
      description: "Advanced machine learning models trained on agricultural data"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "IoT Integration",
      description: "Connect with soil sensors and irrigation systems"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Private",
      description: "Your farm data is encrypted and protected"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Updates",
      description: "Instant notifications and live data streaming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Complete Agricultural Technology Suite
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover how AgroWise transforms traditional farming with cutting-edge AI, IoT,
              and data analytics to boost your productivity, reduce costs, and maximize profits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">AI-Powered</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">IoT Ready</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Multi-language</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">24/7 Support</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Six Powerful Modules for Smart Farming
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each module is designed to address specific farming challenges with
              advanced technology and farmer-friendly interfaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${feature.borderColor} dark:border-border bg-card/80 dark:bg-card backdrop-blur animate-scale-in ${feature.link ? 'cursor-pointer' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => feature.link && navigate(feature.link)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`h-16 w-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={feature.color}>
                        {feature.icon}
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2">Premium</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Built on Advanced Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform leverages the latest in agricultural technology to deliver
              reliable, scalable, and secure solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-accent">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Farming?
              </h2>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Join thousands of farmers who are already using AgroWise to boost their productivity,
                reduce costs, and increase profits with smart technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/crop-advisory">
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white">
                    Try Crop Advisory
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/weather">
                  <Button variant="outline" size="lg" className="bg-transparent text-primary hover:bg-transparent hover:text-white hover:border-white">
                    Check Weather
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
// hey
