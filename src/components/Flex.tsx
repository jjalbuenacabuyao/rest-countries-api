import React from 'react'

type Props = {
  direction: string,
  gap: string,
  children: React.ReactNode
}

const FLex = ({ direction, gap, children }: Props) => {
  return (
    <div className={`flex ${direction && `flex-${direction}`} ${gap && `gap-${gap}`} items-center`}>
      {children}
    </div>
  )
}

export default FLex