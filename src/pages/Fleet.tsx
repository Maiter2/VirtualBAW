import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Plane, Users, MapPin, Clock } from "lucide-react";

const Fleet = () => {
  const fleetCategories = [
    {
      category: "Short-Haul",
      description: "UK domestic and European operations",
      aircraft: [
        {
          name: "Airbus A320neo",
          registration: "G-TTNA",
          range: "3,500 nm",
          capacity: "180 passengers",
          routes: "European network",
          notes: "Latest generation with Club Suite business class",
        },
        {
          name: "Airbus A321neo",
          registration: "G-NEOP",
          range: "4,000 nm", 
          capacity: "220 passengers",
          routes: "UK & European destinations",
          notes: "High-density European routes",
        },
        {
          name: "Airbus A319",
          registration: "G-EUPH",
          range: "3,750 nm",
          capacity: "144 passengers",
          routes: "UK domestic & European",
          notes: "Being phased out gradually",
        },
        {
          name: "Embraer E190",
          registration: "G-LCYG",
          range: "2,400 nm",
          capacity: "98 passengers",
          routes: "UK regional & European",
          notes: "BA CityFlyer operations from London City",
        },
      ],
    },
    {
      category: "Medium-Haul",
      description: "Transatlantic and regional long-haul",
      aircraft: [
        {
          name: "Boeing 787-8 Dreamliner",
          registration: "G-ZBJB",
          range: "7,350 nm",
          capacity: "214 passengers",
          routes: "North America, Middle East",
          notes: "Fuel-efficient with Club Suite",
        },
        {
          name: "Boeing 787-9 Dreamliner",
          registration: "G-ZBKF",
          range: "7,635 nm",
          capacity: "216 passengers",
          routes: "Americas, Asia, Middle East",
          notes: "Premium long-haul configuration",
        },
        {
          name: "Boeing 787-10 Dreamliner",
          registration: "G-ZBLA",
          range: "6,430 nm",
          capacity: "256 passengers",
          routes: "High-density medium-haul",
          notes: "Latest addition with enhanced capacity",
        },
        {
          name: "Boeing 777-200ER",
          registration: "G-VIIT",
          range: "7,700 nm",
          capacity: "275 passengers",
          routes: "Americas, Asia-Pacific",
          notes: "Reliable workhorse aircraft",
        },
      ],
    },
    {
      category: "Long-Haul",
      description: "Intercontinental flagship operations",
      aircraft: [
        {
          name: "Airbus A350-1000",
          registration: "G-XWBA",
          range: "8,700 nm",
          capacity: "331 passengers",
          routes: "Premium long-haul worldwide",
          notes: "Flagship aircraft with Club Suite",
        },
        {
          name: "Boeing 777-300ER",
          registration: "G-STBF",
          range: "7,370 nm",
          capacity: "396 passengers",
          routes: "Asia-Pacific, Americas",
          notes: "High-capacity intercontinental",
        },
        {
          name: "Airbus A380-800",
          registration: "G-XLEC",
          range: "8,200 nm",
          capacity: "469 passengers",
          routes: "Premium destinations worldwide",
          notes: "World's largest passenger aircraft",
        },
      ],
    },
  ];

  const fleetStats = [
    { label: "Total Aircraft", value: "253+" },
    { label: "Destinations", value: "200+" },
    { label: "Aircraft Types", value: "12" },
    { label: "Daily Flights", value: "800+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-foreground mb-4">
            Our Fleet
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience Virtual BAW's authentic British Airways fleet. From modern A350s to the iconic A380, 
            we operate the exact aircraft types that BA flies worldwide.
          </p>
          
          {/* Fleet Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {fleetStats.map((stat, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.aircraft.map((aircraft) => (
                  <Card key={aircraft.registration} className="shadow-medium hover:shadow-strong transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Plane className="h-6 w-6 text-primary" />
                        <Badge variant="secondary">{aircraft.registration}</Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{aircraft.name}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {aircraft.notes}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Range:</span>
                          </div>
                          <span className="font-medium">{aircraft.range}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Capacity:</span>
                          </div>
                          <span className="font-medium">{aircraft.capacity}</span>
                        </div>
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

        {/* Fleet Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="shadow-medium">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Modern & Efficient</h3>
              <p className="text-muted-foreground text-sm">
                Our fleet features the latest generation aircraft including A350-1000s, 787 Dreamliners, 
                and A320neos with reduced emissions and enhanced passenger comfort.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-medium">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Club Suite Experience</h3>
              <p className="text-muted-foreground text-sm">
                All new aircraft feature BA's award-winning Club Suite business class, 
                offering direct aisle access and enhanced privacy for premium passengers.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-medium">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Global Connectivity</h3>
              <p className="text-muted-foreground text-sm">
                From short European hops on the A320neo to ultra-long-haul flights on the A350-1000, 
                our fleet connects London to over 200 destinations worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white shadow-strong">
            <CardContent className="py-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Fly the Real BA Fleet?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Experience authentic British Airways operations with our exact aircraft types and routes. 
                Join Virtual BAW and pilot the same aircraft BA flies every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://join.virtual-baw.com"
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