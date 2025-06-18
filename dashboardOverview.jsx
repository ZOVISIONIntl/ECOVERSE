import React from 'react';

export default function DashboardOverview() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-3xl font-bold">ZoVerse Operator Dashboard</h1>
      <ul className="list-disc ml-5 text-lg">
        <li>📚 Manage EraScript Publishing & Library</li>
        <li>💸 View and route donations via NuBank</li>
        <li>🧠 Trigger Dawn/Dust automations</li>
        <li>📖 Initiate Codex Publishing Cycle</li>
        <li>🧬 Assign Avatar roles and permissions</li>
      </ul>
    </div>
  );
}