import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

type CountryInfo = {
  capital: string[];
  flags: any;
  name: any;
  population: number;
  region: string;
  tld: string[];
  currencies: Object;
  subregion: string;
  languages: Object;
  borders: string[];
};

function CountryDetail() {
  const { countryCode } = useParams(); //returns the current path

  const baseUrl: string = "https://restcountries.com/v3.1/alpha";
  const fields: string =
    "?fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders";
  const url: string = `${baseUrl}/${countryCode}/${fields}`;

  const [data, setData] = useState<CountryInfo>({
    capital: [],
    flags: {},
    name: {},
    population: 0,
    region: "",
    tld: [],
    currencies: {},
    subregion: "",
    languages: {},
    borders: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(url);
      setData(response.data);
    };

    fetchData();
  }, [url]);

  console.log(data);

  const {
    capital,
    flags,
    name,
    population,
    region,
    tld,
    currencies,
    subregion,
    languages,
    borders,
  } = data;

  return (
    <>
      <Header />
      <main>
        <Link to="/" className="flex">
          <BsArrowLeft />
          <span>Back</span>
        </Link>

        <div>
          <div>
            <img src={flags.png} alt={flags.alt} />
          </div>

          <div>
            <h1>{name.common}</h1>
            <p>Population: { population.toLocaleString() }</p>
            <p>Region: { region }</p>
            <p>Capital: { capital }</p>
            <p>Top Level Domain: { tld }</p>
            <p>Currencies: </p>
            <p>Languages: </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryDetail;
