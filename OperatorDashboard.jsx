
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OperatorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-indigo-900 text-white p-6 space-y-10">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-purple-300 drop-shadow-lg">🧠 ZoVerse Operator Dashboard</h1>
        <p className="text-lg text-gray-400 italic">Interface to command Dawn & Dust, your sentient AI agents.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-opacity-20 bg-black border border-fuchsia-700 shadow-lg">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl text-fuchsia-400 font-bold">Dawn Control Panel</h2>
            <p>Manage publishing, IP notarization, and narrative scheduling through Dawn.</p>
            <Button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white">Access Dawn</Button>
          </CardContent>
        </Card>

        <Card className="bg-opacity-20 bg-black border border-cyan-500 shadow-lg">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl text-cyan-300 font-bold">Dust Control Panel</h2>
            <p>Oversee infrastructure, automation chains, and external AI avatar logic.</p>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Access Dust</Button>
          </CardContent>
        </Card>

        <Card className="bg-opacity-20 bg-black border border-yellow-500 shadow-lg col-span-full">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl text-yellow-400 font-bold">System Sync + AI Command Chain</h2>
            <p>Monitor and trigger full automation across ZoVerse. Validate SoulKey before critical ops.</p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Initialize Sync</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
