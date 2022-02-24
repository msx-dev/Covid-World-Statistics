import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //API Call
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States
            value: country.countryInfo.iso2, //US
          }));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, [countries]); //runs when component loads and when countries change
  return (
    <div className="App">
      <div className="header">
        <h1>Cleaned project</h1>
        <FormControl>
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="widgets">
        <h2>Widgets</h2>
      </div>
    </div>
  );
}

export default App;
