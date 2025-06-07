
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, FileText, Zap, TrendingUp, Search, RefreshCw, Download } from "lucide-react";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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
            Monitor user activity, system performance, and application statistics
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

        {/* Users Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system activities and operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">by {activity.user}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">
                          {activity.timestamp}
                        </span>
                        {activity.tokens > 0 && (
                          <Badge variant="outline" className="text-xs">
                            {activity.tokens} tokens
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Logs */}
        <Card>
          <CardHeader>
            <CardTitle>System Operations</CardTitle>
            <CardDescription>Detailed logs of cover letter generations and applications</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Operation</TableHead>
                  <TableHead>Tokens Used</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2024-01-15 14:30</TableCell>
                  <TableCell>sarah@example.com</TableCell>
                  <TableCell>Cover Letter Generation</TableCell>
                  <TableCell>120</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Success</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-01-15 13:45</TableCell>
                  <TableCell>ahmad@example.com</TableCell>
                  <TableCell>Application Submission</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Success</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-01-15 12:20</TableCell>
                  <TableCell>maria@example.com</TableCell>
                  <TableCell>Cover Letter Generation</TableCell>
                  <TableCell>85</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800">Failed</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Retry</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* API Usage Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>API Usage Breakdown</CardTitle>
              <CardDescription>Current month usage statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>OpenAI GPT-4</span>
                <div className="text-right">
                  <p className="font-medium">28,450 tokens</p>
                  <p className="text-sm text-muted-foreground">62% of total</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Google Gemini</span>
                <div className="text-right">
                  <p className="font-medium">17,320 tokens</p>
                  <p className="text-sm text-muted-foreground">38% of total</p>
                </div>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Usage</span>
                  <span className="font-bold text-lg">45,770 tokens</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Success Metrics</CardTitle>
              <CardDescription>Platform performance overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Cover Letter Generation</span>
                  <span className="font-medium text-green-600">96% success</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Application Submission</span>
                  <span className="font-medium text-green-600">89% success</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Google Docs Integration</span>
                  <span className="font-medium text-green-600">94% success</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Platform Auto-Submit</span>
                  <span className="font-medium text-yellow-600">76% success</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
