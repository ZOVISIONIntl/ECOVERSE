import React from "react";
import { Button } from "@/components/ui/button";

export default function RecoveryMarketplace() {
  const items = [
    { id: 1, name: "2019 Freightliner Cab", price: "$14,000" },
    { id: 2, name: "40ft Steel Shipping Container", price: "$2,750" },
    { id: 3, name: "Recovered Retail Pallets", price: "$900" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold text-yellow-300 mb-6">Recovery Marketplace</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="p-4 bg-black border border-yellow-600 rounded space-y-2">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-yellow-200">{item.price}</p>
            <Button>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
