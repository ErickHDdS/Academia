import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";
import Frequencia from "../Frequency";
import Grid from "@mui/material/Grid";

import "./style.css";

export default function Modalities() {
  const [state, setState] = useState({
    musculacao: false,
    natacao: false,
    crossfit: false,
    spinning: false,
    ritmos: false,
  });
  const handleCheckboxChange = (bool, modalidade) => {
    var aux = state;
    aux[modalidade] = bool;
    setState({...aux});
  };

  // useEffect(() => {
  //   (async () => {
  //     // const { data } = await SecretaryService.register(loginReqBody);
  //   })();
  // }, []);

  useEffect(() => {
    console.log(state);
  });

  return (
    <Grid>
      <Box>
        <h2>Modalidades</h2>
        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel
            control={<Checkbox />}
            // checked={state.musculacao}
            label="Musculação"
            onChange={(e) => {
              handleCheckboxChange(e.target.checked, "musculacao");
            }}
            value={state.musculacao}
          />
          <Frequencia />
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Natação"
            onChange={(e) => handleCheckboxChange(e.target.checked, "natacao")}
            value={state.natacao}
          />
          <Frequencia />
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Crossfit"
            onChange={(e) => handleCheckboxChange(e.target.checked, "crossfit")}
            value={state.crossfit}
          />
          <Frequencia />
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Spinning"
            onChange={(e) => handleCheckboxChange(e.target.checked, "spinning")}
            value={state.spinning}
          />
          <Frequencia />
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Ritmos"
            onChange={(e) => handleCheckboxChange(e.target.checked, "ritmos")}
            value={state.ritmos}
          />
          <Frequencia />
        </Box>
      </Box>
    </Grid>
  );
}
