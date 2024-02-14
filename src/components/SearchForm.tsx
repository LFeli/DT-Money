import * as z from 'zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: searchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="flex gap-4"
    >
      <input
        type="text"
        placeholder="Busque por transações"
        className="flex-1 p-4 rounded-md bg-gray-900 text-gray-300 placeholder:text-gray-500"
        {...register('query')}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-transparent hover:bg-green-500 text-green-300 hover:text-white p-4 border border-green-300 hover:border-green-500 rounded-md flex items-center gap-3 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Search size={20} />
        Buscar
      </button>
    </form>
  )
}
