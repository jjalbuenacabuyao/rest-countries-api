import React from 'react'

type Props = {
  direction?: string,
  gap?: string,
  children: JSX.Element | JSX.Element[],
  className?: string,
}

const FLex = ({ direction, gap, children, className }: Props) => {
  return (
    <div className={`flex ${direction && `flex-${direction}`} ${gap && `gap-${gap}`} items-center ${className}`}>
      {children}
    </div>
  )
}

export default FLex