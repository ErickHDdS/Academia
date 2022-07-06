import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BadgeIcon from "@mui/icons-material/Badge";
import User from "../../components/User";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm, FormProvider } from "react-hook-form";
import Modalities from "../../components/Modalities";

import "./style.css";

export default function Secretary() {
  const [planUser, setPlanUser] = useState("Mensal");

  const handleChange = (event) => {
    setPlanUser(event.target.value);
  };

  const methods = useForm({
    defaultValues: {
      Name: "",
      Birthday: new Date(),
      CPF: "",
    },
  });

  // const onSubmit = async (forms) => {
  // };

  return (
    <FormProvider {...methods}>
      <form className="userRegister-main" onSubmit={""}>
        <h1 className="userRegister-title">Cadastro de Usuários</h1>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <div className="user-infos">
            <User />
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
