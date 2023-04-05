import React, { useEffect, useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { CountryDetail } from "../containers";

type Props = {
  apiUrl: string;
  setApiUrl: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

type Country = {
  capital: string[];
  flags: any;
  name: any;
  population: number;
  region: string;
};

const Main = ({ apiUrl, setApiUrl, setCountry }: Props) => {
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
      <Link to={`/${name.common.toLowerCase()}`} onClick={() => setCountry(name.common.toLowerCase())}>
        <Card
          countryName={name.common}
          population={population}
          region={region}
          capital={capital[0]}
          flag={flags.svg}
          alt={flags.alt}
        />
      </Link>
    )
  );

  return (
    <main className="pt-8 pb-16 flex flex-col gap-10">
      <SearchAndFilter setApiUrl={setApiUrl} />
      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 px-48-80">
        {cards}
      </div>
    </main>
  );
};

export default Main;
