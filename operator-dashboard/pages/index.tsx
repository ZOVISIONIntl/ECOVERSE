import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const portals = [
  { name: "Codex of the Unbound", description: "Enter the 9999-Night archive.", href: "/codex" },
  { name: "NuWurldEra", description: "Infrastructure, housing, sovereignty.", href: "/nuwurldera" },
  { name: "ZoBank + ZoDinar", description: "Decentralized wealth & currency.", href: "/zobank" },
  { name: "Tailored Associates", description: "Elite private networks & services.", href: "/tailored" },
  { name: "EraScript Publishing", description: "Books, audio, drops, and legacy.", href: "/erascript" },
  { name: "Nu Recovery", description: "Truck & freight rescue intelligence.", href: "/nurecovery" }
];

export default function EcoverseCommandInterface() {
  const [search, setSearch] = useState("");

  const filteredPortals = portals.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-4xl font-bold">ECOVERSE: Command Interface</h1>
      <p className="text-muted-foreground">Choose your domain. Each path unlocks a function of the Vision.</p>
      <Input 
        placeholder="Search Portals..." 
        className="max-w-md" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {filteredPortals.map((portal, index) => (
          <Card key={index} className="hover:shadow-xl cursor-pointer">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">{portal.name}</h2>
              <p className="text-sm text-muted-foreground">{portal.description}</p>
              <Button className="mt-4" onClick={() => window.location.href = portal.href}>Enter</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
