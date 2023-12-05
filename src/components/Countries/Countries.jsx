import { useEffect, useState } from "react";
import Country from "./../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountry] = useState([]);

  const url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
      try {
        fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data));
      } catch (error) {
        <h1>{error}</h1>
      }
  }, [countries]);

  return (
    <>
      <div>
        <h1 className ='countries_heading' > Countries Length: {countries.length} (Task: 01)</h1>
        <div className="countries_container">
          {countries.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
