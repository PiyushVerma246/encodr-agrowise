import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bug, Upload, Camera, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

const PestDetectionPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [detection, setDetection] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result);
        setIsAnalyzing(true);
        
        // Mock AI analysis - in real app, this would call AI API
        setTimeout(() => {
          setDetection({
            pest: "Aphids (Green Peach Aphid)",
            confidence: "94%",
            severity: "Moderate",
            treatment: {
              immediate: [
                "Spray neem oil solution (2-3 ml per liter of water)",
                "Remove heavily infested leaves",
                "Increase air circulation around plants"
              ],
              preventive: [
                "Install yellow sticky traps",
                "Introduce ladybugs as natural predators",
                "Apply organic insecticidal soap weekly",
                "Maintain proper plant spacing"
              ]
            },
            chemicals: [
              {name: "Imidacloprid", dosage: "0.5ml per liter", timing: "Early morning or evening"},
              {name: "Thiamethoxam", dosage: "0.4g per liter", timing: "Apply when temperature is below 30°C"}
            ]
          });
          setIsAnalyzing(false);
        }, 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Pest & Disease Detection
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Upload crop images for instant AI-powered pest and disease identification with treatment recommendations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upload Section */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bug className="h-5 w-5 mr-2 text-warning" />
                  Upload Crop Image
                </CardTitle>
                <CardDescription>
                  Take a clear photo of the affected plant part for accurate diagnosis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Image Upload */}
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    {uploadedImage ? (
                      <div>
                        <img 
                          src={uploadedImage} 
                          alt="Uploaded crop" 
                          className="max-w-full h-64 object-cover mx-auto rounded-lg"
                        />
                        <p className="text-sm text-muted-foreground mt-2">Image uploaded successfully</p>
                      </div>
                    ) : (
                      <div>
                        <Upload className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">
                          Drag and drop your crop image here, or click to browse
                        </p>
                      </div>
                    )}
                  </div>

                  {/* File Input */}
                  <div>
                    <Label htmlFor="image-upload">Choose Image File</Label>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="mt-2"
                    />
                  </div>

                  {/* Camera Capture Button */}
                  <Button variant="outline" className="w-full">
                    <Camera className="h-4 w-4 mr-2" />
                    Take Photo with Camera
                  </Button>

                  {/* Tips */}
                  <Card className="bg-accent/5">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-accent mb-3">Photography Tips:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Take photos in natural daylight</li>
                        <li>• Focus on the affected area</li>
                        <li>• Avoid blurry or dark images</li>
                        <li>• Include some healthy parts for comparison</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Results */}
            <div className="space-y-6">
              {isAnalyzing && (
                <Card className="animate-pulse">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Analyzing image with AI...</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {detection && (
                <div className="animate-fade-in space-y-6">
                  {/* Detection Result */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                        Detection Result
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="font-semibold text-warning text-lg">{detection.pest}</div>
                          <div className="text-sm text-muted-foreground">
                            Confidence: {detection.confidence} • Severity: {detection.severity}
                          </div>
                        </div>
                        <div className="h-2 bg-warning/20 rounded-full">
                          <div className="h-2 bg-warning rounded-full w-[94%]"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Immediate Treatment */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
                        Immediate Treatment
                      </CardTitle>
                      <CardDescription>Take these actions immediately</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {detection.treatment.immediate.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                            <div className="text-muted-foreground">{step}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Chemical Treatment */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Chemical Treatment Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {detection.chemicals.map((chemical, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="font-semibold text-primary">{chemical.name}</div>
                            <div className="text-sm text-muted-foreground">
                              Dosage: {chemical.dosage} • {chemical.timing}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Preventive Measures */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-success" />
                        Preventive Measures
                      </CardTitle>
                      <CardDescription>Prevent future infestations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {detection.treatment.preventive.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="h-2 w-2 bg-success rounded-full mt-2"></div>
                            <div className="text-muted-foreground">{step}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {!uploadedImage && !isAnalyzing && (
                <div className="flex items-center justify-center h-64 animate-fade-in">
                  <div className="text-center">
                    <Bug className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Upload an image to start pest and disease detection
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PestDetectionPage;
// hey
