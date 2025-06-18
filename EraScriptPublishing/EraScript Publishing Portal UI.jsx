import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EraScriptWebUI() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('book');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const handlePublish = async () => {
    const payload = {
      title,
      type,
      author,
      dateCreated: new Date().toISOString(),
      body,
    };

    const res = await fetch('/api/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className="p-6 space-y-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">EraScript Publishing Portal</h1>
      <Card>
        <CardContent className="space-y-4 p-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="book">Book</option>
            <option value="music">Music</option>
            <option value="audiobook">Audiobook</option>
            <option value="script">Script</option>
            <option value="poem">Poem</option>
            <option value="codex">Codex Entry</option>
          </select>
          <textarea
            placeholder="Content Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border rounded h-40"
          ></textarea>
          <Button onClick={handlePublish}>🪄 Publish</Button>
          {response && (
            <pre className="bg-gray-100 p-2 rounded text-xs mt-4">
              {JSON.stringify(response, null, 2)}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
