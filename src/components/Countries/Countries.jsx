import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  // Declare useState
  const [countries, setCountries] = useState([]);

  // Load Data using useEffect
  useEffect(() => {
    const handleData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    handleData(); // call the handleData function.
  }, []);
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {countries.map((country) => (
        // Set a uniq key to help find the data in react virtual dom
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
