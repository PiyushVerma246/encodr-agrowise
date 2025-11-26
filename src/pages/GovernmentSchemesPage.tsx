import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, CheckCircle, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const GovernmentSchemesPage = () => {
  const schemes = [
    {
      id: "pm-kisan",
      name: "PM-KISAN Samman Nidhi",
      description: "Direct income support to farmers providing ₹6,000 per year",
      amount: "₹6,000/year",
      eligibility: "Small & Marginal Farmers",
      status: "Active",
      deadline: "Open throughout year",
      benefits: [
        "₹2,000 every 4 months directly to bank account",
        "No application fee required",
        "Covers all cultivable land",
        "Automatic renewal"
      ]
    },
    {
      id: "pmfby",
      name: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme protecting farmers against crop losses",
      amount: "Up to ₹2 lakh/hectare",
      eligibility: "All farmers",
      status: "Active",
      deadline: "Kharif: July 31, Rabi: December 31",
      benefits: [
        "Premium as low as 2% for food crops",
        "Coverage against all non-preventable risks",
        "Quick settlement within 60 days",
        "Technology-based loss assessment"
      ]
    },
    {
      id: "pmksy",
      name: "Pradhan Mantri Krishi Sinchayee Yojana",
      description: "Irrigation development and water conservation scheme",
      amount: "Up to ₹10 lakh",
      eligibility: "Individual/Group farmers",
      status: "Active",
      deadline: "State-wise applications",
      benefits: [
        "Drip and sprinkler irrigation subsidy",
        "Water storage and harvesting",
        "Micro-irrigation systems",
        "Per drop more crop initiative"
      ]
    },
    {
      id: "soil-health",
      name: "Soil Health Card Scheme",
      description: "Free soil testing and health cards for farmers",
      amount: "Free of cost",
      eligibility: "All farmers",
      status: "Active",
      deadline: "Ongoing",
      benefits: [
        "Free soil testing every 2 years",
        "Customized fertilizer recommendations",
        "Crop-specific nutrient management",
        "Digital soil health cards"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Government Schemes
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay updated on agricultural subsidies, schemes, and funding opportunities with eligibility checks and application guidance
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up">
            <Card>
              <CardContent className="pt-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Active Schemes</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-success mx-auto mb-3" />
                <div className="text-2xl font-bold text-success">12 Cr+</div>
                <div className="text-muted-foreground">Beneficiaries</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle className="h-12 w-12 text-crop-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-crop-gold">₹2.8 Lakh Cr</div>
                <div className="text-muted-foreground">Total Allocation</div>
              </CardContent>
            </Card>
          </div>

          {/* Schemes List */}
          <div className="space-y-8">
            {schemes.map((scheme, index) => (
              <Card key={scheme.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div>
                      <CardTitle className="text-2xl text-primary">{scheme.name}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {scheme.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="secondary" className="text-success">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {scheme.status}
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {scheme.deadline}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-primary">Financial Benefit</div>
                        <div className="text-2xl font-bold text-success">{scheme.amount}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Eligibility</div>
                        <div className="text-muted-foreground">{scheme.eligibility}</div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="lg:col-span-2">
                      <div className="font-semibold text-primary mb-3">Key Benefits</div>
                      <div className="grid md:grid-cols-2 gap-2">
                        {scheme.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="h-1.5 w-1.5 bg-success rounded-full mt-2"></div>
                            <div className="text-sm text-muted-foreground">{benefit}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t">
                    <Link to={`/schemes/${scheme.id}`}>
                      <Button variant="default" className="w-full sm:w-auto">
                        View Details & Apply
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Official Website
                    </Button>
                    <Button variant="ghost" className="w-full sm:w-auto">
                      Check Eligibility
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How to Apply Section */}
          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-center">How to Apply for Government Schemes</CardTitle>
              <CardDescription className="text-center">
                Follow these simple steps to apply for any government scheme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div className="font-semibold">Check Eligibility</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Verify if you meet the scheme criteria
                  </div>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div className="font-semibold">Gather Documents</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Collect required documents and certificates
                  </div>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-success font-bold">3</span>
                  </div>
                  <div className="font-semibold">Submit Application</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Apply online or visit nearest center
                  </div>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-crop-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-crop-gold font-bold">4</span>
                  </div>
                  <div className="font-semibold">Track Status</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Monitor application progress online
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GovernmentSchemesPage;
// hey
