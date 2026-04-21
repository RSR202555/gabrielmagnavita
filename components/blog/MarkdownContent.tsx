'use client'

import dynamic from 'next/dynamic'
import '@uiw/react-markdown-preview/markdown.css'

const MDPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false })

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <MDPreview
      source={content}
      style={{ background: 'transparent', fontSize: '1.05rem', lineHeight: '1.8' }}
      wrapperElement={{ 'data-color-mode': 'light' } as React.HTMLAttributes<HTMLDivElement>}
    />
  )
}
