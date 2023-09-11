import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
  // Declare useState
  const [Countries, setCountries] = useState([]);

  // Load Data using useEffect
  useEffect(() => {
    const handleData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      console.log(data);
    };
    handleData(); // call the handleData function.
  }, []);
  return (
    <div>
      <h3>Countries</h3>
    </div>
  );
};

export default Countries;
