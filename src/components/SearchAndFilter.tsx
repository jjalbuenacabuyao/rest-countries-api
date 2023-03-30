import React from 'react'
import FLex from './Flex'

type Props = {
  setApiUrl: React.Dispatch<React.SetStateAction<string>>,
}

const SearchAndFilter = ({ setApiUrl }: Props) => {
  return (
    <FLex>
      <input
        type="search"
        name="search"
        id="search"
        onChange={(e) => setApiUrl(`https://restcountries.com/v3.1/name/${e.target.value}`)} />

      <select
        name="Filter by Region"
        id="filter"
        onChange={(e) => setApiUrl(`https://restcountries.com/v3.1/region/${e.target.value}`)}>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceana">Oceana</option>
      </select>
    </FLex>
  )
}

export default SearchAndFilter