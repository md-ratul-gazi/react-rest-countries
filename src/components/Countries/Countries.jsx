import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  // Declare useState
  const [countries, setCountries] = useState([]);

  // Visited countries data hold here
  const [visitedCountries, setVisitedCountries] = useState([]);

  // Visited countries flag show here
  const [visitedFlags, setVisitedFlags] = useState([]);

  // Load Data using useEffect
  useEffect(() => {
    const handleData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    handleData(); // call the handleData function.
  }, []);

  // handleVisitedCountry function here
  const handleVisitedCountry = (country) => {
    // console.log("Add this to your visited country.");
    // console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  // handleVisitedFlags function here
  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Countries: {countries.length}</h3>
      {/* Visited Country list show */}
      <div>
        <h4 className="font-semibold">
          Visited Countries: {visitedCountries.length}
        </h4>
        <ul className="list-disc ml-5">
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* Display visited flags */}
      <div className="flex gap-3 w-[100px]">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      {/* Display country */}
      <div className="country-container grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
