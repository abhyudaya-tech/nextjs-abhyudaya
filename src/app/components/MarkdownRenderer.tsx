'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ ...props }) => (
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '1rem' }} {...props} />
        ),
        ul: ({ ...props }) => (
          <ul
            style={{
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              marginBottom: '0.5rem',
            }}
            {...props}
          />
        ),
        ol: ({ ...props }) => (
          <ol
            style={{
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
              marginBottom: '0.5rem',
            }}
            {...props}
          />
        ),
        li: ({ ...props }) => (
          <li style={{ marginBottom: '0.25rem' }} {...props} />
        ),
        p: ({ ...props }) => (
          <p style={{ marginBottom: '0.5rem', color: '#374151' }} {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
