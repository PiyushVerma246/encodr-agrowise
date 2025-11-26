import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudRain, Sun, Wind, Droplets, AlertTriangle } from "lucide-react";
import { useState } from "react";

const WeatherAdvisoryPage = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock weather data - in real app, this would call weather API
    setWeatherData({
      current: { temp: 28, humidity: 65, windSpeed: 12, condition: "Partly Cloudy" },
      forecast: [
        { day: "Today", temp: "28°C", condition: "Partly Cloudy", rain: "10%" },
        { day: "Tomorrow", temp: "32°C", condition: "Sunny", rain: "0%" },
        { day: "Day 3", temp: "26°C", condition: "Light Rain", rain: "80%" },
        { day: "Day 4", temp: "30°C", condition: "Sunny", rain: "5%" },
        { day: "Day 5", temp: "29°C", condition: "Cloudy", rain: "20%" },
      ]
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Weather Intelligence
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get real-time weather forecasts, rainfall predictions, and irrigation timing recommendations
            </p>
          </div>

          {/* Location Input Form */}
          <Card className="max-w-md mx-auto mb-12 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CloudRain className="h-5 w-5 mr-2 text-accent" />
                Enter Your Location
              </CardTitle>
              <CardDescription>
                Provide your location to get personalized weather advisory
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLocationSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="location">Location (City, State)</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Pune, Maharashtra"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Get Weather Forecast
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Weather Data Display */}
          {weatherData && (
            <div className="animate-fade-in">
              {/* Current Weather */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="h-5 w-5 mr-2 text-crop-gold" />
                    Current Weather - {location}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{weatherData.current.temp}°C</div>
                      <div className="text-muted-foreground">{weatherData.current.condition}</div>
                    </div>
                    <div className="flex items-center">
                      <Droplets className="h-5 w-5 mr-2 text-accent" />
                      <div>
                        <div className="font-semibold">Humidity</div>
                        <div className="text-muted-foreground">{weatherData.current.humidity}%</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Wind className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <div className="font-semibold">Wind Speed</div>
                        <div className="text-muted-foreground">{weatherData.current.windSpeed} km/h</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                      <div>
                        <div className="font-semibold">Advisory</div>
                        <div className="text-muted-foreground">Good for irrigation</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5-Day Forecast */}
              <Card>
                <CardHeader>
                  <CardTitle>5-Day Weather Forecast</CardTitle>
                  <CardDescription>
                    Plan your farming activities with accurate weather predictions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-5 gap-4">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="text-center p-4 border rounded-lg">
                        <div className="font-semibold text-primary">{day.day}</div>
                        <div className="text-2xl font-bold my-2">{day.temp}</div>
                        <div className="text-sm text-muted-foreground">{day.condition}</div>
                        <div className="text-sm text-accent mt-2">Rain: {day.rain}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Farming Advisory */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-success">Today's Farming Advisory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-success rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold">Irrigation Recommendation</div>
                        <div className="text-muted-foreground">Skip irrigation today. Light rain expected in 2 days.</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-warning rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold">Pesticide Application</div>
                        <div className="text-muted-foreground">Avoid pesticide application due to upcoming rain.</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold">Field Work</div>
                        <div className="text-muted-foreground">Good conditions for field preparation and sowing.</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeatherAdvisoryPage;
// hey
