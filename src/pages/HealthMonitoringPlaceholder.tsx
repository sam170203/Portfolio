import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Construction, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthMonitoringPlaceholder = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full p-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-full">
              <Construction className="h-12 w-12 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="text-sm">
              <Lock className="h-3 w-3 mr-1" />
              Private Project
            </Badge>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Smart Health Monitoring System
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            This project is currently private and under construction.
          </p>
          
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3">What's Coming Soon:</h3>
            <ul className="text-left text-muted-foreground space-y-2">
              <li>• Real-time system monitoring with CPU/RAM usage tracking</li>
              <li>• Predictive analytics using regression-based models</li>
              <li>• Automated Telegram alerts for system anomalies</li>
              <li>• SQL database integration for historical data</li>
              <li>• Linux-based monitoring solution</li>
            </ul>
          </div>
          
          <p className="text-muted-foreground mb-8">
            The project will be deployed and made available soon. Stay tuned for updates!
          </p>
          
          <Button 
            onClick={() => navigate('/')}
            className="inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HealthMonitoringPlaceholder;
