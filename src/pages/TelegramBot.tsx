
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Check, Copy, ExternalLink } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TelegramBot = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [botToken, setBotToken] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");

  const botCommands = [
    { command: "/start", description: "Initialize bot and start job application process" },
    { command: "/apply", description: "Begin new job application" },
    { command: "/status", description: "Check application status" },
    { command: "/report", description: "Get daily application report" },
    { command: "/settings", description: "Configure bot settings" },
    { command: "/help", description: "Show available commands" }
  ];

  const applicationFlow = [
    "👋 Welcome! Let's start your job application",
    "📝 Please provide your full name",
    "📞 Enter your phone number",
    "🌍 Select your preferred cover letter language",
    "💼 What's your desired job title?",
    "📍 Enter your city and country",
    "💰 Minimum salary expectation (optional)",
    "⏰ Your available contact hours",
    "📄 Upload your CV (PDF/DOC)",
    "📋 Upload cover letter template (optional)",
    "🏆 Upload certificates (optional)",
    "🔗 Send job advertisement (link or text)",
    "✅ Final confirmation: 'Yes, generate it!'"
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center text-2xl font-bold site-logo-text">
            <ArrowLeft className="w-5 h-5 mr-2 text-foreground" />
            AutoJobPilot
          </Link>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Bot className="w-3 h-3 mr-1" />
            Telegram Integration
          </Badge>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('telegram.title')}</h1>
          <p className="text-muted-foreground">{t('telegram.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bot Configuration */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  Bot Configuration
                </CardTitle>
                <CardDescription>Set up your Telegram bot integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bot-token">{t('telegram.token')}</Label>
                  <div className="flex gap-2">
                    <Input
                      id="bot-token"
                      type="password"
                      placeholder="123456789:ABCdefGHIjklMNOpqrsTUVwxyz"
                      value={botToken}
                      onChange={(e) => setBotToken(e.target.value)}
                    />
                    <Button variant="outline" size="icon">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Get your bot token from @BotFather on Telegram
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="webhook-url">{t('telegram.webhook')}</Label>
                  <div className="flex gap-2">
                    <Input
                      id="webhook-url"
                      placeholder="https://your-domain.com/webhook"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                    />
                    <Button variant="outline" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Bot Status</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Connected</Badge>
                </div>

                <Button className="w-full">Update Bot Settings</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('telegram.commands')}</CardTitle>
                <CardDescription>Available bot commands for users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {botCommands.map((cmd, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                        {cmd.command}
                      </code>
                      <div className="flex-1">
                        <p className="text-sm">{cmd.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(cmd.command)}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Flow */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Flow</CardTitle>
                <CardDescription>Step-by-step user interaction process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {applicationFlow.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        {index + 1}
                      </div>
                      <p className="text-sm flex-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bot Setup Instructions</CardTitle>
                <CardDescription>How to create and configure your Telegram bot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium">Create Bot</p>
                      <p className="text-xs text-muted-foreground">Message @BotFather on Telegram with /newbot</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium">Choose Name</p>
                      <p className="text-xs text-muted-foreground">Give your bot a name (e.g., "AutoJobPilot Bot")</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium">Get Token</p>
                      <p className="text-xs text-muted-foreground">Copy the bot token and paste it above</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="text-sm font-medium">Set Commands</p>
                      <p className="text-xs text-muted-foreground">Use /setcommands with @BotFather to add the commands listed above</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-xs font-medium mb-2">Command list to copy:</p>
                  <Textarea
                    readOnly
                    value={botCommands.map(cmd => `${cmd.command} - ${cmd.description}`).join('\n')}
                    className="text-xs font-mono h-32"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => copyToClipboard(botCommands.map(cmd => `${cmd.command} - ${cmd.description}`).join('\n'))}
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy Commands
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramBot;
