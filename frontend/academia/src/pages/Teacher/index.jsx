import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormProvider } from "react-hook-form";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import GetUser from "../../components/GetUser";
import Trainig from "../../components/Training";

import "./style.css";

export default function Teacher() {
  // const [student, setStudent] = useState("");

  // const handleChangeStudent = (event) => {
  //   setStudent(event.target.value);
  // };

  // const [repetitions, setRepetitions] = useState("");

  // const handleChangeRepetitions = (event) => {
  //   setRepetitions(event.target.value);
  // };

  return (
    <FormProvider>
      <form className="teacher-main" onSubmit={""}>
        <h1 className="teacher-title">Cadastro de Treinos</h1>

        <GetUser />

        <Trainig />

        <Button
          sx={{ maxWidth: 250 }}
          className="button-register"
          variant="contained"
          endIcon={<CheckIcon />}
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
    </FormProvider>
  );
}
