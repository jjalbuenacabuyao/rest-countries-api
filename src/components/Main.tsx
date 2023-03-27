import React, { useEffect, useState } from 'react'
import axios from 'axios';

type Props = {
  filter: string,
}

const Main = ({ filter }: Props) => {
  // for filters : subregion,tld,currencies,flag,languages
  const url: string = filter;
  const defaultUrl: string = "https://restcountries.com/v3.1/all?fields=name,population,region,capital";
  const [data, setData] = useState<Array<object>>([]);

  useEffect(() => {
    async function fetchData(url: string) {
      const response = await axios(url);
      setData(response.data);
    }
    url !== "" ? fetchData(url) : fetchData(defaultUrl);
  }, [url])

  const featuredCountryCount : number = 6;

  const featuredCountries : Array<object> = [data.filter(item => data.indexOf(item) < featuredCountryCount)];

  return (
    <main>
    </main>
  )
}

export default Main