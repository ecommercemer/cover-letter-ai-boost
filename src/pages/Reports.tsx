
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, TrendingUp, Users, FileText, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const Reports = () => {
  const applicationData = [
    { date: "2024-01-01", applications: 3, responses: 1 },
    { date: "2024-01-02", applications: 5, responses: 2 },
    { date: "2024-01-03", applications: 2, responses: 0 },
    { date: "2024-01-04", applications: 4, responses: 1 },
    { date: "2024-01-05", applications: 6, responses: 3 },
    { date: "2024-01-06", applications: 3, responses: 1 },
    { date: "2024-01-07", applications: 7, responses: 2 }
  ];

  const tokenUsageData = [
    { week: "Week 1", tokens: 850 },
    { week: "Week 2", tokens: 1200 },
    { week: "Week 3", tokens: 950 },
    { week: "Week 4", tokens: 1400 }
  ];

  const platformData = [
    { name: "LinkedIn", applications: 12, color: "#0077B5" },
    { name: "Xing", applications: 8, color: "#006567" },
    { name: "StepStone", applications: 6, color: "#FF6B35" },
    { name: "IranTalent", applications: 4, color: "#4CAF50" }
  ];

  const stats = [
    {
      title: "Total Applications",
      value: "30",
      change: "+15%",
      trend: "up",
      icon: FileText,
      description: "This month"
    },
    {
      title: "Response Rate",
      value: "23%",
      change: "+5%",
      trend: "up",
      icon: Target,
      description: "7 out of 30"
    },
    {
      title: "Companies Contacted",
      value: "24",
      change: "+8%",
      trend: "up",
      icon: Users,
      description: "Unique companies"
    },
    {
      title: "Token Usage",
      value: "4,400",
      change: "-12%",
      trend: "down",
      icon: TrendingUp,
      description: "This month"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center text-2xl font-bold gradient-bg bg-clip-text text-transparent">
            <ArrowLeft className="w-5 h-5 mr-2 text-foreground" />
            CoverLetterAI
          </Link>
          <div className="flex items-center gap-4">
            <Select defaultValue="30days">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Analytics & Reports</h1>
          <p className="text-muted-foreground">
            Track your job application progress and optimize your success rate
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      <span className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">{stat.description}</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Applications Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>Applications & Responses</CardTitle>
              <CardDescription>Daily application activity over the last week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={applicationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                  <YAxis />
                  <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                  <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={2} name="Applications" />
                  <Line type="monotone" dataKey="responses" stroke="#10B981" strokeWidth={2} name="Responses" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Token Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Token Usage</CardTitle>
              <CardDescription>Weekly AI token consumption</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={tokenUsageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tokens" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Platform Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>Applications sent per job platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="applications"
                    label={({ name, applications }) => `${name}: ${applications}`}
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Daily Summary</CardTitle>
              <CardDescription>Today's activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Applications Sent</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cover Letters Generated</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tokens Used</span>
                  <span className="font-medium">420</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Companies Contacted</span>
                  <span className="font-medium">3</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button className="w-full" variant="outline">
                  Subscribe to Daily Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest application submissions and responses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "2 hours ago", action: "Application sent to TechCorp GmbH", status: "success" },
                { time: "4 hours ago", action: "Cover letter generated for Frontend Developer role", status: "info" },
                { time: "6 hours ago", action: "Response received from StartupXYZ", status: "success" },
                { time: "1 day ago", action: "Application failed to submit to LinkedIn", status: "error" },
                { time: "1 day ago", action: "Cover letter generated for React Developer role", status: "info" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
