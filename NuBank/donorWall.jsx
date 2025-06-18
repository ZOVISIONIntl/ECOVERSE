import React from 'react';

export default function DonorWall({ donors }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Donor Wall of Honor</h2>
      <ul className="mt-2 space-y-2">
        {donors.map((donor, index) => (
          <li key={index} className="border-b py-2">
            <span className="font-semibold">{donor.name}</span> — {donor.amount} donated
          </li>
        ))}
      </ul>
    </div>
  );
}