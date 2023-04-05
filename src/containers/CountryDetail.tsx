import React from 'react'

type Props = {
  country: string;
}

function CountryDetail({ country }: Props) {
  return (
    <main>
      {country}
    </main>
  )
}

export default CountryDetail