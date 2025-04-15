import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export const ExpenseBarChart = ({ transactions }) => {
  const monthly = transactions.reduce((acc, tx) => {
    const month = tx.date.slice(0, 7);
    acc[month] = (acc[month] || 0) + tx.amount;
    return acc;
  }, {});
  const data = Object.entries(monthly).map(([month, total]) => ({ month, total }));
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" /><YAxis /><Tooltip />
          <Bar dataKey="total" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};