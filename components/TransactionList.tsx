export const TransactionList = ({ transactions, onDelete }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Transactions</h2>
    <ul className="space-y-1">
      {transactions.map(tx => (
        <li key={tx.id} className="border p-2 rounded flex justify-between items-center">
          <span>{tx.date} - {tx.description} (${tx.amount}) [{tx.category}]</span>
          <button onClick={() => onDelete(tx.id)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  </div>
);