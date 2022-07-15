import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Button from "@mui/material/Button";
import BadgeIcon from "@mui/icons-material/Badge";
import GetUserCPF from "../../components/GetUserCPF";
import { registerTraining } from "../../services/teacher";

import Trainig from "../../components/Training";

import "./style.css";

export default function Teacher() {
  const methods = useForm({
    defaultValues: {
      able: "",
    },
  });

  const submitExam = async (data) => {
    data.repetitions = parseInt(data.repetitions);
    registerTraining(data, localStorage.getItem("searchId"));
  };

  return (
    <section className="teacher-main">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitExam)}>
          <h1 className="teacher-title">Cadastro de Treinos</h1>

          <div>
            <GetUserCPF />
          </div>

          <div className="exam">
            <Trainig />
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
        </form>
      </FormProvider>
    </section>
  );
}
