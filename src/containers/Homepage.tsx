import React, { useState } from "react";
import { Header, Main } from "../components";

type Props = {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

const Homepage = ({ setCountry }: Props) => {
  const [apiUrl, setApiUrl] = useState(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca2"
  );

  return (
    <>
      <Header />
      <Main apiUrl={apiUrl} setApiUrl={setApiUrl} setCountry={setCountry} />
    </>
  );
};

export default Homepage;
