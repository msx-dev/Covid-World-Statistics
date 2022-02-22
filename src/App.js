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
  const [countries, setCountries] = useState(["USA", "China"]);

  useEffect(() => {
    //API Call
  }, [countries]);
  return (
    <div className="App">
      <div className="header">
        <h1>Cleaned project</h1>
        <FormControl>
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
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
