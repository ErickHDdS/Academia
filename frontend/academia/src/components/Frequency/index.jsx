import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./style.css";

export default function Frequency() {
  const [frequencySchedulesUser, setFrequencySchedulesUser] = useState("");
  const [frequencyDaysUser, setFrequencyDaysUser] = useState("");
  const [planUser, setPlanUser] = useState("Mensal");

  const handleChange = (event) => {
    setPlanUser(event.target.value);
  };

  const handleChangeSchedules = (event) => {
    setFrequencySchedulesUser(event.target.value);
  };

  const handleChangeDays = (event) => {
    setFrequencyDaysUser(event.target.value);
  };

  return (
    <form className="frequencyRegister-main" onSubmit={""}>
      <Box className="schedules">
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Horário</InputLabel>
          <Select
            value={frequencySchedulesUser}
            label="Horarios"
            onChange={handleChangeSchedules}
          >
            <MenuItem value={"06:30"}>06:30</MenuItem>

            <MenuItem value={"07:00"}>07:00</MenuItem>

            <MenuItem value={"08:00"}>08:00</MenuItem>
            <MenuItem value={"08:30"}>08:30</MenuItem>

            <MenuItem value={"09:00"}>09:00</MenuItem>

            <MenuItem value={"10:00"}>10:00</MenuItem>
            <MenuItem value={"10:15"}>10:15</MenuItem>

            <MenuItem value={"12:00"}>12:00</MenuItem>

            <MenuItem value={"16:00"}>16:00</MenuItem>

            <MenuItem value={"17:00"}>17:00</MenuItem>

            <MenuItem value={"18:00"}>18:00</MenuItem>

            <MenuItem value={"19:00"}>19:00</MenuItem>

            <MenuItem value={"20:00"}>20:00</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Quantidade de dias semanalmente</InputLabel>
          <Select
            value={frequencyDaysUser}
            label="Quantidade de dias semanalmente"
            onChange={handleChangeDays}
          >
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"7"}>7</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 150 }}>
        <FormControl>
          <InputLabel>Plano</InputLabel>
          <Select value={planUser} label="Plano" onChange={handleChange}>
            <MenuItem value={"Mensal"}>Mensal</MenuItem>
            <MenuItem value={"Semestral"}>Semestral</MenuItem>
            <MenuItem value={"Anual"}>Anual</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </form>
  );
}
