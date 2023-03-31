import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';

type Props = {
  apiUrl: string,
}

type Country = {
  capital: Array<string>,
  flags: any,
  name: any,
  population: number,
  region: string,
}

const Main = ({ apiUrl }: Props) => {
  // for filters : subregion,tld,currencies,languages
  const [data, setData] = useState<Array<Country>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(apiUrl);
      setData(response.data);
    }
    fetchData();
  }, [apiUrl])

  //Only first six countries are displayed in homepage
  const featuredCountryCount : number = 6;

  const featuredCountries : Array<Country> = data.filter(item => data.indexOf(item) < featuredCountryCount);

  console.log(featuredCountries);
  

  const cards = featuredCountries.map(country => (
    <Card 
      countryName={country.name.common} 
      population={country.population}
      region={country.region}
      capital={country.capital[0]}
      flag={country.flags.svg}
      alt={country.flags.alt}
    />
  ))

  return (
    <main>
      { cards }
    </main>
  )
}

export default Main