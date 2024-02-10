import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'

export function Summary() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 -mt-20">
      <div className="bg-gray-600 p-8 rounded-md">
        <header className="text-gray-300 flex items-center justify-between">
          <span>Entradas</span>
          <ArrowUpCircle size={32} className="text-green-300" />
        </header>

        <strong className="block mt-4 text-3.5xl">R$ 17.400,00</strong>
      </div>

      <div className="bg-gray-600 p-8 rounded-md">
        <header className="text-gray-300 flex items-center justify-between">
          <span>Saídas</span>
          <ArrowDownCircle size={32} className="text-red-300" />
        </header>

        <strong className="block mt-4 text-3.5xl">R$ 17.400,00</strong>
      </div>

      <div className="bg-green-700 p-8 rounded-md">
        <header className="text-gray-300 flex items-center justify-between">
          <span>Total</span>
          <DollarSign size={32} className="text-white" />
        </header>

        <strong className="block mt-4 text-3.5xl">R$ 17.400,00</strong>
      </div>
    </section>
  )
}
