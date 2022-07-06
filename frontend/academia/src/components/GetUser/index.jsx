import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./style.css";

export default function GetUser() {
  const [user, setUser] = useState("");

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <div>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel>Aluno</InputLabel>
          <Select
            value={user}
            onChange={handleChangeUser}
            autoWidth
            label="Aluno"
          >
            <MenuItem value={"Erick"}>Erick</MenuItem>
            <MenuItem value={"Tarcisio"}>Tarcisio</MenuItem>
            <MenuItem value={"Laguardia"}>Laguardia</MenuItem>
            <MenuItem value={"Iagor"}>Iagor</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
