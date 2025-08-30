import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Plane, Users, Globe, Award, ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/ba-aircraft-hero.jpg";

const HomePage = () => {
  const features = [
    {
      icon: Plane,
      title: "Professional Fleet",
      description: "Fly modern aircraft from our comprehensive fleet, featuring Boeing and Airbus types with authentic liveries and procedures.",
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join hundreds of virtual pilots from around the world in our vibrant Discord community and group events.",
    },
    {
      icon: Globe,
      title: "Global Routes", 
      description: "Experience realistic flight operations across our extensive route network covering Europe, Americas, and Asia-Pacific.",
    },
    {
      icon: Award,
      title: "Professional Training",
      description: "Comprehensive training programs and certifications to advance your virtual aviation career with us.",
    },
  ];

  const stats = [
    { value: "500+", label: "Active Pilots" },
    { value: "15", label: "Aircraft Types" },
    { value: "200+", label: "Destinations" },
    { value: "24/7", label: "Operations" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
            Welcome to <span className="text-primary-light">Virtual BAW</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Experience professional virtual aviation operations modeled after British Airways. 
            Join our elite community of pilots flying realistic routes worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
              <a href="https://join.virtual-baw.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Join as Pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              <a href="https://portal.virtual-baw.com" target="_blank" rel="noopener noreferrer">
                Pilot Portal
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Why Choose Virtual BAW?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a premium virtual airline experience with professional standards, 
              comprehensive training, and an active global community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-shadow text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold font-heading mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to begin your journey with Virtual BAW? Explore our resources or join our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-4">Join Our Community</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with fellow pilots, get support, and stay updated with the latest news.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Discord Server
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-4">Explore Our Fleet</h3>
                <p className="text-muted-foreground mb-6">
                  Discover our comprehensive aircraft fleet and find your next favorite to fly.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/fleet">
                    View Fleet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-4">Learn the Rules</h3>
                <p className="text-muted-foreground mb-6">
                  Review our operational standards and community guidelines before you start flying.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/rules">
                    Read Rules
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Ready to Take Flight?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of pilots already flying with Virtual BAW. Experience professional virtual aviation 
            with realistic operations and an active community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
              <a href="https://join.virtual-baw.com" target="_blank" rel="noopener noreferrer">
                Join Virtual BAW Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4">
              <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer">
                Ask Questions First
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;