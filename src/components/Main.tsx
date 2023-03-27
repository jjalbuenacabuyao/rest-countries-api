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
    async function getData(url: string) {
      const response = await axios(url);
      setData(response.data);
    }
    url !== "" ? getData(url) : getData(defaultUrl);
  }, [url])

  const [country1, country2, country3, country4, country5, country6] = data;

  return (
    <main>
    </main>
  )
}

export default Main