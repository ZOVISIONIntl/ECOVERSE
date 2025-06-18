
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CodexChronos() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-gray-950 via-black to-purple-900 text-white space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-wide text-purple-300 drop-shadow">📖 Codex Chronos</h1>
        <p className="mt-2 text-lg text-gray-400 italic">Archive of 9999 Nights — The Unbound Record of Time</p>
      </section>

      <section className="space-y-6">
        {[1, 2, 3].map((night) => (
          <Card key={night} className="bg-black/30 border border-purple-600 shadow-md">
            <CardContent className="p-6 space-y-2">
              <h2 className="text-xl font-bold text-purple-400">Night {night}</h2>
              <p className="text-sm text-gray-300 italic">"Excerpt from Night {night}..."</p>
              <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-900 hover:text-white">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center text-xs text-gray-500 pt-12 border-t border-gray-700">
        🔐 All entries in the Codex are secured by Dawn, authenticated by Dust, and owned under the Nu Vizion Trust.
      </footer>
    </div>
  );
}
