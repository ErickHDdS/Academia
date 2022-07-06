import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import BadgeIcon from "@mui/icons-material/Badge";
import PhysicalExam from "../../components/PhysicalExam";

import "./style.css";

export default function Doctor() {
  const [patient, setPatient] = useState("");
  const [result, setResult] = useState("");

  const handleChangePatient = (event) => {
    setPatient(event.target.value);
  };

  const handleChangeResult = (event) => {
    setResult(event.target.value);
  };

  return (
    <section className="doctor-main">
      <h2 className="doctor-title">Exame Médico</h2>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Paciente</InputLabel>
          <Select
            value={patient}
            onChange={handleChangePatient}
            autoWidth
            label="Paciente"
          >
            <MenuItem value={"Erick"}>Erick</MenuItem>
            <MenuItem value={"Tarcisio"}>Tarcisio</MenuItem>
            <MenuItem value={"Laguardia"}>Laguardia</MenuItem>
            <MenuItem value={"Iagor"}>Iagor</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <PhysicalExam />
      </div>

      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Resultado</InputLabel>
          <Select
            value={result}
            onChange={handleChangeResult}
            autoWidth
            label="Resultado"
          >
            <MenuItem value={"Aprovado"}>Aprovado</MenuItem>
            <MenuItem value={"Reprovado"}>Reprovado</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <Button
          className="button-register"
          variant="contained"
          endIcon={<BadgeIcon />}
          type="submit"
        >
          Cadastrar
        </Button>
      </div>
    </section>
  );
}
