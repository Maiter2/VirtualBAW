import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Plane, Users, MapPin, Clock } from "lucide-react";

const Fleet = () => {
  const fleetCategories = [
    {
      category: "Short-Haul",
      description: "Regional and European operations",
      aircraft: [
        {
          name: "Boeing 737-800",
          registration: "G-DOCS",
          range: "3,383 nm",
          capacity: "189 passengers",
          routes: "European destinations",
        },
        {
          name: "Airbus A320neo",
          registration: "G-NEOW",
          range: "3,400 nm", 
          capacity: "180 passengers",
          routes: "UK & European network",
        },
      ],
    },
    {
      category: "Medium-Haul",
      description: "Transatlantic and regional long-haul",
      aircraft: [
        {
          name: "Boeing 767-300ER",
          registration: "G-BNWA",
          range: "5,625 nm",
          capacity: "269 passengers",
          routes: "North America, Middle East",
        },
        {
          name: "Airbus A330-300",
          registration: "G-VYGU",
          range: "6,350 nm",
          capacity: "297 passengers",
          routes: "Caribbean, Africa, Asia",
        },
      ],
    },
    {
      category: "Long-Haul",
      description: "Intercontinental operations",
      aircraft: [
        {
          name: "Boeing 777-300ER",
          registration: "G-STBF",
          range: "7,370 nm",
          capacity: "396 passengers",
          routes: "Asia-Pacific, Americas",
        },
        {
          name: "Airbus A350-1000",
          registration: "G-XWBH",
          range: "8,700 nm",
          capacity: "331 passengers",
          routes: "Premium long-haul routes",
        },
        {
          name: "Boeing 787-9 Dreamliner",
          registration: "G-ZBKN",
          range: "7,635 nm",
          capacity: "216 passengers",
          routes: "Efficient long-haul network",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-foreground mb-4">
            Our Fleet
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our comprehensive fleet of modern aircraft, carefully selected to serve destinations across the globe with the highest standards of safety and comfort.
          </p>
        </div>

        <div className="space-y-12">
          {fleetCategories.map((category) => (
            <section key={category.category} className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-semibold font-heading text-foreground mb-2">
                  {category.category}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.aircraft.map((aircraft) => (
                  <Card key={aircraft.registration} className="shadow-medium hover:shadow-strong transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Plane className="h-6 w-6 text-primary" />
                        <Badge variant="secondary">{aircraft.registration}</Badge>
                      </div>
                      <CardTitle className="text-xl">{aircraft.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Range:</span>
                        </div>
                        <span className="font-medium">{aircraft.range}</span>
                        
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Capacity:</span>
                        </div>
                        <span className="font-medium">{aircraft.capacity}</span>
                      </div>
                      
                      <div className="pt-3 border-t border-border">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Primary Routes:</span>
                        </div>
                        <p className="text-sm font-medium">{aircraft.routes}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white shadow-strong">
            <CardContent className="py-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Fly?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join our fleet operations and experience the thrill of piloting these magnificent aircraft across realistic flight routes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://join.skywings-va.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
                >
                  Join as Pilot
                </a>
                <a
                  href="https://discord.gg/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  Ask Questions
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Fleet;