import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      value: "support@agrowise.in",
      description: "Get help via email within 24 hours",
      color: "text-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      value: "+91 98765 43210",
      description: "Call us for urgent issues",
      color: "text-success"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Address",
      value: "Pune, Maharashtra",
      description: "India 411001",
      color: "text-accent"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Support Hours",
      value: "24/7 Available",
      description: "AI support always online",
      color: "text-crop-gold"
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
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Have questions about AgroWise? Need help with your farming challenges? 
              Our team of agricultural experts and technical support is here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className={`h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 ${info.color}`}>
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-foreground mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <MessageCircle className="mr-3 h-6 w-6" />
                      Send us a Message
                    </CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-12 animate-scale-in">
                        <div className="h-16 w-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-success" />
                        </div>
                        <h3 className="text-xl font-bold text-success mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for contacting us. We'll respond within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Rajesh Kumar"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="farmer@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help you?"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your farming challenges or questions..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="hero"
                          className="w-full"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            "Sending Message..."
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <div className="animate-fade-in-up">
                <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-primary mb-2">How does AgroWise help increase crop yields?</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        AgroWise uses AI to analyze your soil conditions, weather patterns, and crop history 
                        to provide personalized recommendations for fertilizer application, irrigation timing, 
                        and pest management.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-primary mb-2">Is AgroWise suitable for small farmers?</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Absolutely! AgroWise is specifically designed for small and marginal farmers. 
                        Our platform offers affordable solutions with voice-based interfaces in local languages.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-primary mb-2">What languages does AgroWise support?</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We support 15+ regional languages including Hindi, Marathi, Tamil, Telugu, 
                        Gujarati, and many more, with both text and voice interfaces.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-primary mb-2">How accurate are the weather predictions?</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Our weather intelligence combines multiple meteorological data sources 
                        achieving 99.7% accuracy for local weather predictions and agricultural advisories.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-primary mb-2">Can I use AgroWise offline?</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Yes! AgroWise offers offline functionality for essential features like 
                        saved crop recommendations and cached weather data, with auto-sync when online.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
// hey
