
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, FileText, Send, Clock, ExternalLink } from "lucide-react";

const DailyReports = () => {
  const [emailReports, setEmailReports] = useState(true);
  const [telegramReports, setTelegramReports] = useState(true);
  const [reportTime, setReportTime] = useState("18:00");
  const [telegramChatId, setTelegramChatId] = useState("@coverletterai_bot");
  const { toast } = useToast();

  const todaysReport = {
    applicationsSent: 6,
    companiesContacted: ["SAP", "Bosch", "Zalando", "BMW", "Siemens", "Mercedes"],
    platformsUsed: ["LinkedIn", "StepStone", "IranTalent"],
    successRate: "100%",
    documentsAttached: "Resume, Cover Letters, Certificates",
    tokensUsed: 420
  };

  const handleSendTestReport = () => {
    toast({
      title: "Test Report Sent",
      description: "Check your email and Telegram for the test report.",
    });
  };

  const handleViewGoogleSheet = () => {
    window.open("https://docs.google.com/spreadsheets/d/sample", "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Report Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Daily Report Settings
          </CardTitle>
          <CardDescription>
            Configure automated daily reports via email and Telegram
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Reports
                </Label>
                <Switch
                  checked={emailReports}
                  onCheckedChange={setEmailReports}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Telegram Reports
                </Label>
                <Switch
                  checked={telegramReports}
                  onCheckedChange={setTelegramReports}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4" />
                  Report Time
                </Label>
                <Input
                  type="time"
                  value={reportTime}
                  onChange={(e) => setReportTime(e.target.value)}
                />
              </div>

              <div>
                <Label>Telegram Bot ID</Label>
                <Input
                  value={telegramChatId}
                  onChange={(e) => setTelegramChatId(e.target.value)}
                  placeholder="@coverletterai_bot"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSendTestReport} variant="outline">
              <Send className="w-4 h-4 mr-2" />
              Send Test Report
            </Button>
            <Button onClick={handleViewGoogleSheet} variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Google Sheet
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Summary Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Report Preview</CardTitle>
          <CardDescription>
            This is what will be sent in your daily report
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 p-4 bg-muted rounded-lg">
            <div className="text-center">
              <h3 className="text-lg font-bold">📊 Daily Job Application Summary</h3>
              <p className="text-sm text-muted-foreground">January 15, 2024</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{todaysReport.applicationsSent}</p>
                <p className="text-xs text-muted-foreground">Applications Sent</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{todaysReport.companiesContacted.length}</p>
                <p className="text-xs text-muted-foreground">Companies</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{todaysReport.platformsUsed.length}</p>
                <p className="text-xs text-muted-foreground">Platforms</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">{todaysReport.tokensUsed}</p>
                <p className="text-xs text-muted-foreground">Tokens Used</p>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <p className="font-medium">🏢 Companies Contacted:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {todaysReport.companiesContacted.map((company, index) => (
                    <Badge key={index} variant="outline">{company}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium">📁 Documents Submitted:</p>
                <p className="text-sm text-muted-foreground">{todaysReport.documentsAttached}</p>
              </div>

              <div>
                <p className="font-medium">📊 Success Rate: <span className="text-green-600">{todaysReport.successRate}</span></p>
              </div>

              <div className="pt-2 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  🔗 View Full Report in Google Sheet
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyReports;
