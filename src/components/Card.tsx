import React from "react";
import Flex from "./Flex";

type Props = {
  countryName: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  alt: string;
};

const Card = ({
  countryName,
  population,
  region,
  capital,
  flag,
  alt,
}: Props) => {
  return (
    <Flex
      direction="flex-col"
      align="item-stretch"
      className="rounded-lg overflow-hidden shadow-md shadow-light-mode-dark-gray dark:shadow-none"
    >
      <div>
        <img src={flag} alt={alt} />
      </div>

      <Flex
        direction="flex-col"
        align="items-start"
        className="px-5 py-8 items-start dark:bg-dark-blue"
      >
        <p className="font-[800] text-lg">{countryName}</p>
        <p className="font-[600]">
          Population: <span className="font-[300]">{population.toLocaleString()}</span>
        </p>
        <p className="font-[600]">
          Region: <span className="font-[300]" >{region}</span>
        </p>
        <p className="font-[600]">
          Capital: <span className="font-[300]">{capital}</span>
        </p>
      </Flex>
    </Flex>
  );
};

export default Card;
