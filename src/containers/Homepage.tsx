import React, { useState } from 'react'
import { Header, SearchAndFilter, Main } from '../components'

type Props = {}

const Homepage = (props: Props) => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <Header />
      <SearchAndFilter setFilter={setFilter} />
      <Main filter={filter}/>
    </>
  )
}

export default Homepage