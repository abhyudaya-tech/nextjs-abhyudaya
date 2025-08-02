'use client'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface MeetingModalProps {
    open: boolean
    onClose: () => void
    title?: string | null
    pdfUrl?: string | null
}

export default function MeetingModal({ open, onClose, title, pdfUrl }: MeetingModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
        return () => { document.body.style.overflow = 'auto' }
    }, [open])

    // Effect to handle escape key for closing the modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose])


    // Close modal on clicking outside the modal content
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose()
        }
    }

    if (!open) return null

    return createPortal(
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="bg-white w-full max-w-6xl h-[90vh] rounded-xl shadow-xl flex flex-col relative"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing modal
            >
                {/* Title Bar */}
                <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-100 rounded-t-xl">
                    <h2 className="text-lg text-orange-600 font-semibold">{title || "Document Preview"}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-700 hover:text-red-600 text-4xl"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </div>

                {/* PDF Viewer */}
                <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="PDF Viewer"
                    className="w-full h-full rounded-b-xl"
                ></iframe>
            </div>
        </div>,
        document.body
    )
}
