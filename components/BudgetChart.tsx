import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export const BudgetChart = ({ transactions }) => {
  const budgets = { Food: 300, Transport: 100, Bills: 200, Entertainment: 150, Other: 100 };
  const spent = {};
  transactions.forEach(tx => spent[tx.category] = (spent[tx.category] || 0) + tx.amount);
  const data = Object.keys(budgets).map(category => ({
    category,
    budget: budgets[category],
    spent: spent[category] || 0
  }));

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Budget vs Actual</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" /><YAxis /><Tooltip />
          <Bar dataKey="budget" fill="#d1d5db" />
          <Bar dataKey="spent" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};