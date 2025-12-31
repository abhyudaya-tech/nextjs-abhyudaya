import { supabase } from '@/lib/supabase'

export interface UserRef {
  id: string
  full_name: string | null
}
export interface Transaction {
  id: string
  transaction_date: string
  transaction_type: 'income' | 'expense'
  transaction_category: string
  description: string
  party: string
  party_details: string
  account_type: string
  amount: number
  notes: string
  approved_by: UserRef | null
  updated_by: UserRef
  updated_at: string
}

export async function getAllTransactions() {
  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('*')

  console.log('Transactions data:', transactions, 'error:', error);
  if (error) throw error

  const userIds = Array.from(
    new Set(
      transactions
        .flatMap(t => [t.approved_by, t.updated_by])
        .filter(Boolean)
    )
  )

  const { data: users } = await supabase
    .from('ycm_users')
    .select('id, full_name')
    .in('id', userIds)

  const usersMap = (users || []).reduce<Record<string, UserRef>>((acc, u) => {
    acc[u.id] = u
    return acc
  }, {})

  const enrichedTransactions = transactions.map(t => ({
    ...t,
    approved_by: t.approved_by ? usersMap[t.approved_by] : null,
    updated_by: t.updated_by ? usersMap[t.updated_by] : null,
  }))

  console.log('Enriched Transactions:', enrichedTransactions);
  return enrichedTransactions;
}

// Mapping for better readability in UI
export const TRANSACTIONS_LABEL_MAP: Record<string, string> = {
  // Account types
  official_canara: 'Official - Canara',
  private_paytm: 'Private - PayTM',

  // Income categories
  donation_member: 'Donation - Member',
  donation_individual: 'Donation - Individual',
  donation_institutional: 'Donation - Institutional',
  grant_or_funding: 'Grant / Funding',
  membership_contribution: 'Membership Contribution',

  // Expense categories
  administrative_expense: 'Administrative Expense',
  operational_expense: 'Operational Expense',
  bank_and_service_charges: 'Bank & Service Charges',
};