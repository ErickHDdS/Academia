import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BadgeIcon from "@mui/icons-material/Badge";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import UserRegister from "../../components/UserRegister";

import { useForm, FormProvider } from "react-hook-form";
import Modalities from "../../components/Modalities";
import * as SecretaryService from "../../services/secretary";

import "./style.css";
import { useEffect, useState } from "react";

export default function Secretary() {
  const [planUser, setPlanUser] = useState("Mensal");
  const [selected, setSelected] = useState("");
  const [input, setInput] = useState({
    name: "",
    cpf: "",
    identity: "",
    birthDate: "",
    numberCard: "",
    flagCard: "",
    namePrintCard: "",
  });

  // const methods = useForm({
  //   defaultValues: {
  //     birthDate: new Date("1900-01-01T01:00:00"),
  //   },
  // });

  // const onSubmit = async (forms) => {
  //   console.log(forms);
  //   const loginReqBody = {
  //     ...forms,
  //   };

  //   // const res = await SecretaryService.register(loginReqBody);

  //   if (res.status === 200) alert("Usuário registrado com sucesso");
  // };

  const handleClick = (e) => {
    setSelected(e.target.innerText);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmmit = () => {
    try {
      SecretaryService.register(input);
    } catch (error) {
      console.log(error);
    }
  };

  const selectRender = () => {
    switch (selected) {
      case "CADASTRAR USUARIOS":
        return (
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <div className="user-infos">
              <Grid
                container
                direction="column"
                style={{ alignItems: "center" }}
              >
                <Typography variant="h5" gutterBottom component="div">
                  Cadastrar Cliente
                </Typography>
                <TextField
                  name="name"
                  label="Nome"
                  variant="standard"
                  style={{ width: "35%" }}
                  onChange={handleChange}
                  value={input.name}
                />
                <TextField
                  name="cpf"
                  label="Cpf"
                  variant="standard"
                  style={{ width: "35%" }}
                  onChange={handleChange}
                />
                <TextField
                  name="identity"
                  label="Rg"
                  variant="standard"
                  style={{ width: "35%" }}
                  onChange={handleChange}
                />
                <TextField
                  name="birthDate"
                  label="Data de Aniversário"
                  type="date"
                  variant="standard"
                  style={{ width: "35%" }}
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChange}
                />
                <TextField
                  name="numberCard"
                  label="Número do Cartão"
                  variant="standard"
                  style={{ width: "35%" }}
                  onChange={handleChange}
                />
                <TextField
                  name="password"
                  label="Senha"
                  type="password"
                  variant="standard"
                  style={{ width: "35%" }}
                  onChange={handleChange}
                />
                <TextField
                  name="flagCard"
                  label="Bandeira do Cartão"
                  variant="standard"
                  style={{ width: "35%" }}
                  onChange={handleChange}
                />
                <TextField
                  name="namePrintCard"
                  label="Nome impresso no cartão"
                  variant="standard"
                  style={{ width: "35%" }}
                  onChange={handleChange}
                />

                <Button
                  sx={{ maxWidth: 250 }}
                  variant="contained"
                  // endIcon={<BadgeIcon />}
                  onClick={handleSubmmit}
                  type="submit"
                >
                  Enviar
                </Button>
              </Grid>
            </div>
          </Box>
        );
      case "MATRICULAR USUARIOS":
        return (
          <Grid container style={{ justifyContent: "center" }}>
            <Modalities />
            {/* <Box className="plan">
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
            </Box> */}
          </Grid>
        );

      default:
        return null;
    }
  };

  // const handeSubmit = () => {
  //   try {
  //     SecretaryService.register(input);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    console.log(input);
  });

  return (
    <Grid
      container
      direction="column"
      style={{
        background: "#f5f5f5",
        // display: "flex",
        // justifyContent: "center",
        minHeight: 730,
      }}
    >
      <Grid container style={{ justifyContent: "center" }}>
        <Button
          sx={{ maxWidth: 250 }}
          variant="contained"
          // endIcon={<BadgeIcon />}
          onClick={handleClick}
          type="submit"
        >
          Cadastrar Usuarios
        </Button>

        <Button
          sx={{ maxWidth: 250 }}
          variant="contained"
          // endIcon={<BadgeIcon />}
          onClick={handleClick}
          type="submit"
        >
          Matricular Usuarios
        </Button>
      </Grid>
      <Grid>
        {selectRender()}
        {/* <UserRegister /> */}
      </Grid>
    </Grid>
  );
}
