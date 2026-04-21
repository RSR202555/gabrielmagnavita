'use client'

import type { ReactNode, MouseEvent } from 'react'

type Props = {
  children: ReactNode
  className?: string
  title?: string
  message: string
}

export default function ConfirmSubmitButton({ children, className, title, message }: Props) {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (!window.confirm(message)) {
      event.preventDefault()
    }
  }

  return (
    <button type="submit" className={className} title={title} onClick={handleClick}>
      {children}
    </button>
  )
}
