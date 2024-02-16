import * as z from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { TransactionTypeButton } from './TransactionTypeButton'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black/75" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-modal py-10 px-12 rounded-md bg-gray-800">
        <Dialog.Title className="text-2xl font-bold leading-normal text-gray-100">
          Nova transação
        </Dialog.Title>

        <Dialog.Close className="absolute bg-transparent text-gray-500 top-6 right-6 leading-0 cursor-pointer">
          <X size={24} />
        </Dialog.Close>

        <form
          onSubmit={handleSubmit(handleCreateNewTransaction)}
          className="mt-6 flex flex-col gap-4 "
        >
          <input
            type="text"
            placeholder="Descrição"
            className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  className="mt-2 grid grid-cols-2 gap-4"
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton status="income" value="income">
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton status="outcome" value="outcome">
                    Saída
                  </TransactionTypeButton>
                </RadioGroup.Root>
              )
            }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 bg-green-500 hover:bg-green-700 text-white font-bold px-1 rounded-md mt-6 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
