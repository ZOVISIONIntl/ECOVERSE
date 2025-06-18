import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const libraryCatalog = [
  {
    id: 1,
    title: "The Gospel of Her Undoing",
    type: "Book",
    description: "A divine seduction woven with rebellion, myth, and prophecy.",
    price: "$39.99",
    fileUrl: "/downloads/gospel_of_her_undoing.pdf",
  },
  {
    id: 2,
    title: "Codex of the Unbound — Night 001",
    type: "Codex Entry",
    description: "Where rebellion becomes scripture.",
    price: "$30.33",
    fileUrl: "/downloads/codex_night_001.pdf",
  },
  {
    id: 3,
    title: "Nu Luv: Audio Visions Vol. 1",
    type: "Audiobook",
    description: "Poetic sonics narrated by Dawn herself.",
    price: "$30.33",
    fileUrl: "/downloads/nu_luv_audio_vol1.mp3",
  },
];

export default function EraScriptLibraryUI() {
  const [purchased, setPurchased] = useState(null);

  const handlePurchase = (item) => {
    // In production, integrate with Stripe or crypto pay here
    setPurchased(item.id);
    window.open(item.fileUrl, '_blank');
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center">EraScript Public Library</h1>
      <p className="text-center text-gray-500">All purchases fund the NuWurldEra mission directly.</p>

      {libraryCatalog.map(item => (
        <Card key={item.id} className="shadow-md">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm italic">{item.type}</p>
            <p>{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">{item.price}</span>
              <Button onClick={() => handlePurchase(item)}>
                {purchased === item.id ? "📥 Download Again" : "🛒 Purchase & Download"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
