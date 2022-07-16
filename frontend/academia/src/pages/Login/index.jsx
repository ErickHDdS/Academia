import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { login } from "../../services/user";

import "./style.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");

  const { handleSubmit, control } = useForm({
    defaultValues: {
      cpf: "",
      password: "",
    },
  });

  const submitLogin = async (data) => {
    let userLogin = await login(data);
    setUser(userLogin);

    switch (userLogin.userType) {
      case "PERSON":
        window.location.href = "/user";
        break;
      case "SECRETARY":
        window.location.href = "/secretary";
        break;
      case "PROFESSOR":
        window.location.href = "/teacher";
        break;
      case "DOCTOR":
        window.location.href = "/doctor";
        break;
      default:
        console.log("unidentified user");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)}>
      <Box sx={{ "& > :not(style)": { m: 1 } }} className="main-login">
        <h1 className="login-title">Login</h1>

        <Box className="boxLogin">
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Login" variant="standard" />
            )}
          />
        </Box>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <Controller
            name="password"
            control={control}
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

        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Entrar
        </Button>
      </Box>
    </form>
  );
}
