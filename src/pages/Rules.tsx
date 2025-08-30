import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Shield, Clock, Users, MessageCircle, AlertTriangle, CheckCircle } from "lucide-react";

const Rules = () => {
  const rulesSections = [
    {
      title: "Flight Operations",
      icon: Shield,
      description: "Professional standards for all flight activities",
      color: "bg-primary",
      rules: [
        "All flights must be conducted using approved flight simulation platforms (MSFS, X-Plane, P3D)",
        "File proper flight plans through our operations system before departure",
        "Follow standard operating procedures (SOPs) for your assigned aircraft type",
        "Maintain realistic flight profiles - no unrealistic climbs, speeds, or maneuvers",
        "Report any incidents or deviations from normal operations to management",
        "Complete post-flight reports within 24 hours of landing",
      ],
    },
    {
      title: "Activity Requirements",
      icon: Clock,
      description: "Minimum activity to maintain pilot status",
      color: "bg-primary-light",
      rules: [
        "Complete minimum 2 flights per month to remain active",
        "Extended absence (30+ days) requires prior notification to Operations",
        "Participate in at least 1 group event per quarter (optional but encouraged)", 
        "Respond to important communications within 7 days",
        "Annual recertification required for continued membership",
      ],
    },
    {
      title: "Community Standards",
      icon: Users,
      description: "Maintaining a respectful and professional environment",
      color: "bg-accent",
      rules: [
        "Treat all members with respect and professionalism at all times",
        "No discriminatory language, harassment, or inappropriate behavior",
        "Keep discussions relevant and constructive in public channels",
        "Resolve conflicts through proper channels (staff mediation if needed)",
        "Represent Virtual BAW positively in external aviation communities",
        "Follow Discord community guidelines in all server interactions",
      ],
    },
    {
      title: "Communication Protocol",
      icon: MessageCircle,
      description: "Official channels and communication standards",
      color: "bg-secondary",
      rules: [
        "Use designated Discord channels for specific topics (ops, general, support)",
        "Official announcements come from management team only",
        "Report technical issues through proper support channels",
        "Maintain professional language in all official communications",
        "Emergency contacts available 24/7 for critical operational issues",
      ],
    },
  ];

  const violations = [
    {
      severity: "Minor",
      color: "bg-yellow-500",
      examples: ["Late flight reports", "Minor SOP deviations", "Missed communications"],
      consequence: "Verbal warning and guidance provided",
    },
    {
      severity: "Major", 
      color: "bg-orange-500",
      examples: ["Repeated minor violations", "Unrealistic flying", "Disrespectful behavior"],
      consequence: "Formal warning and temporary restrictions",
    },
    {
      severity: "Severe",
      color: "bg-red-500",
      examples: ["Harassment", "Malicious behavior", "Serious safety violations"],
      consequence: "Immediate suspension or termination",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-foreground mb-4">
            Rules & Regulations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive guidelines ensure safe, professional, and enjoyable virtual aviation operations. 
            All pilots are expected to understand and follow these standards.
          </p>
        </div>

        {/* Main Rules Sections */}
        <div className="space-y-8 mb-16">
          {rulesSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-heading">{section.title}</CardTitle>
                      <CardDescription className="text-base">{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Violation Policy */}
        <div className="mb-12">
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-destructive flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-heading">Violation Policy</CardTitle>
                  <CardDescription className="text-base">
                    Progressive disciplinary measures based on violation severity
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {violations.map((violation, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${violation.color}`}></div>
                      <Badge variant="outline" className="font-medium">
                        {violation.severity} Violations
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {violation.examples.map((example, exIndex) => (
                          <li key={exIndex}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Consequence:</h4>
                      <p className="text-sm text-muted-foreground">{violation.consequence}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-primary text-white shadow-strong">
            <CardContent className="py-8">
              <h3 className="text-2xl font-semibold mb-4">Questions About Our Rules?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Our management team is available to clarify any questions about our policies. 
                We're here to help ensure everyone has a positive experience with Virtual BAW.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Ask on Discord
                </a>
                <a
                  href="mailto:support@virtual-baw.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  Email Support
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rules;