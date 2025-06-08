
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, FileText, Send, BarChart3, Settings, Shield, Bot } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { useTranslation } from 'react-i18next';

const Admin = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t('admin.stats.totalUsers'),
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: t('admin.stats.coverLetters'),
      value: "3,892",
      change: "+24%",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: t('admin.stats.applications'),
      value: "2,156",
      change: "+18%",
      icon: Send,
      color: "text-purple-600"
    },
    {
      title: t('admin.stats.tokenUsage'),
      value: "45,231",
      change: "+8%",
      icon: BarChart3,
      color: "text-orange-600"
    }
  ];

  const userActivityData = [
    { date: "2024-01-01", users: 45, coverLetters: 120, applications: 89 },
    { date: "2024-01-02", users: 52, coverLetters: 145, applications: 102 },
    { date: "2024-01-03", users: 48, coverLetters: 135, applications: 95 },
    { date: "2024-01-04", users: 61, coverLetters: 168, applications: 121 },
    { date: "2024-01-05", users: 55, coverLetters: 152, applications: 110 },
    { date: "2024-01-06", users: 67, coverLetters: 189, applications: 134 },
    { date: "2024-01-07", users: 73, coverLetters: 201, applications: 142 }
  ];

  const platformData = [
    { name: "LinkedIn", applications: 856, color: "#0077B5" },
    { name: "StepStone", applications: 623, color: "#FF6B35" },
    { name: "Xing", applications: 445, color: "#006567" },
    { name: "IranTalent", applications: 232, color: "#4CAF50" }
  ];

  const languageData = [
    { language: "German", percentage: 45, users: 561 },
    { language: "English", percentage: 35, users: 436 },
    { language: "Persian", percentage: 20, users: 250 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center text-2xl font-bold site-logo-text">
            <ArrowLeft className="w-5 h-5 mr-2 text-foreground" />
            AutoJobPilot
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              <Shield className="w-3 h-3 mr-1" />
              Admin Access
            </Badge>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('admin.title')}</h1>
          <p className="text-muted-foreground">{t('admin.subtitle')}</p>
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
                    <span className="text-xs text-green-600">{stat.change} vs last month</span>
                  </div>
                  <div className={`${stat.color} bg-opacity-10 p-3 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Activity</CardTitle>
                  <CardDescription>User activity over the last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={userActivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                      <YAxis />
                      <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                      <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} name="Active Users" />
                      <Line type="monotone" dataKey="coverLetters" stroke="#10B981" strokeWidth={2} name="Cover Letters" />
                      <Line type="monotone" dataKey="applications" stroke="#8B5CF6" strokeWidth={2} name="Applications" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Distribution</CardTitle>
                  <CardDescription>Applications by job platform</CardDescription>
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
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Language Usage</CardTitle>
                <CardDescription>Cover letter language preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languageData.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-primary" />
                        <span className="font-medium">{lang.language}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${lang.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-16">{lang.percentage}%</span>
                        <span className="text-sm font-medium w-16">{lang.users} users</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Input placeholder="Search users..." className="flex-1" />
                    <Button>Search</Button>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-4">User</th>
                          <th className="text-left p-4">Applications</th>
                          <th className="text-left p-4">Tokens Used</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-4">john.doe@example.com</td>
                          <td className="p-4">23</td>
                          <td className="p-4">1,245</td>
                          <td className="p-4"><Badge variant="secondary">Active</Badge></td>
                          <td className="p-4">
                            <Button variant="outline" size="sm">View</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Monitor system performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>API Response Time</span>
                    <Badge variant="secondary">245ms</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Database Status</span>
                    <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Telegram Bot</span>
                    <Badge className="bg-green-100 text-green-800">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>File Storage</span>
                    <Badge variant="secondary">87% Used</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Errors</CardTitle>
                  <CardDescription>System error monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div>
                        <p className="text-sm font-medium">LinkedIn API Rate Limit</p>
                        <p className="text-xs text-muted-foreground">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div>
                        <p className="text-sm font-medium">High token usage detected</p>
                        <p className="text-xs text-muted-foreground">15 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>API Configuration</CardTitle>
                  <CardDescription>Configure external API settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="openai-key">OpenAI API Key</Label>
                    <Input id="openai-key" type="password" placeholder="sk-..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gemini-key">Gemini API Key</Label>
                    <Input id="gemini-key" type="password" placeholder="AIza..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telegram-token">Telegram Bot Token</Label>
                    <Input id="telegram-token" type="password" placeholder="123456:ABC..." />
                  </div>
                  <Button>Save Configuration</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure system behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="max-applications">Max Applications per Day</Label>
                    <Input id="max-applications" type="number" defaultValue="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="report-time">Daily Report Time</Label>
                    <Input id="report-time" type="time" defaultValue="18:00" />
                  </div>
                  <Button>Update Settings</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
