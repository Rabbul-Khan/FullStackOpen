import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [weather, setWeather] = useState(null);

  // Get the entire list of countries from the API and save it to the countries state
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  // Get the weather for the specified country
  useEffect(() => {
    if (searchResults.length === 1) {
      const latitude = searchResults[0].latlng[0];
      const longitude = searchResults[0].latlng[1];
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1e920d762e26461d62ff1bb0557f4cb7`
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
  }, [searchResults]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    const currentSearchResults = countries.filter((country) => {
      if (
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return country;
      } else {
        return null;
      }
    });
    setSearchResults(currentSearchResults);
  };

  const handleShowButtonClick = (countryName) => {
    setSearchTerm(countryName);
    const currentSearcResult = [
      countries.find((country) => {
        return country.name.common.toLowerCase() === countryName.toLowerCase();
      }),
    ];
    setSearchResults(currentSearcResult);
  };

  return (
    <>
      <span>Find countries</span>
      <input type="text" onChange={handleSearchTermChange} value={searchTerm} />
      {searchResults.length > 10 && (
        <div>Too many matches, specify another filter</div>
      )}
      {searchResults.length <= 10 &&
        searchResults.length > 1 &&
        searchResults.map((result) => {
          return (
            <div key={result.name.common}>
              <span>{result.name.common}</span>
              <button onClick={() => handleShowButtonClick(result.name.common)}>
                show
              </button>
            </div>
          );
        })}
      {searchResults.length === 1 && (
        <div>
          <h1>{searchResults[0].name.common}</h1>
          <p>capital {searchResults[0].capital}</p>
          <p>area {searchResults[0].area}</p>
          <p>languages:</p>
          <ul>
            {Object.values(searchResults[0].languages).map((language) => {
              return <li key={language}>{language}</li>;
            })}
          </ul>
          <div>{searchResults[0].flag}</div>
          <h2>Weather in {searchResults[0].capital}</h2>
          {weather && (
            <>
              <p>temperature {weather.main.temp} celsius</p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
              <p>wind {weather.wind.speed} m/s</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
