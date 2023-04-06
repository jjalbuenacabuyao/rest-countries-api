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

  const [data, setData] = useState<CountryInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(url);
      setData(response.data);
    };

    fetchData();
  }, [url]);

  console.log(data);

  return (
    <>
      <Header />
      <main>
        <Link to="/">
          <BsArrowLeft />
          <span>Back</span>
        </Link>

        <div>
          <div></div>
        </div>
      </main>
    </>
  );
}

export default CountryDetail;
