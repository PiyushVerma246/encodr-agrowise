import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, Leaf, Droplets, MapPin, TrendingUp } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-agriculture.jpg";

const CropAdvisoryPage = () => {
  const [formData, setFormData] = useState({
    location: "",
    soilType: "",
    irrigationType: "",
    landSize: "",
    previousCrop: "",
    budget: ""
  });
  const [recommendation, setRecommendation] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock AI recommendation - in real app, this would call AI API
    setRecommendation({
      crop: "Tomato",
      season: "Kharif 2025",
      yield: "25-30 tons/hectare",
      investment: "₹60,000/hectare",
      profit: "₹1,20,000/hectare",
      fertilizers: ["NPK 19:19:19", "Urea", "DAP"],
      tips: [
        "Plant during June-July for best results",
        "Maintain 60cm spacing between plants",
        "Apply organic compost 15 days before sowing",
        "Install drip irrigation for water efficiency"
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
              AI Crop Advisory
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get personalized crop recommendations based on your soil, climate, and farming conditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-success" />
                  Farm Details
                </CardTitle>
                <CardDescription>
                  Provide your farm information to get AI-powered crop recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="location">Farm Location</Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="e.g., Pune, Maharashtra"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, soilType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clay">Clay Soil</SelectItem>
                        <SelectItem value="loamy">Loamy Soil</SelectItem>
                        <SelectItem value="sandy">Sandy Soil</SelectItem>
                        <SelectItem value="silt">Silt Soil</SelectItem>
                        <SelectItem value="black">Black Cotton Soil</SelectItem>
                        <SelectItem value="red">Red Soil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="irrigationType">Irrigation Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, irrigationType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select irrigation method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drip">Drip Irrigation</SelectItem>
                        <SelectItem value="sprinkler">Sprinkler Irrigation</SelectItem>
                        <SelectItem value="flood">Flood Irrigation</SelectItem>
                        <SelectItem value="rainfed">Rain-fed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="landSize">Land Size (in acres)</Label>
                    <Input
                      id="landSize"
                      type="number"
                      placeholder="e.g., 2.5"
                      value={formData.landSize}
                      onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="previousCrop">Previous Crop (if any)</Label>
                    <Input
                      id="previousCrop"
                      type="text"
                      placeholder="e.g., Wheat, Rice, Cotton"
                      value={formData.previousCrop}
                      onChange={(e) => setFormData({ ...formData, previousCrop: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget">Investment Budget (₹)</Label>
                    <Input
                      id="budget"
                      type="number"
                      placeholder="e.g., 50000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Get AI Recommendation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recommendation Display */}
            {recommendation ? (
              <div className="animate-fade-in space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="h-5 w-5 mr-2 text-success" />
                      Recommended Crop: {recommendation.crop}
                    </CardTitle>
                    <CardDescription>
                      Based on your farm conditions and AI analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="font-semibold text-primary">Season</div>
                        <div className="text-muted-foreground">{recommendation.season}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Expected Yield</div>
                        <div className="text-muted-foreground">{recommendation.yield}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Investment Required</div>
                        <div className="text-muted-foreground">{recommendation.investment}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Expected Profit</div>
                        <div className="text-success font-semibold">{recommendation.profit}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Fertilizer Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.fertilizers.map((fertilizer, index) => (
                        <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                          {fertilizer}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Farming Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendation.tips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                          <div className="text-muted-foreground">{tip}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full animate-fade-in p-8 bg-muted/30 rounded-xl border-2 border-dashed border-muted-foreground/25">
                <div className="relative mb-8 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <img
                    src={heroImage}
                    alt="Smart Farming"
                    className="relative w-full max-w-md rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-primary">AI Confidence</span>
                      <span className="text-success font-bold">99.7%</span>
                    </div>
                  </div>
                </div>

                <div className="text-center max-w-md">
                  <h3 className="text-2xl font-bold text-primary mb-3">Ready to Optimize Your Yield?</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our advanced AI analyzes soil health, weather patterns, and market trends to suggest the most profitable crops for your specific land conditions.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground bg-white/50 p-2 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span>Higher Profits</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground bg-white/50 p-2 rounded-lg">
                      <Leaf className="h-4 w-4 text-success" />
                      <span>Sustainable</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CropAdvisoryPage;
// hey
