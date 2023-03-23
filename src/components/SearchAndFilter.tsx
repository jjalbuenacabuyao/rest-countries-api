import React from 'react'
import FLex from './Flex'

type Props = {}

const SearchAndFilter = (props: Props) => {
  return (
    <FLex>
      <input type="search" name="search" id="search" />
      <select name="Filter by Region" id="filter">
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