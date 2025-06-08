
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, CheckIcon, UploadIcon, Settings, FileTextIcon, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import DemoModal from "@/components/DemoModal";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const steps = [{
    icon: UploadIcon,
    title: t('smartFlow.step1.title'),
    description: t('smartFlow.step1.description')
  }, {
    icon: Settings,
    title: t('smartFlow.step2.title'),
    description: t('smartFlow.step2.description')
  }, {
    icon: CheckIcon,
    title: t('smartFlow.step3.title'),
    description: t('smartFlow.step3.description')
  }, {
    icon: FileTextIcon,
    title: t('smartFlow.step4.title'),
    description: t('smartFlow.step4.description')
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
    text: t('testimonials.sarah'),
    rating: 5
  }, {
    name: "Ahmad R.",
    role: "Marketing Manager",
    text: t('testimonials.ahmad'),
    rating: 5
  }, {
    name: "Maria K.",
    role: "Data Analyst",
    text: t('testimonials.maria'),
    rating: 5
  }];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold site-logo-text">
            AutoJobPilot
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link>
            <Link to="/dashboard" className="hover:text-primary transition-colors">{t('nav.features')}</Link>
            <Link to="/builder" className="hover:text-primary transition-colors">{t('nav.aiCoverLetter')}</Link>
            <Link to="/settings" className="hover:text-primary transition-colors">{t('nav.autoApplySettings')}</Link>
            <Link to="/reports" className="hover:text-primary transition-colors">{t('nav.dailyReport')}</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link>
          </div>
          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={handleLanguageChange}>
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
              <Button variant="outline">{t('nav.login')}</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')} <br />
            <span className="text-yellow-300">{t('hero.titleAccent')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                {t('hero.startButton')}
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              onClick={() => setIsDemoOpen(true)}
            >
              {t('hero.watchDemo')}
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
          <h2 className="text-4xl font-bold text-center mb-16">{t('smartFlow.title')}</h2>
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
          <h2 className="text-4xl font-bold mb-8">{t('platforms.title')}</h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('platforms.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                <Badge variant="secondary" className="text-lg py-2 px-4 cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {platform.name}
                </Badge>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t('testimonials.title')}</h2>
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
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('cta.subtitle')}
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              {t('cta.button')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold site-logo-text mb-4">
                AutoJobPilot
              </h3>
              <p className="text-muted-foreground">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.features')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/dashboard" className="hover:text-foreground">{t('nav.features')}</Link></li>
                <li><Link to="/builder" className="hover:text-foreground">{t('nav.aiCoverLetter')}</Link></li>
                <li><Link to="/reports" className="hover:text-foreground">{t('nav.dailyReport')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.platform')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">{t('footer.about')}</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">{t('nav.contact')}</Link></li>
                <li><Link to="/login" className="hover:text-foreground">{t('nav.login')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground">{t('footer.privacy')}</Link></li>
                <li><a href="#" className="hover:text-foreground">{t('footer.terms')}</a></li>
                <li><a href="#" className="hover:text-foreground">{t('footer.cookies')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AutoJobPilot. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};

export default Index;
