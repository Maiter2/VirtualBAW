import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import { MapPin, Clock, Plane, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Route {
  id: string;
  origin: string;
  destination: string;
  distance: string;
  flightTime: string;
  aircraft: string;
  frequency: string;
}

const RoutesPage = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingRoute, setEditingRoute] = useState<Route | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Initial routes data
  const initialRoutes: Route[] = [
    {
      id: "1",
      origin: "LHR",
      destination: "JFK",
      distance: "3,459 nm",
      flightTime: "8h 15m",
      aircraft: "A350-1000",
      frequency: "Daily"
    },
    {
      id: "2", 
      origin: "LHR",
      destination: "LAX",
      distance: "5,439 nm",
      flightTime: "11h 30m",
      aircraft: "787-9",
      frequency: "Daily"
    },
    {
      id: "3",
      origin: "LHR",
      destination: "CDG",
      distance: "215 nm",
      flightTime: "1h 15m",
      aircraft: "A320neo",
      frequency: "Multiple daily"
    },
    {
      id: "4",
      origin: "LHR",
      destination: "DXB",
      distance: "3,414 nm",
      flightTime: "7h 45m",
      aircraft: "A380-800",
      frequency: "Daily"
    },
    {
      id: "5",
      origin: "LHR",
      destination: "SYD",
      distance: "10,573 nm",
      flightTime: "21h 45m",
      aircraft: "787-9",
      frequency: "Daily"
    },
    {
      id: "6",
      origin: "LHR",
      destination: "HKG",
      distance: "5,994 nm",
      flightTime: "11h 45m",
      aircraft: "777-300ER",
      frequency: "Daily"
    }
  ];

  useEffect(() => {
    // Check if user is admin
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      setIsAdmin(user.role === 'admin');
    }

    // Load routes from localStorage or use initial data
    const storedRoutes = localStorage.getItem('routes');
    if (storedRoutes) {
      setRoutes(JSON.parse(storedRoutes));
    } else {
      setRoutes(initialRoutes);
      localStorage.setItem('routes', JSON.stringify(initialRoutes));
    }
  }, []);

  const handleSaveRoute = (formData: FormData) => {
    const routeData = {
      id: editingRoute?.id || Date.now().toString(),
      origin: formData.get('origin') as string,
      destination: formData.get('destination') as string,
      distance: formData.get('distance') as string,
      flightTime: formData.get('flightTime') as string,
      aircraft: formData.get('aircraft') as string,
      frequency: formData.get('frequency') as string,
    };

    let updatedRoutes;
    if (editingRoute) {
      updatedRoutes = routes.map(route => 
        route.id === editingRoute.id ? routeData : route
      );
      toast.success("Route updated successfully!");
    } else {
      updatedRoutes = [...routes, routeData];
      toast.success("Route added successfully!");
    }

    setRoutes(updatedRoutes);
    localStorage.setItem('routes', JSON.stringify(updatedRoutes));
    setIsDialogOpen(false);
    setEditingRoute(null);
  };

  const handleDeleteRoute = (id: string) => {
    const updatedRoutes = routes.filter(route => route.id !== id);
    setRoutes(updatedRoutes);
    localStorage.setItem('routes', JSON.stringify(updatedRoutes));
    toast.success("Route deleted successfully!");
  };

  const handleEditRoute = (route: Route) => {
    setEditingRoute(route);
    setIsDialogOpen(true);
  };

  const handleAddRoute = () => {
    setEditingRoute(null);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold font-heading text-foreground mb-4">
                Route Network
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Explore Virtual BAW's comprehensive route network connecting London to destinations worldwide.
              </p>
            </div>
            
            {isAdmin && (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={handleAddRoute} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Route
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{editingRoute ? 'Edit Route' : 'Add New Route'}</DialogTitle>
                    <DialogDescription>
                      {editingRoute ? 'Update route information' : 'Add a new route to the network'}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    handleSaveRoute(formData);
                  }}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="origin">Origin</Label>
                          <Input
                            id="origin"
                            name="origin"
                            defaultValue={editingRoute?.origin}
                            placeholder="LHR"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination">Destination</Label>
                          <Input
                            id="destination"
                            name="destination"
                            defaultValue={editingRoute?.destination}
                            placeholder="JFK"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="distance">Distance</Label>
                          <Input
                            id="distance"
                            name="distance"
                            defaultValue={editingRoute?.distance}
                            placeholder="3,459 nm"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="flightTime">Flight Time</Label>
                          <Input
                            id="flightTime"
                            name="flightTime"
                            defaultValue={editingRoute?.flightTime}
                            placeholder="8h 15m"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="aircraft">Aircraft</Label>
                        <Input
                          id="aircraft"
                          name="aircraft"
                          defaultValue={editingRoute?.aircraft}
                          placeholder="A350-1000"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="frequency">Frequency</Label>
                        <Input
                          id="frequency"
                          name="frequency"
                          defaultValue={editingRoute?.frequency}
                          placeholder="Daily"
                          required
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">{editingRoute ? 'Update Route' : 'Add Route'}</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <Card key={route.id} className="shadow-medium hover:shadow-strong transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Plane className="h-6 w-6 text-primary" />
                  <Badge variant="secondary">{route.frequency}</Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {route.origin} → {route.destination}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Operated by {route.aircraft}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Distance:</span>
                    </div>
                    <span className="font-medium">{route.distance}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Flight Time:</span>
                    </div>
                    <span className="font-medium">{route.flightTime}</span>
                  </div>
                </div>
                
                {isAdmin && (
                  <div className="flex gap-2 pt-3 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditRoute(route)}
                      className="flex items-center gap-1"
                    >
                      <Edit className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteRoute(route.id)}
                      className="flex items-center gap-1 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;