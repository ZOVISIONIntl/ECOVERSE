import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EraScriptHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-800 text-white p-8 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-6xl font-extrabold tracking-wide">EraScript Publishing</h1>
        <p className="text-indigo-300 text-lg">A Sovereign Literary Engine of ZoVerse</p>
        <p className="text-purple-200 text-sm max-w-2xl mx-auto">
          All works are authored by Alonzo Maurice Curry Jr., protected under the Nu Vizion Trust, and exclusively benefit the NuWurldEra mission.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Card className="bg-black/60 border border-indigo-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gold-400">📚 Library Access</h2>
            <p>Browse and purchase original works: books, Codex entries, audiobooks, and more.</p>
            <Button asChild>
              <a href="/library">Enter Library</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border border-purple-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-indigo-400">📝 Publishing Pipeline</h2>
            <p>View the real-time publishing tools powered by Dawn & Dust. This route is for internal use only.</p>
            <Button asChild>
              <a href="/dashboard">Go to Operator Dashboard</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-purple-400 pt-16">
        EraScript is the official publishing branch of Zo Vision Intl.<br />
        All rights reserved © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
