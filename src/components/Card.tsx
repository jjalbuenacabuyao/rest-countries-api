import React from 'react'
import Flex from './Flex'

type Props = {
  countryName: string,
  population: number,
  region: string,
  capital: Array<string>,
  flag: string,
  alt: string,
}

const Card = ({countryName, population, region, capital, flag, alt}: Props) => {
  return (
    <Flex direction='col'>
      <div>
        <img src={flag} alt={alt} />
      </div>

      <Flex direction='col'>
        <p>{countryName}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </Flex>
    </Flex>
  )
}

export default Card