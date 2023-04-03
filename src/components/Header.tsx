import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Flex from "./Flex";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const rootElement = document.documentElement.classList;
    theme === "dark" ? rootElement.add("dark") : rootElement.remove("dark");
  }, [theme]);

  return (
    <header className="px-5 py-8 dark:bg-dark-blue shadow-sm shadow-light-mode-dark-gray dark:shadow-none">
      <Flex justify="justify-between">
        <a href="#" className="font-bold">
          Where in the world?
        </a>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <MdLightMode size="1.5rem" />
          ) : (
            <MdDarkMode size="1.5rem" />
          )}
        </button>
      </Flex>
    </header>
  );
};

export default Header;
