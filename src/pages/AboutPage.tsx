import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  Target,
  Award,
  Globe,
  Sprout,
  TrendingUp,
  Shield,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "50,000+", label: "Farmers Served", color: "text-primary" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "85%", label: "Yield Improvement", color: "text-success" },
    { icon: <Globe className="h-8 w-8" />, number: "15+", label: "Languages Supported", color: "text-accent" },
    { icon: <Award className="h-8 w-8" />, number: "24/7", label: "AI Support", color: "text-crop-gold" }
  ];

  const values = [
    {
      icon: <Sprout className="h-6 w-6" />,
      title: "Sustainability",
      description: "Promoting eco-friendly farming practices that protect our environment for future generations."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Accessibility",
      description: "Making advanced agricultural technology accessible to farmers of all backgrounds and literacy levels."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reliability",
      description: "Providing dependable, accurate insights that farmers can trust for critical decisions."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Empowerment",
      description: "Empowering small and marginal farmers with tools that were once only available to large enterprises."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Where Agriculture
              <span className="block text-accent">Meets Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              AgroWise is bridging the gap between traditional farming wisdom and cutting-edge technology, 
              empowering farmers to make data-driven decisions for sustainable and profitable agriculture.
            </p>
            <Badge variant="secondary" className="px-6 py-2 text-base">
              Founded in 2025 • Built by Team ENCODR
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className={`h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe that every farmer, regardless of their farm size or technical expertise, 
                  deserves access to the same advanced agricultural insights that were once exclusive 
                  to large agricultural corporations.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our platform combines artificial intelligence, machine learning, IoT sensors, 
                  and real-time data to provide personalized recommendations that help farmers 
                  increase their yields, reduce costs, and practice sustainable agriculture.
                </p>
                <Link to="/features">
                  <Button variant="hero" size="lg">
                    Explore Our Technology
                  </Button>
                </Link>
              </div>
              
              <div className="animate-fade-in-up">
                <Card className="border-2 border-primary/20 shadow-xl">
                  <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <Target className="mr-3 h-6 w-6" />
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      To become the leading agricultural technology platform in India and beyond, 
                      transforming millions of lives through smart farming solutions that promote 
                      food security, environmental sustainability, and economic prosperity for 
                      farming communities worldwide.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything we do is guided by these fundamental principles that shape our 
              approach to agricultural technology and farmer empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Impact */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Technology That Makes a Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our AI-driven platform processes thousands of data points from weather patterns, 
              soil conditions, market trends, and agricultural best practices to deliver 
              actionable insights that directly impact farmers' livelihoods.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">2.5M+</div>
                <div className="text-muted-foreground">Data Points Analyzed Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">99.7%</div>
                <div className="text-muted-foreground">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-crop-gold mb-2">₹15,000</div>
                <div className="text-muted-foreground">Average Income Increase per Farmer</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button variant="hero" size="lg">
                  See It In Action
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg">
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
// hey
