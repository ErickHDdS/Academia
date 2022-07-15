import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useState } from "react";

import "./style.css";

function User() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div ClassName="main_user">
      <Box>
        <h2>Dados pessoais</h2>
        <Controller
          name="name"
          render={({ field }) => (
            <TextField required label="Nome" variant="standard" {...field} />
          )}
        />

        <Controller
          name="cpf"
          render={({ field }) => (
            <TextField
              required
              label="CPF"
              type="number"
              variant="standard"
              {...field}
            />
          )}
        />

        <Controller
          name="identity"
          render={({ field }) => (
            <TextField
              required
              label="Identidade"
              variant="standard"
              {...field}
            />
          )}
        />

        <Controller
          name="birthDate"
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="dd/MM/yyyy"
                label="Data de Nascimento"
                renderInput={(params) => (
                  <TextField required variant="standard" {...params} />
                )}
                {...field}
              />
            </LocalizationProvider>
          )}
        />

        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <Controller
            name="password"
            render={({ field }) => (
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
        </FormControl>
      </Box>

      <Box>
        <h2>Dados de pagamento</h2>
        <Controller
          name="numberCard"
          render={({ field }) => (
            <TextField
              required
              label="Número do Cartão"
              type="number"
              variant="standard"
              {...field}
            />
          )}
        />

        <Controller
          name="flagCard"
          render={({ field }) => (
            <TextField
              required
              label="Bandeira"
              variant="standard"
              {...field}
            />
          )}
        />

        <Controller
          name="namePrintCard"
          render={({ field }) => (
            <TextField
              required
              label="Nome Impresso"
              variant="standard"
              {...field}
            />
          )}
        />
      </Box>
    </div>
  );
}

export default User;
