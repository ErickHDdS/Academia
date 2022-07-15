import { Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IMC from "../IMC";

export default function PhysicalExam() {
  return (
    <Box className="box">
      <Controller
        className="box"
        name="weight"
        render={({ field }) => <TextField {...field} label="Peso (kg)" />}
        rules={{ required: true }}
      />

      <Controller
        className="box"
        name="height"
        render={({ field }) => <TextField {...field} label="Altura (m)" />}
        rules={{ required: true }}
      />

      <Controller
        className="box"
        name="pressure"
        render={({ field }) => (
          <TextField {...field} label="Pressão Arterial (mmHg)" />
        )}
        rules={{ required: true }}
      />

      <Controller
        className="box"
        name="fatPercentage"
        render={({ field }) => (
          <TextField {...field} label="Percentual de gordura no corpo (%)" />
        )}
        rules={{ required: true }}
      />

      <Controller
        className="box"
        name="massPercentage"
        render={({ field }) => (
          <TextField {...field} label="Percentual de massa magra (%)" />
        )}
        rules={{ required: true }}
      />

      <IMC />
    </Box>
  );
}
