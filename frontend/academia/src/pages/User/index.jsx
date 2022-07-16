import { useEffect } from "react";
import GetUserCPF from "../../components/GetUserCPF";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Input, FormHelperText } from "@mui/material";
import { getWorkouts } from "../../services/user";

import "./style.css";

export default function User() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [pressure, setPressure] = useState("");
  const [fatPercentage, setFatPercentage] = useState("");
  const [massPercentage, setMassPercentage] = useState("");
  const [imc, setImc] = useState("");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function handleGetWorkout() {
      const data = await getWorkouts();
      setWorkouts(data);
    }

    async function handleGetExam() {
      // const data = await getExam(window.localStorage.getItem("userId"));
      // console.log(data);
      // setWeight(data.weight);
      // setHeight(data.height);
      // setPressure(data.pressure);
      // setFatPercentage(data.fatPercentage);
      // setMassPercentage(data.massPercentage);
      // setImc(data.imc);
    }
    handleGetWorkout();
    handleGetExam();
  }, []);

  return (
    <section className="user-main">
      <h1 className="user-title">Informações</h1>

      <div className="data-doctor">
        <h3>Dados médicos</h3>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input readOnly="true" value={weight} />
          <FormHelperText>Peso (kg)</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input readOnly="true" value={height} />
          <FormHelperText>Altura (m)</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input readOnly="true" value={pressure} />
          <FormHelperText>Pressão Arterial (mmHg)</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input readOnly="true" value={fatPercentage} />
          <FormHelperText>Percentual de gordura no corpo (%)</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input readOnly="true" value={massPercentage} />
          <FormHelperText>Percentual de massa magra (%)</FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <Input readOnly="true" value={imc} />
          <FormHelperText>IMC</FormHelperText>
        </FormControl>
      </div>

      <div className="data-training">
        <h3>Meu treino</h3>

        {workouts.map((training) => (
          <div>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
              <Input readOnly="true" value={training.name} />
              <FormHelperText>Exercício/Músculo</FormHelperText>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
              <Input readOnly="true" value={training.repetitions} />
              <FormHelperText>Repetições</FormHelperText>
            </FormControl>
          </div>
        ))}
      </div>
    </section>
  );
}
