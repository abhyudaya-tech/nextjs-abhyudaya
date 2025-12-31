'use client'
import { FaPlus, FaFilter, FaDownload } from 'react-icons/fa'
import AccountSummaryCards from './account-summary-cards'
import TransactionTable from './transaction-table'
import { getAllTransactions, Transaction } from '@/lib/queries/getTransactions'
import { useState, useEffect } from 'react'

// const transactions: Transaction[] = [
//     {
//         id: '1',
//         transaction_date: '29-12-2025',
//         transaction_type: 'expense',
//         transaction_category: 'Administrative Expense',
//         description: 'Stamp Paper Fee for Canara Net Banking Services (₹500 Value + ₹50 Service Charge)',
//         party: 'Sai E-Filing',
//         party_details: 'Opp. to Sri Rajmurali Theatre, Kodigehalli, Bengaluru - 560092',
//         account_type: 'Private - PayTM',
//         amount: 550,
//         notes: 'Stamp paper charges for net banking',
//         approved_by: 'Akshay G J',
//         updated_by: 'Nagarjuna P',
//         updated_on: '29-12-2025 07:30 PM',
//     },
//     {
//         id: '2',
//         transaction_date: '29-12-2025',
//         transaction_type: 'income',
//         transaction_category: 'Donation - Member',
//         description: 'Voluntary contribution towards Admin and Ops expenses',
//         party: 'Abhyudaya Tech',
//         party_details: 'A Freelancing group of individuals',
//         account_type: 'Private - PayTM',
//         amount: 1550,
//         notes: 'Received as per agreement',
//         approved_by: 'Akshay G J',
//         updated_by: 'Nagarjuna P',
//         updated_on: '29-12-2025 10:00 AM',
//     },
//     {
//         id: '3',
//         transaction_date: '29-12-2025',
//         transaction_type: 'income',
//         transaction_category: 'Donation - Member',
//         description: 'Voluntary contribution towards Minimum Balance Maintenance',
//         party: 'Abhyudaya Tech',
//         party_details: 'A Freelancing group of individuals',
//         account_type: 'Official - Canara',
//         amount: 13450,
//         notes: 'Received as per agreement',
//         approved_by: 'Akshay G J',
//         updated_by: 'Nagarjuna P',
//         updated_on: '29-12-2025 10:00 AM',
//     },
//     {
//         id: '4',
//         transaction_date: '26-12-2025',
//         transaction_type: 'expense',
//         transaction_category: 'Bank & Service Charges',
//         description: 'Amount debited towards non-maintenance of minimum balance',
//         party: 'Canara Bank',
//         party_details: 'Sahakarnagar Branch',
//         account_type: 'Official - Canara',
//         amount: 3100,
//         notes: '',
//         approved_by: 'Akshay G J',
//         updated_by: 'Nagarjuna P',
//         updated_on: '26-12-2025 02:30 PM',
//     },
//     {
//         id: '5',
//         transaction_date: '01-01-2024',
//         transaction_type: 'expense',
//         transaction_category: 'Administrative Expense',
//         description: 'Pan Card Application & Processing Fees paid to Agent',
//         party: 'Pan Card Agent',
//         party_details: 'J',
//         account_type: 'Private - PayTM',
//         amount: 500,
//         notes: '',
//         approved_by: '',
//         updated_by: 'Nagarjuna P',
//         updated_on: '01-03-2025 04:00 PM',
//     },
//     {
//         id: '6',
//         transaction_date: '01-01-2024',
//         transaction_type: 'income',
//         transaction_category: 'Donation - Member',
//         description: 'Pan Card Application & Processing Fees paid to Agent',
//         party: 'Akshay G J',
//         party_details: 'Trustee, Abhyudaya Foundation',
//         account_type: 'Private - PayTM',
//         amount: 500,
//         notes: '',
//         approved_by: null,
//         updated_by: 'Nagarjuna P',
//         updated_on: '01-01-2024 04:00 PM',
//     },
//     {
//         id: '7',
//         transaction_date: '01-01-2024',
//         transaction_type: 'expense',
//         transaction_category: 'Administrative Expense',
//         description: 'Trust Registration Fees paid to Stamp Vendor',
//         party: 'Gangadhar',
//         party_details: 'Stamp-vendor, Kodigehalli, Bangalore',
//         account_type: 'Private - PayTM',
//         amount: 4500,
//         notes: '',
//         approved_by: null,
//         updated_by: 'Nagarjuna P',
//         updated_on: '01-01-2024 04:00 PM',
//     },
//     {
//         id: '8',
//         transaction_date: '01-01-2024',
//         transaction_type: 'income',
//         transaction_category: 'Donation - Member',
//         description: 'Trust Registration Fees paid to Stamp Vendor',
//         party: 'Akshay G J',
//         party_details: 'Trustee, Abhyudaya Foundation',
//         account_type: 'Private - PayTM',
//         amount: 4500,
//         notes: '',
//         approved_by: null,
//         updated_by: 'Nagarjuna P',
//         updated_on: '01-01-2024 04:00 PM',
//     },
// ];

export default function FinbookPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        let mounted = true
        async function fetchTransactions() {
            try {
                const tx: Transaction[] = await getAllTransactions()
                if (mounted && tx) setTransactions(tx)
            } catch (e) {
                console.error('Error fetching transactions:', e);
            }
        }
        fetchTransactions()
        return () => {
            mounted = false
        }
    }, [])
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">FinBook</h1>
                <p className="text-gray-600">Manage and track all financial transactions</p>
            </div>

            {/* Account Summary Cards */}
            <AccountSummaryCards transactions={transactions} />

            {/* Filters & Actions Bar */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left: Filter & Search */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                            <FaFilter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                            <FaDownload className="w-4 h-4" />
                            Export
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-sm font-medium text-white hover:shadow-lg transition">
                            <FaPlus className="w-4 h-4" />
                            Add Transaction
                        </button>
                    </div>
                </div>
            </div>

            {/* Transaction Table */}
            <TransactionTable transactions={transactions} />
        </div>
    )
}
