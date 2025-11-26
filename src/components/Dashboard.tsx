import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ThermometerSun, 
  Droplets, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin
} from "lucide-react";
import weatherImage from "@/assets/weather-dashboard.png";
import marketImage from "@/assets/market-trends.png";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Your Personalized Farming Dashboard
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get real-time insights, recommendations, and alerts all in one place. 
            Make data-driven decisions to optimize your farm's performance.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          {/* Header Card */}
          <Card className="mb-8 overflow-hidden border-2 border-primary/10 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MapPin className="mr-2 h-6 w-6" />
                    Rajesh Kumar's Farm
                  </CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Pune, Maharashtra • 5.2 acres • Wheat & Soybean
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    <Calendar className="mr-1 h-4 w-4" />
                    Kharif Season
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    <CheckCircle className="mr-1 h-4 w-4" />
                    Active
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weather & Alerts Column */}
            <div className="space-y-6">
              <Card className="border-accent/20 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-accent">
                    <ThermometerSun className="mr-2 h-5 w-5" />
                    Today's Weather
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">28°C</div>
                      <div className="text-muted-foreground">Partly Cloudy</div>
                    </div>
                    <img src={weatherImage} alt="Weather" className="w-16 h-16 rounded-lg object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Humidity</div>
                      <div className="font-semibold">75%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Rain Chance</div>
                      <div className="font-semibold">20%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-warning/20 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-warning">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Active Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-warning rounded-full mt-2"></div>
                    <div className="text-sm">
                      <div className="font-medium">Irrigation Reminder</div>
                      <div className="text-muted-foreground">Water your soybean field in 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-success rounded-full mt-2"></div>
                    <div className="text-sm">
                      <div className="font-medium">Pest Check</div>
                      <div className="text-muted-foreground">Monitor for aphids this week</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Market Insights Column */}
            <div className="space-y-6">
              <Card className="border-crop-gold/20 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-crop-gold">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Market Prices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={marketImage} alt="Market Trends" className="w-full h-32 rounded-lg object-cover mb-4" />
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Wheat</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-success">₹2,250/qtl</div>
                        <div className="text-xs text-success">+5.2%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Soybean</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-destructive">₹4,850/qtl</div>
                        <div className="text-xs text-destructive">-2.1%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-primary">
                    <Droplets className="mr-2 h-5 w-5" />
                    Irrigation Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Field A (Wheat)</span>
                      <Badge variant="outline" className="border-success text-success">Optimal</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Field B (Soybean)</span>
                      <Badge variant="outline" className="border-warning text-warning">Needs Water</Badge>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground mb-1">Daily Water Usage</div>
                      <div className="text-lg font-bold text-accent">2,450 L</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations Column */}
            <div className="space-y-6">
              <Card className="border-success/20 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-success">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    AI Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-success/10 rounded-lg p-4">
                    <div className="font-medium text-sm mb-2">Today's Priority</div>
                    <div className="text-sm text-muted-foreground mb-3">
                      Apply organic fertilizer to wheat field for better yield
                    </div>
                    <Button variant="success" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium">Crop Health Score</div>
                      <div className="flex items-center mt-1">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div className="bg-success h-2 rounded-full w-4/5"></div>
                        </div>
                        <span className="ml-2 text-xs font-bold">85%</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="font-medium">Expected Yield</div>
                      <div className="text-lg font-bold text-primary">4.2 tons/acre</div>
                      <div className="text-xs text-success">+15% vs last season</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-accent">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <span>Report Pest Issue</span>
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <span>Check Market Rates</span>
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <span>Schedule Irrigation</span>
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Explore Full Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
// hey
