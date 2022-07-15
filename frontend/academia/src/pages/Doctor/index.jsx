import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import BadgeIcon from "@mui/icons-material/Badge";
import PhysicalExam from "../../components/PhysicalExam";
import GetUserCPF from "../../components/GetUserCPF";
import { registerExam } from "../../services/doctor";
import { Input, FormHelperText } from "@mui/material";

import "./style.css";

export default function Doctor() {
  const [able, setAble] = useState("");
  const [imc, setImc] = useState(0);

  const handleChangeResult = (event) => {
    setAble(event.target.value);
  };

  const methods = useForm({
    defaultValues: {
      able: "",
    },
  });

  const submitExam = async (data) => {
    able === "Aprovado" ? (data.able = true) : (data.able = false);
    data.weight = parseFloat(data.weight);
    data.height = parseFloat(data.height);
    data.fatPercentage = parseFloat(data.fatPercentage);
    data.massPercentage = parseFloat(data.massPercentage);
    let submitExamSubmit = await registerExam(
      data,
      localStorage.getItem("searchId")
    );
    setImc(submitExamSubmit.imc);
  };

  return (
    <section className="doctor-main">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitExam)}>
          <h2 className="doctor-title">Exame Médico</h2>

          <div>
            <GetUserCPF />
          </div>

          <div className="exam">
            <PhysicalExam />
          </div>

          <div>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
              <Input readOnly="true" value={imc} />
              <FormHelperText>IMC</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Resultado</InputLabel>
              <Select
                name="able"
                value={able}
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
        </form>
      </FormProvider>
      <div></div>
    </section>
  );
}
