import React, { useEffect, useState } from 'react'
import axios from 'axios';

type Props = {
  filter: string,
}

const Main = ({ filter }: Props) => {
  // for filters : subregion,tld,currencies,languages
  const url: string = filter;
  const defaultUrl: string = "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";
  const [data, setData] = useState<Array<object>>([]);

  useEffect(() => {
    async function fetchData(url: string) : Promise<void> {
      const response = await axios(url);
      setData(response.data);
    }
    url !== "" ? fetchData(url) : fetchData(defaultUrl);
  }, [url])

  //Only first six countries are displayed in homepage
  const featuredCountryCount : number = 6;

  const featuredCountries : Array<object> = [data.filter(item => data.indexOf(item) < featuredCountryCount)];

  console.log(featuredCountries);
  

  return (
    <main>
    </main>
  )
}

export default Main