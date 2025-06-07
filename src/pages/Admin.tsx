import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, FileText, Zap, TrendingUp, Search, RefreshCw, Download, Bot, Shield, BarChart3 } from "lucide-react";
import AutoSubmission from "@/components/AutoSubmission";
import CredentialVault from "@/components/CredentialVault";
import DailyReports from "@/components/DailyReports";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const autoSubmissionLogs = [
    {
      id: 1,
      user: "Sarah Mitchell",
      platform: "LinkedIn",
      jobTitle: "Frontend Developer",
      company: "SAP",
      status: "success",
      timestamp: "2024-01-15 14:30",
      tokensUsed: 120
    },
    {
      id: 2,
      user: "Ahmad Rahman",
      platform: "StepStone", 
      jobTitle: "React Developer",
      company: "Bosch",
      status: "success",
      timestamp: "2024-01-15 14:15",
      tokensUsed: 95
    },
    {
      id: 3,
      user: "Maria Rodriguez",
      platform: "LinkedIn",
      jobTitle: "Software Engineer", 
      company: "Zalando",
      status: "failed",
      timestamp: "2024-01-15 13:45",
      tokensUsed: 0
    },
    {
      id: 4,
      user: "Sarah Mitchell",
      platform: "IranTalent",
      jobTitle: "Full Stack Developer",
      company: "BMW",
      status: "pending",
      timestamp: "2024-01-15 13:20",
      tokensUsed: 110
    }
  ];

  const users = [
    {
      id: 1,
      name: "Sarah Mitchell",
      email: "sarah@example.com",
      applications: 24,
      tokens: 2847,
      lastActive: "2024-01-15",
      status: "active"
    },
    {
      id: 2,
      name: "Ahmad Rahman",
      email: "ahmad@example.com",
      applications: 18,
      tokens: 2103,
      lastActive: "2024-01-14",
      status: "active"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      email: "maria@example.com",
      applications: 31,
      tokens: 3621,
      lastActive: "2024-01-13",
      status: "inactive"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Sarah Mitchell",
      action: "Generated cover letter",
      tokens: 120,
      status: "success",
      timestamp: "2024-01-15 14:30"
    },
    {
      id: 2,
      user: "Ahmad Rahman",
      action: "Application submitted",
      tokens: 0,
      status: "success",
      timestamp: "2024-01-15 13:45"
    },
    {
      id: 3,
      user: "Maria Rodriguez",
      action: "Cover letter generation failed",
      tokens: 85,
      status: "failed",
      timestamp: "2024-01-15 12:20"
    }
  ];

  const stats = [
    {
      title: "Total Users",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Applications Today",
      value: "89",
      change: "+8%",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Token Usage",
      value: "45.2K",
      change: "-5%",
      icon: Zap,
      color: "text-yellow-600"
    },
    {
      title: "Success Rate",
      value: "92%",
      change: "+3%",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "success":
        return "bg-green-100 text-green-800";
      case "failed":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center text-2xl font-bold gradient-bg bg-clip-text text-transparent">
            <ArrowLeft className="w-5 h-5 mr-2 text-foreground" />
            Admin Panel
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button>
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor user activity, system performance, and automated job submissions
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="auto-submission" className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Auto Submission
            </TabsTrigger>
            <TabsTrigger value="credentials" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Credentials
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Reports
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Auto Submission Logs */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Auto Submissions</CardTitle>
                <CardDescription>Latest automated job applications across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tokens</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {autoSubmissionLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{log.platform}</Badge>
                        </TableCell>
                        <TableCell>{log.jobTitle}</TableCell>
                        <TableCell>{log.company}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(log.status)}>
                            {log.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{log.tokensUsed}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            {log.status === 'failed' ? 'Retry' : 'View Details'}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="auto-submission">
            <AutoSubmission />
          </TabsContent>

          <TabsContent value="credentials">
            <CredentialVault />
          </TabsContent>

          <TabsContent value="reports">
            <DailyReports />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            {/* Users Management */}
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Overview of all registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    {users.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <div className="flex gap-4 mt-1">
                            <span className="text-xs text-muted-foreground">
                              {user.applications} applications
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {user.tokens} tokens
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Last: {user.lastActive}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
