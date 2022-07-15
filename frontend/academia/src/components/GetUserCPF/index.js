import getCPF from "../../utils/getCPF.js";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const GetUserCPF = () => {
  const [cpf, setCPF] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const cpfContent = (event) => {
    setCPF(event.target.value);
  };

  const seachError = (state) => {
    setError(state);
    setSuccess(!state);
    setNotFound(!state);
  };

  const searchSuccess = (state) => {
    setError(!state);
    setSuccess(state);
    setNotFound(!state);
  };

  const searchNotFound = (state) => {
    setError(!state);
    setSuccess(!state);
    setNotFound(state);
  };

  const search = () => {
    getCPF(cpf, seachError, searchSuccess, searchNotFound, setUser, setLoading);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="cpf"
              label="CPF"
              variant="filled"
              onChange={cpfContent}
            />
          </Box>
        </Grid>
        <Grid item>
          <Button variant="contained" disableElevation onClick={() => search()}>
            Buscar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default GetUserCPF;