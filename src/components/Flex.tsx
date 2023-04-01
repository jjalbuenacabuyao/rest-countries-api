import React from "react";

type FlexDirection =
  | "flex-row"
  | "flex-row-reverse"
  | "flex-col"
  | "flex-col-reverse";

type JustifyContent =
  | "justify-normal"
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | "justify-between"
  | "justify-around"
  | "justify-evenly"
  | "justify-stretch";

type AlignItems =
  | "items-start"
  | "items-end"
  | "items-center"
  | "item-baseline"
  | "item-stretch";

type Props = {
  direction?: FlexDirection;
  gap?: string;
  justify?: JustifyContent;
  align?: AlignItems;
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const Flex = ({
  direction = "flex-row",
  gap = "gap-0",
  justify = "justify-normal",
  align = "items-center",
  children,
  className = "",
}: Props) => {
  return (
    <div
      className={`flex ${align} ${direction} ${justify} ${gap} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
