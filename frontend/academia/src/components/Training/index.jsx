import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import "./style.css";

export default function Trainig() {
  const [repetitions, setRepetitions] = useState("");

  const handleChangeRepetitions = (event) => {
    setRepetitions(event.target.value);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        disabled={window.location.pathname === "/teacher" ? false : true}
        label="Exercício"
        defaultValue=""
        variant="standard"
      />
      <TextField
        disabled={window.location.pathname === "/teacher" ? false : true}
        label="Músculo"
        defaultValue=""
        variant="standard"
      />
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Repetições</InputLabel>
        <Select
          disabled={window.location.pathname === "/teacher" ? false : true}
          value={repetitions}
          label="Repetições"
          onChange={handleChangeRepetitions}
        >
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"7"}>7</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
