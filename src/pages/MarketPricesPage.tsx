import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, MapPin, Calendar, Search } from "lucide-react";
import { useState } from "react";

const MarketPricesPage = () => {
  const [searchData, setSearchData] = useState({
    crop: "",
    location: "",
    market: ""
  });
  const [priceData, setPriceData] = useState(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock market data - in real app, this would call market API
    setPriceData({
      crop: searchData.crop || "Tomato",
      currentPrice: 45,
      yesterdayPrice: 42,
      weekAgo: 38,
      monthAgo: 52,
      trend: "up",
      markets: [
        {name: "Pune Market", price: 45, change: +3, quality: "Grade A"},
        {name: "Mumbai Market", price: 48, change: +2, quality: "Grade A"},
        {name: "Nashik Market", price: 42, change: +5, quality: "Grade B"},
        {name: "Aurangabad Market", price: 40, change: -1, quality: "Grade A"}
      ],
      forecast: [
        {period: "Next Week", price: "₹47-50", trend: "Stable"},
        {period: "Next Month", price: "₹40-45", trend: "Declining"}
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
              Market Intelligence
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Live market prices, trend analysis, and optimal selling time recommendations
            </p>
          </div>

          {/* Search Form */}
          <Card className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2 text-crop-gold" />
                Search Market Prices
              </CardTitle>
              <CardDescription>
                Find current market prices for your crops
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="grid md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="crop">Crop</Label>
                  <Select onValueChange={(value) => setSearchData({...searchData, crop: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tomato">Tomato</SelectItem>
                      <SelectItem value="onion">Onion</SelectItem>
                      <SelectItem value="potato">Potato</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Maharashtra"
                    value={searchData.location}
                    onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="market">Specific Market</Label>
                  <Input
                    id="market"
                    type="text"
                    placeholder="e.g., Pune Mandi"
                    value={searchData.market}
                    onChange={(e) => setSearchData({...searchData, market: e.target.value})}
                  />
                </div>

                <div className="flex items-end">
                  <Button type="submit" className="w-full">
                    Search Prices
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Price Data Display */}
          {priceData && (
            <div className="animate-fade-in space-y-8">
              {/* Current Price Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{priceData.crop} Prices</span>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Last updated: Today, 3:30 PM
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">₹{priceData.currentPrice}</div>
                      <div className="text-muted-foreground">per kg (today)</div>
                      <div className={`flex items-center justify-center mt-2 ${priceData.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                        {priceData.trend === 'up' ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                        +₹{priceData.currentPrice - priceData.yesterdayPrice} from yesterday
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Yesterday</div>
                      <div className="text-2xl font-bold text-muted-foreground">₹{priceData.yesterdayPrice}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Week Ago</div>
                      <div className="text-2xl font-bold text-muted-foreground">₹{priceData.weekAgo}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Month Ago</div>
                      <div className="text-2xl font-bold text-muted-foreground">₹{priceData.monthAgo}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Market Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle>Market Comparison</CardTitle>
                  <CardDescription>
                    Compare prices across different markets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {priceData.markets.map((market, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-accent" />
                          <div>
                            <div className="font-semibold">{market.name}</div>
                            <div className="text-sm text-muted-foreground">{market.quality}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">₹{market.price}</div>
                          <div className={`text-sm flex items-center ${market.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                            {market.change >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                            {market.change >= 0 ? '+' : ''}₹{market.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Price Forecast */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-crop-gold" />
                    Price Forecast
                  </CardTitle>
                  <CardDescription>
                    AI-powered price predictions to help you decide when to sell
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {priceData.forecast.map((forecast, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="font-semibold text-primary">{forecast.period}</div>
                        <div className="text-2xl font-bold my-2">{forecast.price}</div>
                        <div className="text-sm text-muted-foreground">Trend: {forecast.trend}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Selling Recommendation */}
              <Card className="bg-success/5 border-success/20">
                <CardHeader>
                  <CardTitle className="text-success">Selling Recommendation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-success rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold">Best Market</div>
                        <div className="text-muted-foreground">Mumbai Market offers highest price (₹48/kg)</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-warning rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold">Timing</div>
                        <div className="text-muted-foreground">Sell this week before prices decline next month</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold">Quality Grade</div>
                        <div className="text-muted-foreground">Focus on Grade A quality for better prices</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {!priceData && (
            <div className="flex items-center justify-center h-64 animate-fade-in">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Search for a crop to view current market prices and trends
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketPricesPage;