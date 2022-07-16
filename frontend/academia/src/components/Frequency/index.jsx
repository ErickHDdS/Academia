import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import Select from "@mui/material/Select";

import "./style.css";

export default function Frequency({ modalities }) {
  const [frequencySchedulesUser, setFrequencySchedulesUser] = useState("");
  const [frequencyDaysUser, setFrequencyDaysUser] = useState("");
  const [planUser, setPlanUser] = useState({
    name: "",
    frequency: "",
    value: "",
  });
  const [lesson, setLesson] = useState({
    horary: "",
    vacancies: "",
  });

  const handlePlanChange = (event) => {
    let choosedPlan = event.target.value.toUpperCase();

    const findedPlan = modalities.plans.find((obj) => obj.type === choosedPlan);
    setPlanUser(findedPlan);
  };

  const handleLessonsChange = (event) => {
    let choosedLesson = event.target.value;
    console.log(choosedLesson);
    const findedLesson = modalities.lessons.find(
      (obj) => obj.horary === choosedLesson
    );
    setLesson(findedLesson);
  };

  return (
    <form className="frequencyRegister-main">
      <Grid container spacing={3} style={{ justifyContent: "space-between" }}>
        <Grid item sx={{ width: 150 }}>
          <FormControl fullWidth>
            <InputLabel>Plano</InputLabel>
            <Select
              value={planUser.type}
              label="type"
              onChange={handlePlanChange}
            >
              {modalities?.plans.map((plan) => (
                <MenuItem key={plan.type} value={plan.type}>
                  {plan.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item className="schedules">
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Horário</InputLabel>
            <Select
              value={lesson.horary}
              label="horary"
              onChange={handleLessonsChange}
            >
              {modalities?.lessons.map((lesson) => (
                <MenuItem key={lesson.horary} value={lesson.horary}>
                  {lesson.horary}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item sx={{ minWidth: 150 }}>
          <FormControl>
            <TextField
              name="value"
              label="Valor"
              variant="standard"
              disabled
              // style={{ width: "35%" }}
              // onChange={handleChange}
              value={planUser.value}
            />
          </FormControl>
        </Grid>

        <Grid item>
          <TextField
            name="frequency"
            label="Dias na Semana"
            variant="standard"
            disabled
            // style={{ width: "35%" }}
            // onChange={handleChange}
            value={planUser.frequency}
          />
        </Grid>

        <Grid item>
          <TextField
            name="vacancies"
            label="Vagas Disponíveis"
            variant="standard"
            disabled
            // style={{ width: "35%" }}
            // onChange={handleChange}
            value={lesson.vacancies}
          />
        </Grid>
      </Grid>
    </form>
  );
}
