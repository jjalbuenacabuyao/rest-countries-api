import React from 'react'
import FLex from './Flex'

type Props = {
  setApiUrl: React.Dispatch<React.SetStateAction<string>>,
}

const SearchAndFilter = ({ setApiUrl }: Props) => {
  const regions: Array<string> = ["all", "africa", "america", "asia", "europe", "oceana"];

  const options : JSX.Element[] = regions.map(region => (
    <option key={region} value={region}>{region}</option>
  ))

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
        {options}
      </select>
    </FLex>
  )
}

export default SearchAndFilter