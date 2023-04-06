import React, { useState } from "react";
import { Header, Main } from "../components";

type Props = {};

const Homepage = (props: Props) => {
  const [apiUrl, setApiUrl] = useState(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca2"
  );

  return (
    <>
      <Header />
      <Main apiUrl={apiUrl} setApiUrl={setApiUrl} />
    </>
  );
};

export default Homepage;
