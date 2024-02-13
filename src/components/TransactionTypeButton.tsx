import * as RadioGroup from '@radix-ui/react-radio-group'
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'

const STATUS_ICON = {
  income: (
    <ArrowUpCircle
      size={24}
      className="text-green-300 group-data-[state='checked']:text-white"
    />
  ),
  outcome: (
    <ArrowDownCircle
      size={24}
      className="text-red-300 group-data-[state='checked']:text-white"
    />
  ),
} as const

interface TransactionTypeButtonProps {
  value: string
  status: 'income' | 'outcome'
  children?: React.ReactNode
}

export function TransactionTypeButton({
  status,
  value,
  children,
}: TransactionTypeButtonProps) {
  const dataCheckedColor =
    status === 'income'
      ? 'data-[state="checked"]:bg-green-700'
      : 'data-[state="checked"]:bg-red-700'

  return (
    <RadioGroup.Item
      value={value}
      className={`bg-gray-700 hover:bg-gray-600 ${dataCheckedColor} text-gray-300 data-[state="checked"]:text-white 
      p-4 rounded-md flex items-center justify-center gap-2 transition-colors group`}
    >
      {STATUS_ICON[status]}
      {children}
    </RadioGroup.Item>
  )
}
