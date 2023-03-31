import React from 'react'

type Props = {
  direction?: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse",
  gap?: string,
  justify?: "justify-normal" | "justify-start" | "justify-end" | "justify-center" | "justify-between" | "justify-around" | "justify-evenly" | "justify-stretch",
  children?: JSX.Element | JSX.Element[],
  className?: string,
}

const Flex = ({ 
  direction = "flex-row",
  gap = "gap-0",
  justify = "justify-normal",
  children,
  className
}: Props) => {
  return (
    <div className={`flex items-center ${direction} ${justify} ${gap} ${className}`}>
      {children}
    </div>
  )
}

export default Flex