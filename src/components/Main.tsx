import React, { useEffect, useState } from 'react'

type Props = {
  filter: string,
}

const Main = ({ filter }: Props) => {
  const url: string = filter;
  const defaultUrl: string = "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,flag,languages";
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData(url : string) {
      const data = await fetch(url).then(response => response.json())
      setData(data);
    }
    url !== "" ? getData(url) : getData(defaultUrl);
  }, [url])

  return (
    <main></main>
  )
}

export default Main