import React, { useEffect, useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";

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
  cca2: string;
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

  console.log(featuredCountries);

  const cards = featuredCountries.map(
    ({ name, population, region, capital, flags, cca2 }) => (
      <Link to={`/${cca2.toLowerCase()}`} key={cca2}>
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
