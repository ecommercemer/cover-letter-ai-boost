import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, CheckIcon, UploadIcon, Settings, FileTextIcon, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
const Index = () => {
  const [language, setLanguage] = useState("en");
  const steps = [{
    icon: UploadIcon,
    title: "Upload Resume via Telegram",
    description: "Share your resume and job preferences through our Telegram bot interface."
  }, {
    icon: Settings,
    title: "Generate Cover Letter with AI",
    description: "Our AI analyzes the job posting and creates a personalized German cover letter."
  }, {
    icon: CheckIcon,
    title: "We Fill Out the Job Form for You",
    description: "Automatically complete and submit applications to job platforms on your behalf."
  }, {
    icon: FileTextIcon,
    title: "You Receive Reports via Telegram",
    description: "Get detailed progress reports and updates directly through Telegram notifications."
  }];
  const platforms = [{
    name: "LinkedIn",
    url: "https://www.linkedin.com"
  }, {
    name: "StepStone",
    url: "https://www.stepstone.de"
  }, {
    name: "Xing",
    url: "https://www.xing.com"
  }, {
    name: "IranTalent",
    url: "https://www.irantalent.com"
  }];
  const testimonials = [{
    name: "Sarah M.",
    role: "Software Engineer",
    text: "Landed 3 interviews in my first week using this platform. The AI-generated cover letters were perfect for the German job market!",
    rating: 5
  }, {
    name: "Ahmad R.",
    role: "Marketing Manager",
    text: "Finally, a tool that understands German job requirements. The Telegram integration makes everything so convenient.",
    rating: 5
  }, {
    name: "Maria K.",
    role: "Data Analyst",
    text: "The automated job applications saved me hours of work. Highly recommended for anyone job hunting in Germany!",
    rating: 5
  }];
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-bg bg-clip-text text-transparent bg-slate-500">
            AutoJobPilot
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/dashboard" className="hover:text-primary transition-colors">Features</Link>
            <Link to="/builder" className="hover:text-primary transition-colors">AI Cover Letter</Link>
            <Link to="/settings" className="hover:text-primary transition-colors">Auto-Apply Settings</Link>
            <Link to="/reports" className="hover:text-primary transition-colors">Daily Report</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇬🇧 English</SelectItem>
                <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                <SelectItem value="fa">🇮🇷 فارسی</SelectItem>
              </SelectContent>
            </Select>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI-Powered Job Application <br />
            <span className="text-yellow-300">Automation Platform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Apply to hundreds of jobs automatically while you sleep - from LinkedIn to StepStone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                Start Auto-Applying
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto w-8 h-8 text-blue-200" />
          </div>
        </div>
      </section>

      {/* Smart Job Flow */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">🧠 Smart Job Flow</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Connected Job Platforms</h2>
          <p className="text-xl text-muted-foreground mb-12">
            We automatically apply to jobs on the most popular platforms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                <Badge variant="secondary" className="text-lg py-2 px-4 cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {platform.name}
                </Badge>
              </a>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Job Search?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands who've automated their job applications with AI
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Start Auto-Applying Now
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
                AutoJobPilot
              </h3>
              <p className="text-muted-foreground">
                AI-powered job application automation for the modern job seeker.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
                <li><Link to="/builder" className="hover:text-foreground">AI Cover Letter</Link></li>
                <li><Link to="/reports" className="hover:text-foreground">Daily Reports</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link to="/login" className="hover:text-foreground">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AutoJobPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;