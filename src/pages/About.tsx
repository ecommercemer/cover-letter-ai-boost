
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-bg bg-clip-text text-transparent">
            CoverLetterAI
          </Link>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About CoverLetterAI</h1>
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            CoverLetterAI is a revolutionary platform that automates the job application process 
            using artificial intelligence. We specialize in creating perfect German cover letters 
            tailored to specific job requirements.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Our mission is to help job seekers save time and increase their success rate by 
            leveraging AI technology to create compelling, personalized cover letters that 
            stand out to German employers.
          </p>
          <p className="text-lg text-muted-foreground">
            Founded in 2024, we've already helped thousands of professionals land their dream 
            jobs in Germany through our innovative Telegram-based workflow and automated 
            application system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
