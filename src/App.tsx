import { Header } from './components/Header'
import { Summary } from './components/Summary'

export function App() {
  return (
    <main className="h-full text-gray-100">
      <Header />
      <Summary />

      <div className="w-full max-w-6xl mt-16 mx-auto mb-0 px-6">
        <table className="w-full mt-6 border-separate border-spacing-y-2">
          <tbody>
            <tr>
              <td className="px-8 py-5 bg-gray-700 w-1/2 rounded-tl-md rounded-bl-md">
                Desenvolvimento de site
              </td>
              <td className="px-8 py-5 bg-gray-700 text-green-300">
                R$ 12.000,00
              </td>
              <td className="px-8 py-5 bg-gray-700 ">Venda</td>
              <td className="px-8 py-5 bg-gray-700 rounded-tr-md rounded-br-md">
                13/04/2022
              </td>
            </tr>
            <tr>
              <td className="px-8 py-5 bg-gray-700 w-1/2 rounded-tl-md rounded-bl-md">
                Aluguel do apartamento
              </td>
              <td className="px-8 py-5 bg-gray-700 text-red-300">
                - R$ 1.200,00
              </td>
              <td className="px-8 py-5 bg-gray-700 ">Casa</td>
              <td className="px-8 py-5 bg-gray-700 rounded-tr-md rounded-br-md">
                13/04/2022
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
