import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import BadgeIcon from "@mui/icons-material/Badge";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./style.css";

export default function Doctor() {
  const [weight, setWeight] = useState("");
  const [patient, setPatient] = useState("");
  const [height, setHeight] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [fatPercentage, setFatPercentage] = useState("");
  const [leanMass, setLeanMass] = useState("");
  const [imc, setImc] = useState("");
  const [result, setResult] = useState("");

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
  };

  const handleChangeBloodPressure = (event) => {
    setBloodPressure(event.target.value);
  };

  const handleChangeFatPercentage = (event) => {
    setFatPercentage(event.target.value);
  };

  const handleChangeLeanMass = (event) => {
    setLeanMass(event.target.value);
  };

  const handleChangeImc = (event) => {
    setImc(event.target.value);
  };

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
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            value={weight}
            onChange={handleChangeWeight}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          />
          <FormHelperText>Peso</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            value={height}
            onChange={handleChangeHeight}
            endAdornment={<InputAdornment position="end">m</InputAdornment>}
          />
          <FormHelperText>Altura</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            value={bloodPressure}
            onChange={handleChangeBloodPressure}
            endAdornment={<InputAdornment position="end">mmHg</InputAdornment>}
          />
          <FormHelperText>Pressão Arterial</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            value={fatPercentage}
            onChange={handleChangeFatPercentage}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
          />
          <FormHelperText>Percentual de gordura no corpo</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            value={leanMass}
            onChange={handleChangeLeanMass}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
          />
          <FormHelperText>Percentual de massa magra</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input value={imc} onChange={handleChangeImc} />
          <FormHelperText>IMC</FormHelperText>
        </FormControl>
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
