import { useState, useEffect } from "react";
import axios from "axios";

import Results from "./components/Results";
import Search from "./components/Search";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  if (!countries) {
    return null;
  }

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
    setResults(
      countries.filter((country) =>
        // country.name.common.toLowerCase().includes(filterText.toLowerCase()) 使用了 filterText 的当前值，
        // 而不是事件 e 中的最新值。由于 setState 在 React 中是异步的，filterText 的值在调用 setResults 时可能还没有更新
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Search
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      />
      <Results results={results} />
    </div>
  );
};

export default App;
