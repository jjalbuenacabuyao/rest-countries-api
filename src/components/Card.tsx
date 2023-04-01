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
      className="rounded-lg overflow-hidden"
    >
      <div>
        <img src={flag} alt={alt} />
      </div>

      <Flex
        direction="flex-col"
        align="items-start"
        className="px-5 py-8 items-start bg-dark-blue"
      >
        <p>{countryName}</p>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </Flex>
    </Flex>
  );
};

export default Card;
