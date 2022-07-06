import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

import "./style.css";

export default function PhysicalExam() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [fatPercentage, setFatPercentage] = useState("");
  const [leanMass, setLeanMass] = useState("");
  const [imc, setImc] = useState("");

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

  return (
    <section className="physicalExam-main">
      <div>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            readOnly={window.location.pathname === "/doctor" ? false : true}
            value={weight}
            onChange={handleChangeWeight}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          />
          <FormHelperText>Peso</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            readOnly={window.location.pathname === "/doctor" ? false : true}
            value={height}
            onChange={handleChangeHeight}
            endAdornment={<InputAdornment position="end">m</InputAdornment>}
          />
          <FormHelperText>Altura</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            readOnly={window.location.pathname === "/doctor" ? false : true}
            value={bloodPressure}
            onChange={handleChangeBloodPressure}
            endAdornment={<InputAdornment position="end">mmHg</InputAdornment>}
          />
          <FormHelperText>Pressão Arterial</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            readOnly={window.location.pathname === "/doctor" ? false : true}
            value={fatPercentage}
            onChange={handleChangeFatPercentage}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
          />
          <FormHelperText>Percentual de gordura no corpo</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            readOnly={window.location.pathname === "/doctor" ? false : true}
            value={leanMass}
            onChange={handleChangeLeanMass}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
          />
          <FormHelperText>Percentual de massa magra</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input
            readOnly={window.location.pathname === "/doctor" ? false : true}
            value={imc}
            onChange={handleChangeImc}
          />
          <FormHelperText>IMC</FormHelperText>
        </FormControl>
      </div>
    </section>
  );
}
