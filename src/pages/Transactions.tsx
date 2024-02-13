import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { SearchForm } from '../components/SearchForm'
import { PriceHighlight } from '../components/PriceHighlight'
import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionContext'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <main className="h-full text-gray-100">
      <Header />
      <Summary />

      <div className="w-full max-w-6xl mt-16 mx-auto mb-0 px-6">
        <SearchForm />
        <table className="w-full mt-6 border-separate border-spacing-y-2">
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td className="px-8 py-5 bg-gray-700 w-1/2 rounded-tl-md rounded-bl-md">
                    {transaction.description}
                  </td>
                  <PriceHighlight statusColor={transaction.type}>
                    {transaction.price}
                  </PriceHighlight>
                  <td className="px-8 py-5 bg-gray-700 ">
                    {transaction.category}
                  </td>
                  <td className="px-8 py-5 bg-gray-700 rounded-tr-md rounded-br-md">
                    {transaction.createdAt}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
