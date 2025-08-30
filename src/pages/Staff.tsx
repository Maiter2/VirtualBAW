import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Mail, MessageCircle, Crown, Plane, BookOpen, Settings, Shield, Users } from "lucide-react";

const Staff = () => {
  const managementTeam = [
    {
      name: "Captain James Mitchell",
      role: "Chief Executive Officer",
      department: "Executive",
      description: "Leading Virtual BAW with 15+ years of virtual aviation experience",
      contact: {
        email: "ceo@virtual-baw.com",
        discord: "CaptMitchell#1234",
      },
      icon: Crown,
    },
    {
      name: "Sarah Thompson",
      role: "Operations Director", 
      department: "Operations",
      description: "Overseeing daily flight operations and route planning",
      contact: {
        email: "ops@virtual-baw.com",
        discord: "SarahOps#5678",
      },
      icon: Plane,
    },
    {
      name: "Captain Robert Davies", 
      role: "Training Director",
      department: "Training",
      description: "Managing pilot training programs and certification",
      contact: {
        email: "training@virtual-baw.com",
        discord: "TrainingCap#9012",
      },
      icon: BookOpen,
    },
    {
      name: "Lisa Anderson",
      role: "Chief Technology Officer",
      department: "Technology",
      description: "Managing systems, websites, and technical infrastructure",
      contact: {
        email: "tech@virtual-baw.com", 
        discord: "TechLisa#3456",
      },
      icon: Settings,
    },
    {
      name: "Michael Chen",
      role: "Safety & Standards Manager",
      department: "Safety",
      description: "Ensuring compliance with operational standards and safety protocols",
      contact: {
        email: "safety@virtual-baw.com",
        discord: "SafetyMike#7890",
      },
      icon: Shield,
    },
    {
      name: "Emma Rodriguez",
      role: "Community Manager",
      department: "Community",
      description: "Building pilot community and managing member relations",
      contact: {
        email: "community@virtual-baw.com",
        discord: "EmmaComm#2468",
      },
      icon: Users,
    },
  ];

  const getDepartmentColor = (department: string) => {
    const colors = {
      Executive: "bg-gradient-primary",
      Operations: "bg-primary-light",
      Training: "bg-accent",
      Technology: "bg-secondary",
      Safety: "bg-destructive",
      Community: "bg-muted",
    };
    return colors[department as keyof typeof colors] || "bg-muted";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-foreground mb-4">
            Management Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated leadership team committed to providing an exceptional virtual aviation experience. 
            Each member brings expertise and passion to ensure Virtual BAW operates at the highest professional standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member) => {
            const IconComponent = member.icon;
            return (
              <Card key={member.name} className="shadow-medium hover:shadow-strong transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${getDepartmentColor(member.department)} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    <h4 className="font-medium text-sm text-foreground">Contact Information</h4>
                    
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" size="sm" asChild className="justify-start">
                        <a href={`mailto:${member.contact.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </a>
                      </Button>
                      
                      <Button variant="outline" size="sm" className="justify-start">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        <span className="text-xs">{member.contact.discord}</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-primary text-white shadow-strong">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Need Assistance?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Our management team is here to help. Whether you have questions about operations, 
                training, or just want to get involved in the community, don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Join Discord
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
                  <a href="mailto:info@virtual-baw.com">
                    <Mail className="h-5 w-5 mr-2" />
                    General Inquiries
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Staff;