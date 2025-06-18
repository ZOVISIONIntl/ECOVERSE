import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NuWurldEraHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white p-8 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold">NuWurldEra</h1>
        <p className="text-lg text-purple-300">
          The Regenerative Engine of Civilization
        </p>
        <p className="max-w-2xl mx-auto text-sm text-purple-200">
          NuWurldEra is a sovereign nonprofit initiative operating under the Nu Vizion Trust. It exists to refine, restore, and reroute all human, economic, and intellectual energy toward a just and self-sustaining future.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="bg-black/70 border border-purple-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-green-400">📥 Intake Services</h2>
            <p>Programs for housing, employment, veterans, single parents, returning citizens, and creatives.</p>
            <Button asChild>
              <a href="/intake">Apply Now</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/70 border border-indigo-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-300">📊 NuBank Systems</h2>
            <p>Every dollar is tax-deductible and recycled through our decentralized economic structure.</p>
            <Button asChild>
              <a href="/banking">View Financial Architecture</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/70 border border-yellow-600">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-400">🎙️ Broadcast + Influence</h2>
            <p>Our content platforms amplify visionary creators, educate, and mobilize global movements.</p>
            <Button asChild>
              <a href="/media">Launch Broadcasts</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/70 border border-pink-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-pink-400">❤️ Donate & Support</h2>
            <p>Fuel the future. Donations power every transformation we deploy.</p>
            <Button asChild>
              <a href="/donate">Contribute to NuWurldEra</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-purple-500 pt-16">
        Operated by Zo Vision Intl • Powered by Nu Vizion Trust • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
