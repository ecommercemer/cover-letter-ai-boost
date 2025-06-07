
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PlayCircle, PauseCircle, Settings, Globe, Shield, Clock, CheckCircle } from "lucide-react";

interface Platform {
  name: string;
  url: string;
  isConnected: boolean;
  lastLogin: string;
  applications: number;
}

const AutoSubmission = () => {
  const [isAutoEnabled, setIsAutoEnabled] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const platforms: Platform[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/login",
      isConnected: true,
      lastLogin: "2024-01-15 09:30",
      applications: 12
    },
    {
      name: "StepStone",
      url: "https://www.stepstone.de/login",
      isConnected: true,
      lastLogin: "2024-01-15 08:45",
      applications: 8
    },
    {
      name: "Xing",
      url: "https://login.xing.com",
      isConnected: false,
      lastLogin: "Never",
      applications: 0
    },
    {
      name: "IranTalent",
      url: "https://www.irantalent.com/login",
      isConnected: true,
      lastLogin: "2024-01-14 16:20",
      applications: 4
    }
  ];

  const handleConnect = (platform: Platform) => {
    // Simulate OAuth connection
    toast({
      title: "Connecting to " + platform.name,
      description: "Opening secure login window...",
    });
    
    // In real implementation, this would open OAuth flow
    window.open(platform.url, '_blank');
  };

  const handleStartAutoSubmission = async () => {
    setIsRunning(true);
    setProgress(0);
    
    toast({
      title: "Auto Submission Started",
      description: "AI is now searching and applying to relevant jobs...",
    });

    // Simulate automated job application process
    const steps = [
      "Logging into platforms...",
      "Searching for relevant jobs...",
      "Analyzing job requirements...",
      "Generating custom cover letters...",
      "Filling application forms...",
      "Submitting applications..."
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setProgress((i + 1) * 16.67);
      
      toast({
        title: steps[i],
        description: `Step ${i + 1} of ${steps.length}`,
      });
    }

    setIsRunning(false);
    setProgress(100);
    
    toast({
      title: "Auto Submission Complete!",
      description: "6 applications sent successfully. Check your reports for details.",
    });
  };

  const handleStopAutoSubmission = () => {
    setIsRunning(false);
    setProgress(0);
    
    toast({
      title: "Auto Submission Stopped",
      description: "Process has been paused safely.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Main Control Panel */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Auto Intelligent Job Submission System
              </CardTitle>
              <CardDescription>
                Automate job applications across multiple platforms using AI
              </CardDescription>
            </div>
            <Switch
              checked={isAutoEnabled}
              onCheckedChange={setIsAutoEnabled}
              className="scale-125"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {isAutoEnabled && (
            <>
              <div className="flex gap-4">
                {!isRunning ? (
                  <Button onClick={handleStartAutoSubmission} className="flex-1">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Start Auto Submission
                  </Button>
                ) : (
                  <Button variant="destructive" onClick={handleStopAutoSubmission} className="flex-1">
                    <PauseCircle className="w-4 h-4 mr-2" />
                    Stop Process
                  </Button>
                )}
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
              </div>

              {isRunning && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing applications...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Platform Connections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Platform Connections
          </CardTitle>
          <CardDescription>
            Manage your login credentials for job platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{platform.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant={platform.isConnected ? "default" : "secondary"}>
                      {platform.isConnected ? "Connected" : "Not Connected"}
                    </Badge>
                    {platform.isConnected && (
                      <span className="text-xs text-muted-foreground">
                        {platform.applications} applications
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last login: {platform.lastLogin}
                  </p>
                </div>
                <Button
                  variant={platform.isConnected ? "outline" : "default"}
                  size="sm"
                  onClick={() => handleConnect(platform)}
                >
                  {platform.isConnected ? "Refresh" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Today's Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Today's Activity
          </CardTitle>
          <CardDescription>
            Recent automated job submissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { company: "SAP", position: "Frontend Developer", platform: "LinkedIn", status: "success", time: "14:30" },
              { company: "Bosch", position: "React Developer", platform: "StepStone", status: "success", time: "14:15" },
              { company: "Zalando", position: "Software Engineer", platform: "LinkedIn", status: "success", time: "13:45" },
              { company: "BMW", position: "Full Stack Developer", platform: "StepStone", status: "pending", time: "13:20" },
              { company: "Siemens", position: "Frontend Engineer", platform: "IranTalent", status: "success", time: "12:55" },
              { company: "Mercedes", position: "Web Developer", platform: "LinkedIn", status: "success", time: "12:30" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <p className="font-medium text-sm">{activity.company}</p>
                    <p className="text-xs text-muted-foreground">{activity.position}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs">
                    {activity.platform}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutoSubmission;
