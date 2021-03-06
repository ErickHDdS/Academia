import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";
import Frequencia from "../Frequency";
import Grid from "@mui/material/Grid";
import * as SecretaryService from "../../services/secretary";
import "./style.css";
import Button from "@mui/material/Button";
import GetUserCPF from "../../components/GetUserCPF";

export default function Modalities() {
  const [state, setState] = useState({
    musculacao: false,
    natacao: false,
    crossfit: false,
    spinning: false,
    ritmos: false,
  });
  const [modalities, setModalities] = useState({});
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (bool, modalidade) => {
    var aux = state;
    aux[modalidade] = bool;
    setState({ ...aux });
  };

  useEffect(() => {
    (async () => {
      const { data } = await SecretaryService.getMatriculaInfos();
      setModalities(data);
      setLoading(true);
    })();
  }, []);

  useEffect(() => {
    console.log(modalities);
  });

  return (
    loading && (
      <Grid style={{ justifyContent: "center" }}>
        <GetUserCPF />

        <Box>
          <h2>Modalidades</h2>

          <Box sx={{ minWidth: 150 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Crossfit"
              onChange={(e) =>
                handleCheckboxChange(e.target.checked, "crossfit")
              }
              value={state.crossfit}
            />
            <Frequencia modalities={modalities.Crossfit} />
          </Box>

          <Box sx={{ minWidth: 150 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Spinning"
              onChange={(e) =>
                handleCheckboxChange(e.target.checked, "spinning")
              }
              value={state.spinning}
            />
            <Frequencia modalities={modalities.Spinning} />
          </Box>

          <Box sx={{ minWidth: 150 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Ritmos"
              onChange={(e) => handleCheckboxChange(e.target.checked, "ritmos")}
              value={state.ritmos}
            />
            <Frequencia modalities={modalities.Ritmos} />
          </Box>
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Nata????o"
            onChange={(e) => handleCheckboxChange(e.target.checked, "natacao")}
            value={state.natacao}
          />
          <Frequencia modalities={modalities.Nata????o} />
        </Box>
        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel
            control={<Checkbox />}
            // checked={state.musculacao}
            label="Muscula????o"
            onChange={(e) => {
              handleCheckboxChange(e.target.checked, "musculacao");
            }}
            value={state.musculacao}
          />
          <Frequencia modalities={modalities.Muscula????o} />
        </Box>
      </Grid>
    )
  );
}
