import GetCPF from "../../utils/getCPF.js";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import "./style.css";

const GetUserCPF = () => {
  const [userCPF, setCPF] = useState("");
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

  return (
    <div className="search">
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Usuário não encontrado"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Não foi possível localizar o usuário com CPF {userCPF}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Grid
        container
        spacing={0.5}
        justifyContent="center"
        className="search-form"
      >
        {search && (
          <GetCPF
            cpf={userCPF}
            setError={seachError}
            setSuccess={searchSuccess}
            setNotFound={searchNotFound}
            setLoadng={setLoading}
            setUser={setUser}
          />
        )
        }
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
      {user && (
        <Grid container spacing={0.5} justifyContent="center">
          <Grid item>
            {
              <TextField
                id="standard-basic"
                label="ID"
                variant="standard"
                value={user.id}
              />
            }
          </Grid>
          <Grid item>
            {
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                value={user.name}
              />
            }
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default GetUserCPF;
