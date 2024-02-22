import CountryDetails from "./CountryDetails";
import CountriesList from "./CountriesList";

const Results = ({ results }) => {
  const length = results.length;
  if (length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (length === 1) {
    return <CountryDetails country={results[0]} />;
  } else {
    return <CountriesList countries={results} />;
  }
};

export default Results;
