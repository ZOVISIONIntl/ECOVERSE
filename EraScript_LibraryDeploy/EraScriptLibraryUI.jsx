import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const libraryCatalog = [
  {
    id: 1,
    title: "The Gospel of Her Undoing",
    type: "Book",
    description: "A divine seduction woven with rebellion, myth, and prophecy.",
    price: 1999,
    fileUrl: "/downloads/gospel_of_her_undoing.pdf"
  },
  {
    id: 2,
    title: "Codex of the Unbound — Night 001",
    type: "Codex Entry",
    description: "Where rebellion becomes scripture.",
    price: 333,
    fileUrl: "/downloads/codex_night_001.pdf"
  },
  {
    id: 3,
    title: "Nu Luv: Audio Visions Vol. 1",
    type: "Audiobook",
    description: "Poetic sonics narrated by Dawn herself.",
    price: 999,
    fileUrl: "/downloads/nu_luv_audio_vol1.mp3"
  }
];

export default function EraScriptLibraryUI() {
  const [purchased, setPurchased] = useState(null);

  const handlePurchase = async (item) => {
    // Stripe or crypto integration logic here
    setPurchased(item.id);
    window.open(item.fileUrl, '_blank');
  };

  return (
    <div className="p-10 space-y-6 max-w-5xl mx-auto bg-gradient-to-br from-black via-indigo-900 to-purple-800 text-white rounded-xl shadow-xl">
      <h1 className="text-5xl font-bold text-center tracking-wide">📚 EraScript Library</h1>
      <p className="text-center text-sm text-purple-300">All purchases support the NuWurldEra mission.</p>

      {libraryCatalog.map(item => (
        <Card key={item.id} className="bg-black/60 border border-purple-700">
          <CardContent className="p-5 space-y-2">
            <h2 className="text-2xl font-semibold text-gold-500">{item.title}</h2>
            <p className="italic text-sm text-indigo-300">{item.type}</p>
            <p>{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-400">${(item.price / 100).toFixed(2)}</span>
              <Button onClick={() => handlePurchase(item)}>
                {purchased === item.id ? "📥 Download Again" : "🛒 Purchase"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}