import React, { useState } from "react";
import Flex from "./Flex";
import { HiOutlineSearch } from "react-icons/hi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

type Props = {
  setApiUrl: React.Dispatch<React.SetStateAction<string>>;
};

const SearchAndFilter = ({ setApiUrl }: Props) => {
  const regions: Array<string> = [
    "Default",
    "All",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const options: JSX.Element[] = regions.map((region) =>
    region === "Default" ? (
      <option key={region} value="" hidden>
        Filter by Region
      </option>
    ) : (
      <option key={region} value={region}>
        {region}
      </option>
    )
  );

  const baseUrl: string = "https://restcountries.com/v3.1/";

  const defaultEndpoint: string =
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";

  const fields: string =
    "?fields=name,population,region,capital,flags";

  const [expanded, setExpanded] = useState(false);

  const iconStyle: string = "absolute inset-y-0 right-6 my-auto";

  return (
    <Flex
      direction="flex-col"
      align="item-stretch"
      gap="gap-9"
      className="px-16-80 pt-6"
    >
      <div className="relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={(e) =>
            setApiUrl(
              e.target.value === ""
                ? defaultEndpoint
                : `${baseUrl}/name/${e.target.value}/${fields}`
            )
          }
          className="dark:bg-dark-blue w-full pl-16 py-4 rounded-md appearance-none shadow-md shadow-light-mode-dark-gray dark:shadow-none"
        />
        <HiOutlineSearch className="absolute inset-y-0 left-7 my-auto" />
      </div>

      <div className="relative w-max">
        <select
          name="Filter by Region"
          id="filter"
          onChange={(e) =>
            setApiUrl(
              e.target.value === "All"
                ? defaultEndpoint
                : `${baseUrl}/region/${e.target.value}/${fields}`
            )
          }
          onClick={() => setExpanded(!expanded)}
          className="dark:bg-dark-blue  self-start leading-none px-6 py-5 rounded-md appearance-none min-w-[12.5rem] shadow-md shadow-light-mode-dark-gray dark:shadow-none"
        >
          {options}
        </select>
        {expanded ? (
          <MdExpandLess className={iconStyle} />
        ) : (
          <MdExpandMore className={iconStyle} />
        )}
      </div>
    </Flex>
  );
};

export default SearchAndFilter;
