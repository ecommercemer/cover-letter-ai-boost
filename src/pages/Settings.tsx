
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bell, Globe, HardDrive, Trash2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [settings, setSettings] = useState({
    language: "en",
    googleDriveEnabled: true,
    telegramNotifications: true,
    emailNotifications: false,
    tokenAlertThreshold: "1000",
    autoSubmit: false
  });

  const { toast } = useToast();

  const handleSettingChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const deleteAccount = () => {
    toast({
      title: "Account Deletion",
      description: "This feature would require additional confirmation in a real application.",
      variant: "destructive"
    });
  };

  const exportData = () => {
    toast({
      title: "Data Export",
      description: "Your data export has been initiated. You'll receive an email shortly.",
    });
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
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and integrations
          </p>
        </div>

        <div className="space-y-6">
          {/* Language Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Language Preferences
              </CardTitle>
              <CardDescription>
                Set your preferred language for cover letters and interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Default Language</Label>
                <Select value={settings.language} onValueChange={(value) => handleSettingChange("language", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">🇺🇸 English</SelectItem>
                    <SelectItem value="de">🇩🇪 German</SelectItem>
                    <SelectItem value="fa">🇮🇷 Persian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Integrations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HardDrive className="w-5 h-5" />
                Integrations
              </CardTitle>
              <CardDescription>
                Manage your external service connections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Google Drive & Docs Integration</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically save cover letters to Google Drive and enable Google Docs editing
                  </p>
                </div>
                <Switch
                  checked={settings.googleDriveEnabled}
                  onCheckedChange={(value) => handleSettingChange("googleDriveEnabled", value)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-submit to Job Platforms</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically submit applications to LinkedIn, Xing, and other platforms
                  </p>
                </div>
                <Switch
                  checked={settings.autoSubmit}
                  onCheckedChange={(value) => handleSettingChange("autoSubmit", value)}
                />
              </div>

              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  Configure LinkedIn Integration
                </Button>
                <Button variant="outline" className="w-full">
                  Configure Xing Integration
                </Button>
                <Button variant="outline" className="w-full">
                  Configure StepStone Integration
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Choose how you want to receive updates and reports
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Telegram Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive daily reports and updates via Telegram bot
                  </p>
                </div>
                <Switch
                  checked={settings.telegramNotifications}
                  onCheckedChange={(value) => handleSettingChange("telegramNotifications", value)}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive weekly summaries and important updates via email
                  </p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(value) => handleSettingChange("emailNotifications", value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Usage & Limits */}
          <Card>
            <CardHeader>
              <CardTitle>Usage & Limits</CardTitle>
              <CardDescription>
                Manage your token usage and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tokenThreshold">Token Alert Threshold</Label>
                <Input
                  id="tokenThreshold"
                  type="number"
                  value={settings.tokenAlertThreshold}
                  onChange={(e) => handleSettingChange("tokenAlertThreshold", e.target.value)}
                  placeholder="1000"
                />
                <p className="text-sm text-muted-foreground">
                  Get notified when your monthly token usage reaches this limit
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary">2,847</p>
                  <p className="text-sm text-muted-foreground">Tokens Used This Month</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-accent">24</p>
                  <p className="text-sm text-muted-foreground">Cover Letters Generated</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-green-600">18</p>
                  <p className="text-sm text-muted-foreground">Applications Sent</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Trash2 className="w-5 h-5" />
                Data Management
              </CardTitle>
              <CardDescription>
                Export your data or delete your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={exportData} className="flex-1">
                  Export My Data
                </Button>
                <Button variant="destructive" onClick={deleteAccount} className="flex-1">
                  Delete Account
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Account deletion is permanent and cannot be undone. All your data will be removed from our servers.
              </p>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={saveSettings} className="min-w-32">
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
