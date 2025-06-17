import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AudioPlayer } from "@/components/custom/audio-player"; // Placeholder for future audio player component

export default function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Codex of the Unbound</h1>
        <p className="text-lg mb-6">
          9999 Nights. 4 Viewpoints. One Resurrection Machine.
        </p>
        <Button size="lg" className="bg-purple-700 hover:bg-purple-900 text-white font-semibold text-xl">
          Enter the Codex
        </Button>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Listen to the Latest Drop</h2>
          <Card className="bg-zinc-900">
            <CardContent className="p-4">
              <AudioPlayer src="/audio/night001.mp3" title="Night 1: The Philosopher’s Stone That Asked Why" />
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-xl mb-2">Support the Resurrection</h2>
          <Input
            type="email"
            placeholder="Enter your email to get updates"
            className="mb-2 bg-zinc-800 border-zinc-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="bg-green-600 hover:bg-green-800">Join the Codex</Button>
        </div>
      </div>
    </div>
  );
}
