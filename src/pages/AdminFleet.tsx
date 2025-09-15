import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import { Plane, Users, MapPin, Clock, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Aircraft {
  id: string;
  name: string;
  registration: string;
  range: string;
  capacity: string;
  routes: string;
  notes: string;
  category: string;
}

const AdminFleet = () => {
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingAircraft, setEditingAircraft] = useState<Aircraft | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const initialAircraft: Aircraft[] = [
    {
      id: "1",
      name: "Airbus A320neo",
      registration: "G-TTNA",
      range: "3,500 nm",
      capacity: "180 passengers",
      routes: "European network",
      notes: "Latest generation with Club Suite business class",
      category: "Short-Haul"
    },
    {
      id: "2",
      name: "Airbus A321neo",
      registration: "G-NEOP",
      range: "4,000 nm", 
      capacity: "220 passengers",
      routes: "UK & European destinations",
      notes: "High-density European routes",
      category: "Short-Haul"
    },
    {
      id: "3",
      name: "Boeing 787-8 Dreamliner",
      registration: "G-ZBJB",
      range: "7,350 nm",
      capacity: "214 passengers",
      routes: "North America, Middle East",
      notes: "Fuel-efficient with Club Suite",
      category: "Medium-Haul"
    },
    {
      id: "4",
      name: "Airbus A350-1000",
      registration: "G-XWBA",
      range: "8,700 nm",
      capacity: "331 passengers",
      routes: "Premium long-haul worldwide",
      notes: "Flagship aircraft with Club Suite",
      category: "Long-Haul"
    }
  ];

  useEffect(() => {
    // Check if user is admin
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      setIsAdmin(user.role === 'admin');
    }

    // Load aircraft from localStorage or use initial data
    const storedAircraft = localStorage.getItem('aircraft');
    if (storedAircraft) {
      setAircraft(JSON.parse(storedAircraft));
    } else {
      setAircraft(initialAircraft);
      localStorage.setItem('aircraft', JSON.stringify(initialAircraft));
    }
  }, []);

  const handleSaveAircraft = (formData: FormData) => {
    const aircraftData = {
      id: editingAircraft?.id || Date.now().toString(),
      name: formData.get('name') as string,
      registration: formData.get('registration') as string,
      range: formData.get('range') as string,
      capacity: formData.get('capacity') as string,
      routes: formData.get('routes') as string,
      notes: formData.get('notes') as string,
      category: formData.get('category') as string,
    };

    let updatedAircraft;
    if (editingAircraft) {
      updatedAircraft = aircraft.map(ac => 
        ac.id === editingAircraft.id ? aircraftData : ac
      );
      toast.success("Aircraft updated successfully!");
    } else {
      updatedAircraft = [...aircraft, aircraftData];
      toast.success("Aircraft added successfully!");
    }

    setAircraft(updatedAircraft);
    localStorage.setItem('aircraft', JSON.stringify(updatedAircraft));
    setIsDialogOpen(false);
    setEditingAircraft(null);
  };

  const handleDeleteAircraft = (id: string) => {
    const updatedAircraft = aircraft.filter(ac => ac.id !== id);
    setAircraft(updatedAircraft);
    localStorage.setItem('aircraft', JSON.stringify(updatedAircraft));
    toast.success("Aircraft deleted successfully!");
  };

  const handleEditAircraft = (aircraft: Aircraft) => {
    setEditingAircraft(aircraft);
    setIsDialogOpen(true);
  };

  const handleAddAircraft = () => {
    setEditingAircraft(null);
    setIsDialogOpen(true);
  };

  // Group aircraft by category
  const groupedAircraft = aircraft.reduce((acc, ac) => {
    if (!acc[ac.category]) {
      acc[ac.category] = [];
    }
    acc[ac.category].push(ac);
    return acc;
  }, {} as Record<string, Aircraft[]>);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Access Denied</h1>
          <p className="text-muted-foreground">You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold font-heading text-foreground mb-4">
                Fleet Management
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Admin panel to manage Virtual BAW's aircraft fleet.
              </p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleAddAircraft} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Aircraft
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>{editingAircraft ? 'Edit Aircraft' : 'Add New Aircraft'}</DialogTitle>
                  <DialogDescription>
                    {editingAircraft ? 'Update aircraft information' : 'Add a new aircraft to the fleet'}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  handleSaveAircraft(formData);
                }}>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Aircraft Name</Label>
                      <Input
                        id="name"
                        name="name"
                        defaultValue={editingAircraft?.name}
                        placeholder="Airbus A350-1000"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="registration">Registration</Label>
                        <Input
                          id="registration"
                          name="registration"
                          defaultValue={editingAircraft?.registration}
                          placeholder="G-XWBA"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input
                          id="category"
                          name="category"
                          defaultValue={editingAircraft?.category}
                          placeholder="Long-Haul"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="range">Range</Label>
                        <Input
                          id="range"
                          name="range"
                          defaultValue={editingAircraft?.range}
                          placeholder="8,700 nm"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="capacity">Capacity</Label>
                        <Input
                          id="capacity"
                          name="capacity"
                          defaultValue={editingAircraft?.capacity}
                          placeholder="331 passengers"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="routes">Primary Routes</Label>
                      <Input
                        id="routes"
                        name="routes"
                        defaultValue={editingAircraft?.routes}
                        placeholder="Premium long-haul worldwide"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        defaultValue={editingAircraft?.notes}
                        placeholder="Flagship aircraft with Club Suite"
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">{editingAircraft ? 'Update Aircraft' : 'Add Aircraft'}</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedAircraft).map(([category, categoryAircraft]) => (
            <section key={category} className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-semibold font-heading text-foreground mb-2">
                  {category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryAircraft.map((aircraft) => (
                  <Card key={aircraft.id} className="shadow-medium hover:shadow-strong transition-shadow">
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

                      <div className="flex gap-2 pt-3 border-t border-border">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditAircraft(aircraft)}
                          className="flex items-center gap-1"
                        >
                          <Edit className="h-3 w-3" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteAircraft(aircraft.id)}
                          className="flex items-center gap-1 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminFleet;