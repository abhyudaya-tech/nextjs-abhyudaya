'use client';
import { FaEdit, FaTrash, FaEye, FaCheck, FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6';
import { Transaction, TRANSACTIONS_LABEL_MAP } from '@/lib/queries/getTransactions';
import { formatDateToCustom } from '@/app/utils/date-formatters';

interface TransactionTableProps {
    transactions: Transaction[]
}

const TransactionTable = ({ transactions }: TransactionTableProps) => {
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null)
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' } | null>(null)

    const showToast = (message: string, type: 'error' | 'success' = 'error') => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 3000)
    }

    const handleViewDetails = (transaction: Transaction) => {
        setSelectedTransaction(transaction)
        setShowModal(true)
    }

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation()
        showToast('You are not allowed. Contact Organization Admin', 'error')
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        showToast('You are not allowed. Contact Organization Admin', 'error')
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const getTransactionTypeColor = (type: string) => {
        return type === 'Income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    }

    const getAmountColor = (type: string) => {
        return type === 'Income' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'
    }

    const filteredTransactions = transactions.filter((t) => selectedAccount === null || t.account_type === selectedAccount)

    return (
        <>
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white text-sm font-medium shadow-lg z-50 ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'
                    }`}>
                    {toast.message}
                </div>
            )}

            {/* Modal */}
            {showModal && selectedTransaction && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-800">Transaction Details</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 transition">
                                <FaXmark className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="px-6 py-6 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Date</p>
                                    <p className="text-lg font-semibold text-gray-800">{formatDateToCustom(selectedTransaction.transaction_date)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Type</p>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getTransactionTypeColor(selectedTransaction.transaction_type)} capitalize`}>{selectedTransaction.transaction_type}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Category</p>
                                    <p className="text-lg font-semibold text-gray-800">{TRANSACTIONS_LABEL_MAP[selectedTransaction.transaction_category] || selectedTransaction.transaction_category.replaceAll('_', ' ')}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Amount</p>
                                    <p className={`text-lg font-bold ${getAmountColor(selectedTransaction.transaction_type)}`}>
                                        {selectedTransaction.transaction_type === 'income' ? '+' : '-'}{formatCurrency(selectedTransaction.amount)}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Description</p>
                                <p className="text-gray-700">{selectedTransaction.description}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Party</p>
                                <p className="text-gray-700 font-semibold">{selectedTransaction.party}</p>
                                <p className="text-sm text-gray-500 mt-1">{selectedTransaction.party_details}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Account Type</p>
                                    <p className="text-gray-700">{TRANSACTIONS_LABEL_MAP[selectedTransaction.account_type] || selectedTransaction.account_type.replaceAll('_', ' ')}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Approval</p>
                                    {selectedTransaction.approved_by ? (
                                        <div className="flex items-center gap-2">
                                            <FaCheck className="w-4 h-4 text-green-600" />
                                            <span className="text-green-700 font-medium">{selectedTransaction.approved_by.full_name}</span>
                                        </div>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">
                                            <FaTimes className="w-3 h-3" /> Not Approved
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Notes</p>
                                <p className="text-gray-700">{selectedTransaction.notes}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Updated By</p>
                                    <p className="text-gray-700">{selectedTransaction.updated_by.full_name}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Updated At</p>
                                    <p className="text-gray-700">{formatDateToCustom(selectedTransaction.updated_at)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end">
                            <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Header & Filters Combined */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Transactions</h2>
                            <p className="text-sm text-gray-500 mt-1">{filteredTransactions.length} transactions</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => setSelectedAccount(null)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${selectedAccount === null ? 'bg-orange-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                                All Accounts
                            </button>
                            <button onClick={() => setSelectedAccount('official_canara')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${selectedAccount === 'official_canara' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                                Official - Canara
                            </button>
                            <button onClick={() => setSelectedAccount('private_paytm')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${selectedAccount === 'private_paytm' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                                Private - PayTM
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Date & Type</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Description</th>
                                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wide">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Party</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Account</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Approval</th>
                                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wide">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredTransactions.map((transaction) => (
                                <tr key={transaction.id} className="hover:bg-gray-50 transition cursor-pointer" onClick={() => handleViewDetails(transaction)}>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <div>
                                            <p className="text-sm mb-1 text-gray-700">{formatDateToCustom(transaction.transaction_date)}</p>
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getTransactionTypeColor(transaction.transaction_type)} capitalize`}>
                                                {transaction.transaction_type}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                                        <div className="space-y-1">
                                            <p className="font-medium text-gray-700 truncate capitalize">{TRANSACTIONS_LABEL_MAP[transaction.transaction_category] || transaction.transaction_category.replaceAll('_', ' ')}</p>
                                            <p className="text-xs text-gray-400 line-clamp-2">{transaction.description}</p>
                                        </div>
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${getAmountColor(transaction.transaction_type)}`}>
                                        {transaction.transaction_type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                                        <div className="space-y-1">
                                            <p className="font-medium text-gray-700 truncate">{transaction.party}</p>
                                            <p className="text-xs text-gray-400 line-clamp-2">{transaction.party_details}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {TRANSACTIONS_LABEL_MAP[transaction.account_type] || transaction.account_type.replaceAll('_', ' ')}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {transaction.approved_by ? (
                                            <div className="flex items-center gap-2">
                                                <FaCheck className="w-4 h-4 text-green-600" />
                                                <span className="text-sm text-green-700 font-medium">{transaction.approved_by.full_name}</span>
                                            </div>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">
                                                <FaTimes className="w-3 h-3" /> Not Approved
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center justify-center gap-2">
                                            <button title="View details" onClick={() => handleViewDetails(transaction)} className="text-blue-600 hover:text-blue-800 transition p-2">
                                                <FaEye className="w-4 h-4" />
                                            </button>
                                            <button title="Edit - Not allowed" onClick={handleEdit} className="text-orange-600 hover:text-orange-800 transition p-2 opacity-50 cursor-not-allowed">
                                                <FaEdit className="w-4 h-4" />
                                            </button>
                                            <button title="Delete - Not allowed" onClick={handleDelete} className="text-red-600 hover:text-red-800 transition p-2 opacity-50 cursor-not-allowed">
                                                <FaTrash className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer with pagination */}
                <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                    <p className="text-sm text-gray-600">
                        Showing <span className="font-semibold">{filteredTransactions.length}</span> of <span className="font-semibold">{transactions.length}</span> transactions
                    </p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 transition">
                            Previous
                        </button>
                        <button className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 transition">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>);
}

export default TransactionTable
