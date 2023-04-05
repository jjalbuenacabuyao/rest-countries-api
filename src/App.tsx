import React, { useState } from 'react'
import { Homepage, CountryDetail } from './containers'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const App = (props: Props) => {
  const [country, setCountry] = useState<string>("");

  return (
    <Routes>
      <Route path='/' element={<Homepage setCountry={setCountry} />} />
      <Route path={`/${country}`} element={<CountryDetail country={country} />} />
    </Routes>
  )
}

export default App