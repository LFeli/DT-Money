import { Search } from 'lucide-react'

export function SearchForm() {
  return (
    <form className="flex gap-4 ">
      <input
        type="text"
        placeholder="Busque por transações"
        className="flex-1 p-4 rounded-md bg-gray-900 text-gray-300 placeholder:text-gray-500"
      />
      <button className="bg-transparent hover:bg-green-500 text-green-300 hover:text-white p-4 border border-green-300 hover:border-green-500 rounded-md flex items-center gap-3 transition-colors">
        <Search size={20} />
        Buscar
      </button>
    </form>
  )
}
