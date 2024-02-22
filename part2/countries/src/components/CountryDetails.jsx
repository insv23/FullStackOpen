import Weather from "./Weather";

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      {/* languages: {fra: "French", gsw: "Swiss German", ita: "Italian"…} 不是一个数组，不能直接 map
            Object.entries(country.languages) 会将 languages 对象转换为一个数组，其中每个元素都是形如 [key, value] 的数组。*/}
      {Object.entries(country.languages).map(([code, language]) => (
        <li key={code}>{language}</li>
      ))}
      <br />
      <img src={country.flags.png} alt={country.flags.alt} />
      <Weather country={country} />
    </div>
  );
};

export default CountryDetails;
