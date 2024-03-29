import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'
import { priceFormatter } from '../utils/formatter'
import { useSummary } from '../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <section className="w-full max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 -mt-20">
      <div className="bg-gray-600 p-8 rounded-md">
        <header className="text-gray-300 flex items-center justify-between">
          <span>Entradas</span>
          <ArrowUpCircle size={32} className="text-green-300" />
        </header>

        <strong className="block mt-4 text-3.5xl">
          {priceFormatter.format(summary.income)}
        </strong>
      </div>

      <div className="bg-gray-600 p-8 rounded-md">
        <header className="text-gray-300 flex items-center justify-between">
          <span>Saídas</span>
          <ArrowDownCircle size={32} className="text-red-300" />
        </header>

        <strong className="block mt-4 text-3.5xl">
          {priceFormatter.format(summary.outcome)}
        </strong>
      </div>

      <div className="bg-green-700 p-8 rounded-md">
        <header className="text-gray-300 flex items-center justify-between">
          <span>Total</span>
          <DollarSign size={32} className="text-white" />
        </header>

        <strong className="block mt-4 text-3.5xl">
          {priceFormatter.format(summary.total)}
        </strong>
      </div>
    </section>
  )
}
