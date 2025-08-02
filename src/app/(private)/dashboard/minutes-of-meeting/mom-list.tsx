// app/(private)/mom/mom-list.tsx
'use client'

import { useState } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import moment from 'moment'
import MeetingModal from '@/app/components/MeetingModal'
import MarkdownRenderer from '@/app/components/MarkdownRenderer'
import { Meeting } from '@/app/utils/types'

export default function MOMList({ meetings }: { meetings: Meeting[] }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedPdfUrl, setSelectedPdfUrl] = useState<string | null>(null)
    const [selectedMeetingId, setSelectedMeetingId] = useState<string | null>(null)

    const openModal = (url: string, id: string) => {
        setSelectedPdfUrl(url)
        setSelectedMeetingId(id)
        setModalOpen(true)
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Minutes of Meeting</h1>

            <p className="text-gray-600 mb-6">
                💡 Click on MOM to view details
            </p>
            <div className="grid gap-4 md:grid-cols-2">
                {meetings.map((meeting) => (
                    <div
                        key={meeting.id}
                        className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 flex gap-4"
                        onClick={() => openModal(meeting.pdf_url ?? '', meeting.id)}
                    >
                        {/* PDF Icon */}
                        <div className="min-w-[60px] flex justify-start items-start pt-1">
                            <button
                                onClick={() => openModal(meeting.pdf_url ?? '', meeting.id)}
                                className="text-red-600 hover:text-red-800"
                            >
                                <FaFilePdf size={52} />
                            </button>
                            <div className="ml-3">
                                <h2 className="text-xl font-bold text-orange-600 mb-1">{meeting.id}</h2>
                                <p className="text-gray-500 text-sm">
                                    {moment(meeting.datetime).format('Do MMM YYYY, h:mm A')} |
                                    Drafted by {meeting.created_by_name && meeting.created_by_name.split(' ')[0]}
                                </p>
                            </div>
                        </div>

                        {/* Meeting Content */}
                        <div className="flex-1">
                            {/* Markdown Agenda */}
                            <div className="prose max-w-none">
                                <MarkdownRenderer content={meeting.agenda} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && selectedPdfUrl && (
                <MeetingModal open={modalOpen} onClose={() => setModalOpen(false)} title={selectedMeetingId} pdfUrl={selectedPdfUrl} />
            )}
        </>
    )
}
