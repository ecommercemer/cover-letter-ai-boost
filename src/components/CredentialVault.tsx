
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Shield, Lock, Eye, EyeOff, Key, Trash2 } from "lucide-react";

interface StoredCredential {
  platform: string;
  username: string;
  lastUpdated: string;
  status: "active" | "expired" | "pending";
}

const CredentialVault = () => {
  const [showPasswords, setShowPasswords] = useState(false);
  const [credentials, setCredentials] = useState<StoredCredential[]>([
    {
      platform: "LinkedIn",
      username: "user@example.com",
      lastUpdated: "2024-01-15",
      status: "active"
    },
    {
      platform: "StepStone",
      username: "user@example.com",
      lastUpdated: "2024-01-15",
      status: "active"
    },
    {
      platform: "IranTalent",
      username: "user@example.com",
      lastUpdated: "2024-01-14",
      status: "active"
    }
  ]);
  const { toast } = useToast();

  const handleAddCredential = () => {
    toast({
      title: "Add New Credential",
      description: "Opening secure credential form...",
    });
  };

  const handleDeleteCredential = (platform: string) => {
    setCredentials(credentials.filter(cred => cred.platform !== platform));
    toast({
      title: "Credential Removed",
      description: `${platform} credentials have been securely deleted.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "expired":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Secure Credential Vault
          </CardTitle>
          <CardDescription>
            Encrypted storage for platform login credentials
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium">AES-256 Encryption</p>
                <p className="text-sm text-muted-foreground">
                  All credentials are encrypted and stored securely
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleAddCredential}>
              <Key className="w-4 h-4 mr-2" />
              Add Platform
            </Button>
          </div>

          <div className="space-y-3">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{credential.platform}</h4>
                    <Badge className={getStatusColor(credential.status)}>
                      {credential.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <Label className="text-xs text-muted-foreground">Username</Label>
                      <p className="text-sm">{credential.username}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Password</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type={showPasswords ? "text" : "password"}
                          value="••••••••••••"
                          readOnly
                          className="text-sm h-8"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowPasswords(!showPasswords)}
                        >
                          {showPasswords ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Last updated: {credential.lastUpdated}
                    </p>
                  </div>
                </div>
                <div className="ml-4">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteCredential(credential.platform)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CredentialVault;
