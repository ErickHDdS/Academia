import GetCPF from "../../utils/getCPF.js";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./style.css";

const GetUserCPF = () => {
  const [userCPF, setCPF] = useState("");
  const [success, setSuccess] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const cpfContent = (event) => {
    setCPF(event.target.value);
  };

  const searchSuccess = (state) => {
    setSuccess(state);
    setNotFound(!state);
  };

  const searchNotFound = (state) => {
    setOpen(notFound);
    setSuccess(!state);
    setNotFound(state);
    setUser(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  window.localStorage.setItem("searchId", user.id);

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
            setSuccess={searchSuccess}
            setNotFound={searchNotFound}
            setLoadng={setLoading}
            setUser={setUser}
            search={search}
            setSearch={setSearch}
          />
        )}
        <Grid item>
          <Box
            component="form"
            sx={{ display: "flex" }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="cpf"
              label="CPF"
              variant="filled"
              onChange={cpfContent}
            />
            <Box sx={{ display: "flex" }}>
              {loading && <CircularProgress />}
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: "flex" }}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => setSearch(true)}
            >
              Buscar
            </Button>
          </Box>
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
