import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ServiceRequestForm() {
  const [form, setForm] = useState({
    name: "", company: "", type: "", location: "", urgency: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted. Dawn & Dust will dispatch shortly.");
  };

  return (
    <div className="max-w-xl mx-auto text-white space-y-6 p-8">
      <h1 className="text-4xl font-bold text-lime-400">Submit Recovery Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "company", "type", "location", "urgency"].map((field) => (
          <div key={field}>
            <label className="block capitalize text-sm">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black text-white border border-lime-600 rounded"
            />
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
