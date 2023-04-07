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

  console.log(data);

  const currency = Object.values(currencies);

  const language = Object.values(languages);

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

            <div>
              <p>Population: {population.toLocaleString()}</p>
              <p>Region: {region}</p>
              <p>Capital: {capital}</p>
            </div>

            <div>
              <p>Top Level Domain: {tld}</p>
              <p>
                Currencies:{" "}
                {currency.map((cur, index) =>
                  index === currency.length - 1 ? cur.name : cur.name + ", "
                )}
              </p>
              <p>
                Languages:{" "}
                {language.map((lang, index) =>
                  index === language.length - 1 ? lang : lang + ", "
                )}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryDetail;
