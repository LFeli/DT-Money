const STATUS_COLOR = {
  income: 'text-green-300',
  outcome: 'text-red-300',
} as const

interface PriceHighlightProps {
  statusColor: 'income' | 'outcome'
  children?: React.ReactNode
}

export function PriceHighlight({ statusColor, children }: PriceHighlightProps) {
  return (
    <td className={`px-8 py-5 bg-gray-700 ${STATUS_COLOR[statusColor]}`}>
      {children}
    </td>
  )
}
