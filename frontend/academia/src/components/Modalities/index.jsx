import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Frequency from "../Frequency";

import "./style.css";

export default function Secretary() {
  return (
    <form className="schedulesRegister-main" onSubmit={""}>
      <Box>
        <h2>Modalidades</h2>
        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel control={<Checkbox />} label="Musculação" />
          <Frequency />
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel control={<Checkbox />} label="Natação" />
          <Frequency />
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel control={<Checkbox />} label="Crossfit" />
          <Frequency />
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel control={<Checkbox />} label="Spinning" />
          <Frequency />
        </Box>

        <Box sx={{ minWidth: 150 }}>
          <FormControlLabel control={<Checkbox />} label="Ritmos" />
          <Frequency />
        </Box>
      </Box>
    </form>
  );
}
