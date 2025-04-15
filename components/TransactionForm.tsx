import React, { useState } from "react";
const categories = ["Food", "Transport", "Bills", "Entertainment", "Other"];

export const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({ amount: "", date: "", description: "", category: "Food" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.date || !form.description) return;
    onAdd({ ...form, amount: parseFloat(form.amount) });
    setForm({ amount: "", date: "", description: "", category: "Food" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} className="border p-2 rounded w-full" />
      <input name="date" type="date" value={form.date} onChange={handleChange} className="border p-2 rounded w-full" />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded w-full" />
      <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded w-full">
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Transaction</button>
    </form>
  );
};