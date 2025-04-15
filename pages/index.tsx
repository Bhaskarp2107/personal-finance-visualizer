import React, { useEffect, useState } from "react";
import { TransactionForm } from "../components/TransactionForm";
import { TransactionList } from "../components/TransactionList";
import { SummaryCards } from "../components/SummaryCards";
import { ExpenseBarChart } from "../components/ExpenseBarChart";
import { CategoryPieChart } from "../components/CategoryPieChart";
import { BudgetChart } from "../components/BudgetChart";

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const sampleData = [
      { id: 1, amount: 100, date: '2025-04-01', description: 'Groceries', category: 'Food' },
      { id: 2, amount: 50, date: '2025-04-03', description: 'Bus Ticket', category: 'Transport' },
      { id: 3, amount: 200, date: '2025-04-10', description: 'Utilities', category: 'Bills' }
    ];
    setTransactions(sampleData);
  }, []);

  const handleAdd = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <main className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">Personal Finance Dashboard</h1>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <TransactionForm onAdd={handleAdd} />
        </div>

        <SummaryCards transactions={transactions} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ExpenseBarChart transactions={transactions} />
          <CategoryPieChart transactions={transactions} />
        </div>

        <BudgetChart transactions={transactions} />

        <div className="bg-white p-4 rounded-xl shadow-md">
          <TransactionList transactions={transactions} onDelete={handleDelete} />
        </div>
      </div>
    </main>
  );
}