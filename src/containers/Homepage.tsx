import React, { useState } from 'react'
import { Header, SearchAndFilter, Main } from '../components'

type Props = {}

const Homepage = (props: Props) => {
  const [apiUrl, setApiUrl] = useState("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");

  return (
    <>
      <Header />
      <SearchAndFilter setApiUrl={setApiUrl} />
      <Main apiUrl={apiUrl} />
    </>
  )
}

export default Homepage