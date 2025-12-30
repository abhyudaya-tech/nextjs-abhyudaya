import { FaArrowUp, FaArrowDown, FaEquals } from 'react-icons/fa'

interface Transaction {
  id: string
  transaction_date: string
  transaction_type: 'Income' | 'Expense'
  transaction_category: string
  description: string
  party: string
  party_details: string
  account_type: string
  amount: number
  notes: string
  approved_by: string | null
  updated_by: string
  updated_on: string
}

interface AccountSummary {
  name: string
  income: number
  expense: number
  net: number
  color: string
  bgColor: string
}

interface AccountSummaryCardsProps {
  transactions: Transaction[]
}

const AccountSummaryCards = ({ transactions }: AccountSummaryCardsProps) => {
  // Calculate account summaries from transactions
  const calculateAccountSummary = (accountName: string): { income: number; expense: number } => {
    const accountTransactions = transactions.filter((t) => t.account_type === accountName)
    return {
      income: accountTransactions
        .filter((t) => t.transaction_type === 'Income')
        .reduce((sum, t) => sum + t.amount, 0),
      expense: accountTransactions
        .filter((t) => t.transaction_type === 'Expense')
        .reduce((sum, t) => sum + t.amount, 0),
    }
  }

  const official = calculateAccountSummary('Official - Canara')
  const private_ = calculateAccountSummary('Private - PayTM')
  const overallIncome = transactions
    .filter((t) => t.transaction_type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0)
  const overallExpense = transactions
    .filter((t) => t.transaction_type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const accounts: AccountSummary[] = [
    {
      name: 'Official - Canara',
      income: official.income,
      expense: official.expense,
      net: official.income - official.expense,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Private - PayTM',
      income: private_.income,
      expense: private_.expense,
      net: private_.income - private_.expense,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Overall',
      income: overallIncome,
      expense: overallExpense,
      net: overallIncome - overallExpense,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {accounts.map((account) => (
        <div
          key={account.name}
          className={`${account.bgColor} rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition`}
        >
          {/* Header */}
          <div className="mb-6">
            <h3 className={`text-lg font-bold bg-gradient-to-r ${account.color} inline-block text-transparent bg-clip-text`}>
              {account.name}
            </h3>
          </div>

          {/* Metrics */}
          <div className="space-y-4">
            {/* Income */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaArrowUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600 font-medium">Income</span>
              </div>
              <span className="text-lg font-bold text-green-600">{formatCurrency(account.income)}</span>
            </div>

            {/* Expense */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaArrowDown className="w-4 h-4 text-red-600" />
                <span className="text-sm text-gray-600 font-medium">Expense</span>
              </div>
              <span className="text-lg font-bold text-red-600">{formatCurrency(account.expense)}</span>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-300 my-2" />

            {/* Net */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaEquals className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-semibold">Net</span>
              </div>
              <span className={`text-lg font-bold ${account.net >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                {formatCurrency(account.net)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AccountSummaryCards
