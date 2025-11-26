import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lightbulb, 
  CloudRain, 
  Bug, 
  TrendingUp, 
  FileText, 
  Smartphone,
  ArrowRight 
} from "lucide-react";
import cropAnalysisIcon from "@/assets/crop-analysis-icon.png";

const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "AI Crop Advisory",
      description: "Get personalized crop recommendations based on your soil, climate, and farming history using advanced AI algorithms.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: <CloudRain className="h-8 w-8" />,
      title: "Weather Intelligence",
      description: "Real-time weather forecasts, rainfall predictions, and irrigation timing recommendations for optimal crop growth.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Pest & Disease Detection",
      description: "Upload crop images for instant AI-powered pest and disease identification with treatment recommendations.",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Intelligence",
      description: "Live market prices, trend analysis, and optimal selling time recommendations to maximize your profits.",
      color: "text-crop-gold",
      bgColor: "bg-crop-gold/10"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Government Schemes",
      description: "Stay updated on agricultural subsidies, schemes, and funding opportunities with eligibility guidance.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Voice Assistant",
      description: "Access all features through voice commands in your local language for easy, hands-free operation.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive Agricultural Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From crop planning to harvest, AgroWise provides intelligent insights 
            and actionable recommendations for every stage of your farming journey.
          </p>
        </div>

        {/* Main Feature Highlight */}
        <div className="mb-16">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-r from-white to-secondary/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-success/10 rounded-xl flex items-center justify-center mr-4">
                    <img src={cropAnalysisIcon} alt="AI Crop Analysis" className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">AI-Powered Crop Analysis</h3>
                    <p className="text-success font-semibold">Advanced Machine Learning</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Our sophisticated AI models analyze your soil conditions, local climate data, 
                  and farming patterns to provide personalized crop recommendations that can 
                  increase your yield by up to 85%.
                </p>
                <Button variant="success" size="lg">
                  Try AI Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="h-64 md:h-full bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center">
                <img src={cropAnalysisIcon} alt="Crop Analysis" className="h-32 w-32 opacity-50" />
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-white/80 backdrop-blur">
              <CardHeader className="pb-4">
                <div className={`h-16 w-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Farming?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Join thousands of farmers who are already using AgroWise to boost their productivity and profits.
            </p>
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
// hey
