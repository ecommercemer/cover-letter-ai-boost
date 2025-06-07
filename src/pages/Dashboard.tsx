
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { FileTextIcon, Users, Settings, UploadIcon, CheckIcon, User } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const applications = [
    {
      id: 1,
      date: "2024-01-15",
      jobTitle: "Senior Software Engineer",
      company: "TechCorp GmbH",
      status: "sent",
      coverLetterUrl: "#"
    },
    {
      id: 2,
      date: "2024-01-14",
      jobTitle: "Frontend Developer",
      company: "StartupXYZ",
      status: "pending",
      coverLetterUrl: "#"
    },
    {
      id: 3,
      date: "2024-01-13",
      jobTitle: "Full Stack Developer",
      company: "Digital Agency",
      status: "failed",
      coverLetterUrl: "#"
    },
    {
      id: 4,
      date: "2024-01-12",
      jobTitle: "React Developer",
      company: "E-Commerce Ltd",
      status: "sent",
      coverLetterUrl: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const stats = [
    {
      title: "Total Applications",
      value: "24",
      icon: FileTextIcon,
      description: "This month"
    },
    {
      title: "Success Rate",
      value: "85%",
      icon: CheckIcon,
      description: "Applications sent"
    },
    {
      title: "Cover Letters",
      value: "32",
      icon: UploadIcon,
      description: "Generated"
    },
    {
      title: "Responses",
      value: "7",
      icon: Users,
      description: "From companies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-bg bg-clip-text text-transparent">
            CoverLetterAI
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/reports">
              <Button variant="ghost">Reports</Button>
            </Link>
            <Link to="/settings">
              <Button variant="ghost">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </Link>
            <Button variant="outline">
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">
            Here's your job application dashboard. Ready to create more opportunities?
          </p>
        </div>

        {/* Quick Action */}
        <div className="mb-8">
          <Card className="gradient-bg text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Ready for your next application?</h2>
                  <p className="text-blue-100">
                    Create a personalized cover letter in minutes with our AI assistant.
                  </p>
                </div>
                <Link to="/builder">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Create New Cover Letter
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
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
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Applications Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Applications</CardTitle>
            <Button variant="outline" size="sm">
              <FileTextIcon className="w-4 h-4 mr-2" />
              Export to Google Sheets
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Cover Letter</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.date}</TableCell>
                    <TableCell>{app.jobTitle}</TableCell>
                    <TableCell>{app.company}</TableCell>
                    <TableCell>
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        View Letter
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Download PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          Open in Docs
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/builder")}>
            <CardContent className="pt-6 text-center">
              <UploadIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Create Cover Letter</h3>
              <p className="text-sm text-muted-foreground">
                Start a new AI-powered cover letter
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/reports")}>
            <CardContent className="pt-6 text-center">
              <FileTextIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">View Reports</h3>
              <p className="text-sm text-muted-foreground">
                Check your application analytics
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/settings")}>
            <CardContent className="pt-6 text-center">
              <Settings className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Settings</h3>
              <p className="text-sm text-muted-foreground">
                Manage your preferences
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
