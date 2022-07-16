import Box from "@mui/material/Box";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

import "./style.css";

export default function Trainig() {
  return (
    <Box>
      <Controller
        name="name"
        render={({ field }) => (
          <TextField {...field} label="Exercício/Músculo" />
        )}
        rules={{ required: true }}
      />

      <Controller
        name="repetitions"
        render={({ field }) => <TextField {...field} label="Repetições" />}
        rules={{ required: true }}
      />
    </Box>
  );
}
