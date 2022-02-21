import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Cleaned project</h1>
        <FormControl>
          <Select variant="outlined" value="abc">
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
            <MenuItem value="Worldwide">Month</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
