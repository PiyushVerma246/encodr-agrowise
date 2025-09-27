import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  Download,
  CreditCard,
  Phone,
  MapPin,
  User,
  Calendar,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

const PMKisanSchemePage = () => {
  const [eligibilityCheck, setEligibilityCheck] = useState({
    landSize: "",
    category: "",
    income: ""
  });
  const [isEligible, setIsEligible] = useState(null);

  const handleEligibilityCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple eligibility logic
    const landSizeNum = parseFloat(eligibilityCheck.landSize);
    if (landSizeNum <= 2 && eligibilityCheck.category === "farmer") {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };

  const documents = [
    "Aadhaar Card",
    "Bank Account Details (Passbook)",
    "Land Ownership Documents (Khatauni/Khesra)",
    "Caste Certificate (if applicable)",
    "Income Certificate",
    "Mobile Number (for OTP verification)"
  ];

  const steps = [
    {
      title: "Online Registration",
      description: "Visit PM-KISAN official website and click 'New Farmer Registration'",
      time: "10 minutes"
    },
    {
      title: "Fill Application Form",
      description: "Enter personal details, land records, and bank information",
      time: "15 minutes"
    },
    {
      title: "Upload Documents",
      description: "Scan and upload required documents (max 1MB each)",
      time: "10 minutes"
    },
    {
      title: "Verification",
      description: "Village-level verification and approval by local authorities",
      time: "7-14 days"
    },
    {
      title: "Benefit Transfer",
      description: "Direct transfer of ₹2,000 every 4 months to your bank account",
      time: "After approval"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              PM-KISAN Samman Nidhi Yojana
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Direct income support of ₹6,000 per year to small and marginal farmer families
            </p>
            <div className="flex justify-center mt-6">
              <Badge variant="secondary" className="px-6 py-2 text-base">
                <CheckCircle className="h-4 w-4 mr-2" />
                Active Scheme • Launched in 2019
              </Badge>
            </div>
          </div>

          {/* Key Information */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="animate-fade-in-up">
              <CardContent className="pt-6 text-center">
                <CreditCard className="h-16 w-16 text-success mx-auto mb-4" />
                <div className="text-3xl font-bold text-success mb-2">₹6,000</div>
                <div className="text-muted-foreground">Annual Benefit</div>
                <div className="text-sm text-muted-foreground mt-2">
                  ₹2,000 every 4 months
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6 text-center">
                <User className="h-16 w-16 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">12+ Cr</div>
                <div className="text-muted-foreground">Beneficiaries</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Farmers enrolled nationwide
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6 text-center">
                <Calendar className="h-16 w-16 text-crop-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-crop-gold mb-2">Open</div>
                <div className="text-muted-foreground">Application</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Year-round registration
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Eligibility Check */}
          <Card className="mb-12 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-success" />
                Check Your Eligibility
              </CardTitle>
              <CardDescription>
                Quick eligibility check to see if you qualify for PM-KISAN scheme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEligibilityCheck} className="grid md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="landSize">Land Size (in acres)</Label>
                  <Input
                    id="landSize"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 1.5"
                    value={eligibilityCheck.landSize}
                    onChange={(e) => setEligibilityCheck({...eligibilityCheck, landSize: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setEligibilityCheck({...eligibilityCheck, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farmer">Farmer</SelectItem>
                      <SelectItem value="non-farmer">Non-farmer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="income">Annual Income</Label>
                  <Select onValueChange={(value) => setEligibilityCheck({...eligibilityCheck, income: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-2-lakh">Below ₹2 lakh</SelectItem>
                      <SelectItem value="2-5-lakh">₹2-5 lakh</SelectItem>
                      <SelectItem value="above-5-lakh">Above ₹5 lakh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button type="submit" className="w-full">
                    Check Eligibility
                  </Button>
                </div>
              </form>

              {isEligible !== null && (
                <div className={`mt-6 p-4 rounded-lg ${isEligible ? 'bg-success/10 border border-success/20' : 'bg-destructive/10 border border-destructive/20'}`}>
                  <div className={`flex items-center ${isEligible ? 'text-success' : 'text-destructive'}`}>
                    {isEligible ? <CheckCircle className="h-5 w-5 mr-2" /> : <AlertCircle className="h-5 w-5 mr-2" />}
                    <span className="font-semibold">
                      {isEligible ? 'You are eligible for PM-KISAN scheme!' : 'You may not be eligible for this scheme.'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {isEligible 
                      ? 'You can proceed with the application process below.'
                      : 'Small and marginal farmers with up to 2 hectares of cultivable land are eligible.'
                    }
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card className="mb-12 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Required Documents
              </CardTitle>
              <CardDescription>
                Keep these documents ready before starting your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold text-accent">Important Notes:</div>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• All documents should be clear and readable</li>
                      <li>• File size should not exceed 1MB for uploads</li>
                      <li>• Accepted formats: PDF, JPG, PNG</li>
                      <li>• Ensure bank account is linked to Aadhaar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Process */}
          <Card className="mb-12 animate-fade-in-up">
            <CardHeader>
              <CardTitle>Step-by-Step Application Process</CardTitle>
              <CardDescription>
                Follow these steps to complete your PM-KISAN application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-primary">{step.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.time}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits & Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-success">Scheme Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <div className="font-semibold">Direct Bank Transfer</div>
                      <div className="text-sm text-muted-foreground">₹2,000 transferred directly every 4 months</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <div className="font-semibold">No Intermediaries</div>
                      <div className="text-sm text-muted-foreground">Direct government to farmer transfer</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <div className="font-semibold">Automatic Renewal</div>
                      <div className="text-sm text-muted-foreground">No need to reapply each year</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <div className="font-semibold">Free Application</div>
                      <div className="text-sm text-muted-foreground">No application or processing fee</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-primary">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">SMS Updates</div>
                      <div className="text-sm text-muted-foreground">Get payment notifications on mobile</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Pan-India Coverage</div>
                      <div className="text-sm text-muted-foreground">Available across all states and UTs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Online Tracking</div>
                      <div className="text-sm text-muted-foreground">Track application and payment status online</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Family Coverage</div>
                      <div className="text-sm text-muted-foreground">One application covers entire farmer family</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-success hover:bg-success/90">
                <ExternalLink className="h-5 w-5 mr-2" />
                Apply Now (Official Website)
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="h-5 w-5 mr-2" />
                Check Application Status
              </Button>
              <Button variant="outline" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download Guidelines
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              For assistance, call PM-KISAN Helpline: <strong>155261</strong> or <strong>011-24300606</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PMKisanSchemePage;