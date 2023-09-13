// CSS file link import here
import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  // console.log(country);
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  // console.log(typeof handleVisitedCountry);

  const handleVisited = () => {
    // setVisited(visited === false ? true : false);
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "orange" : "red" }}>
        Country Name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button
        onClick={() => handleVisitedFlags(country.flags.png)}
        className="bg-black px-2 py-1 hover:bg-gray-900 hover:text-orange-500 mr-2 font-bold"
      >
        Add Flag
      </button>
      {/* Mark data button */}
      <button
        onClick={() => handleVisitedCountry(country)}
        className="bg-black px-2 py-1 hover:bg-gray-900 hover:text-orange-500 mr-2 font-bold"
      >
        Mark Visited
      </button>
      {/* Visited button */}
      <button
        onClick={handleVisited}
        className="bg-black px-2 py-1 hover:bg-gray-900 hover:text-orange-500 mr-2 font-bold"
      >
        {visited ? "Visited" : "Going"}
      </button>

      {(visited && "I have visited this country.") || "I want to visit"}
    </div>
  );
};

export default Country;
