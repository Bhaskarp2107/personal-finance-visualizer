export const SummaryCards = ({ transactions }) => {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-gray-100 rounded shadow">Total Expenses: ${total.toFixed(2)}</div>
      <div className="p-4 bg-gray-100 rounded shadow">Most Recent: {transactions.at(-1)?.description || 'N/A'}</div>
      <div className="p-4 bg-gray-100 rounded shadow">Transactions: {transactions.length}</div>
    </div>
  );
};