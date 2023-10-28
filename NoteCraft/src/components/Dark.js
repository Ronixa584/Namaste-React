import React, { useState, useEffect } from "react";

const Dark = () => {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  useEffect(() => {
    if (defaultDark) {
      setDark();
    }
  }, [defaultDark]);

  return (
    <div
      className={`bg-${defaultDark ? "black" : "white"} text-${
        defaultDark ? "white" : "black"
      }`}
    >
      <div className="toggle-theme-wrapper flex items-center">
        <span className="text-2xl m-2">☀️</span>
        <label className="toggle-theme inline-block relative h-10 w-20">
          <input
            type="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            defaultChecked={defaultDark}
            className="hidden"
          />
          <div
            className={`slider absolute cursor-pointer bg-gray-400 ${
              defaultDark ? "bg-cornflowerblue" : ""
            }`}
          >
            <div
              className={`slider:before absolute transition duration-400 w-8 h-8 ${
                defaultDark ? "bg-lightblue" : "bg-white"
              }`}
            ></div>
          </div>
        </label>
        <span className="text-2xl m-2">🌒</span>
      </div>
    </div>
  );
};

export default Dark;
