import React from 'react'

type Props = {
  direction?: string,
  gap?: string,
  justify?: string,
  children: JSX.Element | JSX.Element[],
  className?: string,
}

const Flex = ({ direction, gap, justify, children, className }: Props) => {
  return (
    <div className={`flex ${direction && `flex-${direction}`} ${justify && `justify-${justify}`} ${gap && `gap-${gap}`} items-center ${className}`}>
      {children}
    </div>
  )
}

export default Flex