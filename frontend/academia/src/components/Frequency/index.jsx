import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as SecretaryService from "../../services/secretary";

import Select from "@mui/material/Select";

import "./style.css";

export default function Frequency({ modalities }) {
  const [planUser, setPlanUser] = useState({
    id: "",
    frequency: "",
    value: "",
  });
  const [lesson, setLesson] = useState({
    id: "",
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

  // const handleSubmmit = () => {
  //   SecretaryService.submmitMatricula({
  //     userId: 
  //     planId: planUser.id,
  //     lessonId: lesson.id
  //   })
  // }

  useEffect(() => {
    console.log(planUser);
    console.log(lesson);
  });

  return (
    <form className="frequencyRegister-main">
      <Grid container spacing={3} >
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

        <Grid item sx={{ maxWidth: 100 }}>
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

        <Grid item sx={{ maxWidth: 120 }}>
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

        <Grid item >
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

        <Button
          sx={{ maxWidth: 250 }}
          variant="contained"
          // endIcon={<BadgeIcon />}
          // onClick={handleSubmmit}
          type="submit"
        >
          Matricular
        </Button>
      </Grid>
    </form>
  );
}
