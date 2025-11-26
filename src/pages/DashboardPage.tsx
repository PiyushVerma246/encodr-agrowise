import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Settings,
  Bell,
  Download,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dashboard Header */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-fade-in">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-primary">Farm Dashboard</h1>
                <Badge variant="secondary" className="animate-glow">Live</Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Real-time insights and AI-powered recommendations for your farm
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                Alerts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Dashboard */}
      <div className="animate-fade-in-up">
        <Dashboard />
      </div>

      {/* Additional Dashboard Info */}
      <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-success mb-2">Real-time</div>
                  <p className="text-muted-foreground">Data Updates</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent mb-2">AI-Powered</div>
                  <p className="text-muted-foreground">Recommendations</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Monitoring</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Experience the Full Power of AgroWise
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                This is just a preview of what your personalized dashboard will look like. 
                Sign up to access real-time data, AI recommendations, and advanced analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button variant="hero" size="lg">
                    Create Your Dashboard
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg">
                    Explore All Features
                  </Button>
                </Link>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="mt-12 p-6 bg-warning/10 border border-warning/20 rounded-lg animate-fade-in">
              <div className="text-center">
                <h3 className="font-semibold text-warning-foreground mb-2">Demo Dashboard</h3>
                <p className="text-sm text-warning-foreground/80">
                  This dashboard shows sample data for demonstration. Connect Supabase to access 
                  real-time data from weather APIs, market sources, and IoT sensors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardPage;
// hey
