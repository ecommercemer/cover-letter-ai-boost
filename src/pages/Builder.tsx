
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Upload, CheckIcon, FileTextIcon, DownloadIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Builder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    language: "",
    jobTitle: "",
    city: "",
    country: "",
    minSalary: "",
    availability: "",
    cv: null as File | null,
    coverLetter: null as File | null,
    certificates: null as File | null,
    jobAd: ""
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
    if (file) {
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateCoverLetter = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
      toast({
        title: "Cover Letter Generated!",
        description: "Your personalized cover letter has been created successfully.",
      });
    }, 3000);
  };

  const generatedCoverLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Software Engineer position at TechCorp GmbH. With my extensive background in full-stack development and passion for innovative technology solutions, I am excited about the opportunity to contribute to your team's continued success.

In my previous role as a Software Engineer, I successfully led the development of scalable web applications using modern technologies including React, Node.js, and cloud platforms. My experience aligns perfectly with the requirements outlined in your job posting, particularly in areas of:

• Full-stack development with React and Node.js
• Database design and optimization
• Agile development methodologies
• Team collaboration and code review processes

I am particularly drawn to TechCorp GmbH's commitment to technological innovation and your recent expansion into AI-driven solutions. My background in machine learning integration and API development would allow me to make immediate contributions to your product development goals.

I am available for immediate start and am excited about the possibility of discussing how my skills and enthusiasm can benefit your team. Thank you for considering my application.

Best regards,
${formData.fullName || "Your Name"}`;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+49 123 456 7890"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language *</Label>
                <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="fa">Persian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Desired Job Title *</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  placeholder="e.g., Software Engineer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="e.g., Berlin"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  placeholder="e.g., Germany"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="minSalary">Minimum Salary (optional)</Label>
                <Input
                  id="minSalary"
                  value={formData.minSalary}
                  onChange={(e) => handleInputChange("minSalary", e.target.value)}
                  placeholder="e.g., €65,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Availability *</Label>
                <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="2weeks">2 weeks notice</SelectItem>
                    <SelectItem value="1month">1 month notice</SelectItem>
                    <SelectItem value="3months">3 months notice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cv">Upload CV (PDF/DOC) *</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {formData.cv ? formData.cv.name : "Click to upload or drag and drop"}
                  </p>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload("cv", e.target.files?.[0] || null)}
                    className="hidden"
                    id="cv-upload"
                  />
                  <Label htmlFor="cv-upload">
                    <Button variant="outline" type="button">Choose File</Button>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Upload existing Cover Letter (optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {formData.coverLetter ? formData.coverLetter.name : "Upload for reference"}
                  </p>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload("coverLetter", e.target.files?.[0] || null)}
                    className="hidden"
                    id="cover-letter-upload"
                  />
                  <Label htmlFor="cover-letter-upload">
                    <Button variant="outline" type="button">Choose File</Button>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="certificates">Upload Certificates (optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {formData.certificates ? formData.certificates.name : "Upload relevant certificates"}
                  </p>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    onChange={(e) => handleFileUpload("certificates", e.target.files?.[0] || null)}
                    className="hidden"
                    id="certificates-upload"
                  />
                  <Label htmlFor="certificates-upload">
                    <Button variant="outline" type="button">Choose File</Button>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="jobAd">Job Advertisement *</Label>
              <Textarea
                id="jobAd"
                value={formData.jobAd}
                onChange={(e) => handleInputChange("jobAd", e.target.value)}
                placeholder="Paste the complete job advertisement here or provide a link to the job posting..."
                rows={10}
                className="min-h-[200px]"
              />
            </div>

            {!isGenerated && (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Ready to Generate</p>
                      <p className="text-sm text-blue-700">
                        All required information collected. Click generate to create your personalized cover letter.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {isGenerating && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="font-medium">Generating your cover letter...</p>
                    <p className="text-sm text-muted-foreground">This may take a few moments</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {isGenerated && (
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <CheckIcon className="w-5 h-5" />
                    Cover Letter Generated Successfully!
                  </CardTitle>
                  <CardDescription className="text-green-700">
                    Your personalized cover letter is ready for review and download.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white p-4 rounded-lg border mb-4 max-h-60 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm font-sans">
                      {generatedCoverLetter}
                    </pre>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button>
                      <DownloadIcon className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline">
                      <FileTextIcon className="w-4 h-4 mr-2" />
                      Open in Google Docs
                    </Button>
                    <Button variant="outline">
                      Send to Job Platform
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center text-2xl font-bold gradient-bg bg-clip-text text-transparent">
            <ArrowLeft className="w-5 h-5 mr-2 text-foreground" />
            CoverLetterAI
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Your Cover Letter</h1>
          <p className="text-muted-foreground">
            Follow the steps below to generate your personalized AI cover letter
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Job Preferences"}
              {currentStep === 3 && "Document Upload"}
              {currentStep === 4 && "Job Advertisement & Generation"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Enter your basic contact information and preferences"}
              {currentStep === 2 && "Specify your job requirements and availability"}
              {currentStep === 3 && "Upload your CV and supporting documents"}
              {currentStep === 4 && "Provide job details and generate your cover letter"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-3">
            {currentStep === totalSteps && !isGenerated && (
              <Button
                onClick={generateCoverLetter}
                disabled={isGenerating}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                    Generating...
                  </>
                ) : (
                  "Generate Cover Letter"
                )}
              </Button>
            )}

            {currentStep < totalSteps && (
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
