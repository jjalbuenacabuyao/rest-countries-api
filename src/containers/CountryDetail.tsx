import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Header } from "../components";
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
  const borderCountries = borders.map((country) => (
    <p className="leading-none px-7 py-2 bg-white dark:bg-dark-blue shadow-sm shadow-dark-blue dark:shadow-none">
      {country}
    </p>
  ));

  return (
    <>
      <Header />

      <main className="pt-6 px-7 pb-14">
        <Link to="/" className="inline-flex mb-16 items-center px-6 py-3 dark:bg-dark-blue gap-3 rounded-md shadow-sm shadow-dark-blue dark:shadow-none">
          <BsArrowLeft />
          <span>Back</span>
        </Link>

        <Flex direction="flex-col" gap="gap-11">
          <div className="w-full">
            <img className="w-full" src={flags.png} alt={flags.alt} />
          </div>

          <div className="w-full">
            <h1 className="font-[800] text-2xl pb-7">{name.common}</h1>

            <Flex direction="flex-col" align="items-start" gap="gap-5">
              <p className="font-[600]">
                Population:{" "}
                <span className="font-[300]">
                  {population.toLocaleString()}
                </span>
              </p>
              <p className="font-[600]">
                Region: <span className="font-[300]">{region}</span>
              </p>
              <p className="font-[600]">
                Capital: <span className="font-[300]">{capital}</span>
              </p>
            </Flex>

            <Flex direction="flex-col" align="items-start" gap="gap-4" className="mt-11">
              <p className="font-[600]">Top Level Domain: <span className="font-[300]">{tld}</span></p>
              <p className="font-[600]">
                Currencies:{" "}
                <span className="font-[300]">
                  {currency.map((cur, index) =>
                    index === currency.length - 1 ? cur.name : cur.name + ", "
                  )}
                </span>
              </p>
              <p className="font-[600]">
                Languages:{" "}
                <span className="font-[300]">
                  {language.map((lang, index) =>
                    index === language.length - 1 ? lang : lang + ", "
                  )}
                </span>
              </p>
            </Flex>
          </div>

          <Flex direction="flex-col" align="items-start" className="w-full">
            <p>Border Countries: </p>
            <Flex className="flex-wrap mt-5" gap="gap-3">
              {borders.length === 0 ? "None" : borderCountries}
            </Flex>
          </Flex>
        </Flex>
      </main>
    </>
  );
}

export default CountryDetail;
