import { TransactionsProvider } from './contexts/TransactionContext'
import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  )
}
