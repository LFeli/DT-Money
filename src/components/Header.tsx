import logoImage from '../../public/favicon.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
  return (
    <header className="bg-gray-900 px-0 pt-10 pb-30">
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <img src={logoImage} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="h-12 px-5 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold cursor-pointer transition-colors">
              Nova transação
            </button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
