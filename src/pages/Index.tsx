
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, CheckIcon, UploadIcon, Settings, FileTextIcon, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const steps = [
    {
      icon: UploadIcon,
      title: "Upload Your CV & Info",
      description: "Share your resume and job preferences through our Telegram bot or web interface."
    },
    {
      icon: Settings,
      title: "AI Generates Tailored Cover Letter",
      description: "Our AI analyzes the job posting and creates a personalized cover letter in your preferred language."
    },
    {
      icon: CheckIcon,
      title: "We Apply on Your Behalf",
      description: "Automatically submit applications to LinkedIn, StepStone, Xing, and other platforms."
    },
    {
      icon: FileTextIcon,
      title: "Daily Progress Reports",
      description: "Get detailed reports on applications sent, responses, and optimization suggestions."
    }
  ];

  const platforms = [
    "LinkedIn", "StepStone", "Xing", "IranTalent", "Indeed", "Monster"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Software Engineer",
      text: "Landed 3 interviews in my first week using this platform. The AI-generated cover letters were spot-on!",
      rating: 5
    },
    {
      name: "Ahmad R.",
      role: "Marketing Manager",
      text: "Finally, a tool that understands German job market requirements. Saved me hours of writing.",
      rating: 5
    },
    {
      name: "Maria K.",
      role: "Data Analyst",
      text: "The Telegram integration makes it so easy to apply to jobs on the go. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-bg bg-clip-text text-transparent">
            CoverLetterAI
          </div>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Create Your Perfect <br />
            <span className="text-yellow-300">Cover Letter with AI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            From Telegram to Google Docs to Job Platforms – Automated in Minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Start on Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              View Demo
            </Button>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto w-8 h-8 text-blue-200" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Supported Job Platforms</h2>
          <p className="text-xl text-muted-foreground mb-12">
            We integrate with the most popular job platforms worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Job Search?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of job seekers who've automated their application process
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-bg bg-clip-text text-transparent mb-4">
                CoverLetterAI
              </h3>
              <p className="text-muted-foreground">
                Automating job applications with AI-powered cover letters.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
                <li><Link to="/builder" className="hover:text-foreground">Cover Letter Builder</Link></li>
                <li><Link to="/reports" className="hover:text-foreground">Reports</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CoverLetterAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
