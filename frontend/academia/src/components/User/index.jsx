import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormContext, Controller } from "react-hook-form";

import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

import "./style.css";

function User() {
  const { control } = useFormContext();

  const [flag, setFlag] = useState("");

  const handleChangeFlag = (event) => {
    setFlag(event.target.value);
  };

  return (
    <div ClassName="main_user">
      <Box>
        <h2>Dados pessoais</h2>
        <Controller
          name="Name"
          control={control}
          render={({ field }) => (
            <TextField required label="Nome" variant="standard" {...field} />
          )}
        />

        <Controller
          name="CPF"
          control={control}
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
          name="Identidade"
          control={control}
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
          name="Birthday"
          control={control}
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
      </Box>

      <Box>
        <h2>Dados de pagamento</h2>
        <Controller
          name="Número do cartão"
          control={control}
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

        <TextField
          select
          required
          label="Bandeira"
          value={flag}
          onChange={handleChangeFlag}
          variant="standard"
        >
          <MenuItem value={"ELO"}>ELO</MenuItem>
          <MenuItem value={"MasterCard"}>MasterCard</MenuItem>
          <MenuItem value={"VISA"}>VISA</MenuItem>
        </TextField>

        <Controller
          name="Nome Impresso"
          control={control}
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
