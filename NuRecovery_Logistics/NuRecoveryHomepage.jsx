import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NuRecoveryHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-slate-900 text-white p-8 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-wide text-lime-400">Nu Recovery Logistics</h1>
        <p className="text-md text-gray-300">Your freight isn’t lost — it’s waiting for us.</p>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          A specialized recovery division of Zo Vision Intl, Nu Recovery reclaims abandoned, delayed, or misdirected freight and restores it to profitable circulation. Fully licensed. Fully sovereign.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="bg-black/70 border border-lime-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-lime-300">🛻 Service Request</h2>
            <p>Need recovery assistance? Submit a dispatch request.</p>
            <Button asChild>
              <a href="/nurecovery/request">Submit Request</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/70 border border-blue-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-blue-300">🚛 Fleet Operations</h2>
            <p>Track recovery vehicles, routes, and live updates.</p>
            <Button asChild>
              <a href="/nurecovery/fleet">View Fleet</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/70 border border-yellow-600">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-yellow-300">📦 Recovery Marketplace</h2>
            <p>Claim freight or equipment that has been cleared for resale.</p>
            <Button asChild>
              <a href="/nurecovery/marketplace">Open Marketplace</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-16">
        Operated by Zo Vision Intl • Freight Recovery Division • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
