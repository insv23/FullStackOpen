import { useState } from "react";

import CountryDetails from './CountryDetails'

const CountriesList = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleShowDetailOf = (country) => {
    country === selectedCountry
      ? setSelectedCountry(null)
      : setSelectedCountry(country);
  };

  return countries.map((country) => (
    <div key={country.name.common}>
      {country.name.common}{" "}
      <button onClick={() => toggleShowDetailOf(country)}>
        {selectedCountry === country ? "hide" : "show"}
      </button>
      {selectedCountry === country && <CountryDetails country={country} />}
    </div>
  ));
};

export default CountriesList;
