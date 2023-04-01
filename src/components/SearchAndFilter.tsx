import React from "react";
import Flex from "./Flex";
import { HiOutlineSearch } from "react-icons/hi";

type Props = {
  setApiUrl: React.Dispatch<React.SetStateAction<string>>;
};

const SearchAndFilter = ({ setApiUrl }: Props) => {
  const regions: Array<string> = [
    "all",
    "africa",
    "america",
    "asia",
    "europe",
    "oceana",
  ];

  const options: JSX.Element[] = regions.map((region) => (
    <option key={region} value={region}>
      {region}
    </option>
  ));

  const fields: string =
    "?fields=name,population,region,capital,flags,subregion,tld,currencies,languages";

  return (
    <Flex direction="flex-col" align="item-stretch" gap="gap-9" className="px-4 pt-6" >
      <div className="relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={(e) =>
            setApiUrl(
              `https://restcountries.com/v3.1/name/${e.target.value}/${fields}`
            )
          }
          className="dark:bg-dark-blue w-full pl-16 py-4 rounded-md"
        />
        <HiOutlineSearch className="absolute inset-y-0 left-7 my-auto" />
      </div>

      <select
        name="Filter by Region"
        id="filter"
        onChange={(e) =>
          setApiUrl(
            `https://restcountries.com/v3.1/region/${e.target.value}/${fields}`
          )
        }
        className="dark:bg-dark-blue"
      >
        {options}
      </select>
    </Flex>
  );
};

export default SearchAndFilter;
