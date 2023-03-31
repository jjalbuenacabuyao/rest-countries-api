import React from 'react'

type FlexDirection = "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";

type JustifyContent = "justify-normal" | "justify-start" | "justify-end" | "justify-center" | "justify-between" | "justify-around" | "justify-evenly" | "justify-stretch";

type Props = {
  direction?: FlexDirection,
  gap?: string,
  justify?: JustifyContent,
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