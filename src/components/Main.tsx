import React, { useEffect, useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import Card from "./Card";
import axios from "axios";

type Props = {
  apiUrl: string;
  setApiUrl: React.Dispatch<React.SetStateAction<string>>;
};

type Country = {
  capital: string[];
  flags: any;
  name: any;
  population: number;
  region: string;
};

const Main = ({ apiUrl, setApiUrl }: Props) => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(apiUrl);
      setData(response.data);
    };
    fetchData();
  }, [apiUrl]);

  //Only first six countries are displayed in homepage
  const featuredCountryCount: number = 6;

  const featuredCountries: Country[] = data.filter(
    (item) => data.indexOf(item) < featuredCountryCount
  );

  const cards = featuredCountries.map(
    ({ name, population, region, capital, flags }) => (
      <Card
        countryName={name.common}
        population={population}
        region={region}
        capital={capital[0]}
        flag={flags.svg}
        alt={flags.alt}
      />
    )
  );

  return (
    <main className="px-12 pt-8 pb-16 flex flex-col gap-10">
      <SearchAndFilter setApiUrl={setApiUrl} />
      {cards}
    </main>
  );
};

export default Main;
