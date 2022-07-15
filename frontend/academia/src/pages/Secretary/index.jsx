import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BadgeIcon from "@mui/icons-material/Badge";
import UserRegister from "../../components/UserRegister";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm, FormProvider } from "react-hook-form";
import Modalities from "../../components/Modalities";
import * as SecretaryService from "../../services/secretary";

import "./style.css";

export default function Secretary() {
  const [planUser, setPlanUser] = useState("Mensal");

  const handleChange = (event) => {
    setPlanUser(event.target.value);
  };

  const methods = useForm({
    defaultValues: {
      birthDate: new Date("1900-01-01T01:00:00"),
    },
  });

  const onSubmit = async (forms) => {
    console.log(forms);
    const loginReqBody = {
      ...forms,
    };

    const res = await SecretaryService.register(loginReqBody);

    if (res.status === 200) alert("Usuário registrado com sucesso");
  };

  return (
    <FormProvider {...methods}>
      <form
        className="userRegister-main"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h1 className="userRegister-title">Cadastro de Usuários</h1>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <div className="user-infos">
            <UserRegister />
            <div className="user-registration">
              <Modalities />
              <Box className="plan">
                <h2>Plano</h2>
                <Box sx={{ minWidth: 150 }}>
                  <FormControl>
                    <InputLabel>Plano</InputLabel>
                    <Select
                      value={planUser}
                      label="Plano"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Mensal"}>Mensal</MenuItem>
                      <MenuItem value={"Semestral"}>Semestral</MenuItem>
                      <MenuItem value={"Anual"}>Anual</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </div>
          </div>
        </Box>
        <Button
          sx={{ maxWidth: 250 }}
          className="button-register"
          variant="contained"
          endIcon={<BadgeIcon />}
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
    </FormProvider>
  );
}
