import React from "react";

export default function FleetTracker() {
  const mockFleet = [
    { id: 1, driver: "ZoOne", location: "Cleveland, OH", status: "En route" },
    { id: 2, driver: "NuWurld Unit 3", location: "Dallas, TX", status: "Awaiting Load" },
    { id: 3, driver: "DustRunner", location: "Atlanta, GA", status: "Returning" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold text-blue-300 mb-6">Fleet Operations</h1>
      <ul className="space-y-4">
        {mockFleet.map(unit => (
          <li key={unit.id} className="p-4 bg-black border border-blue-800 rounded">
            <strong>Driver:</strong> {unit.driver}<br />
            <strong>Location:</strong> {unit.location}<br />
            <strong>Status:</strong> {unit.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
