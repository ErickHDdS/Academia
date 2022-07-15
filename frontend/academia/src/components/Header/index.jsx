import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Link from "@mui/material/Link";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import { logout } from "../../services/user";

import "./style.css";

function Header() {
  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <section className="main-header">
        <Box className="name" sx={{ "& > :not(style)": { m: 3 } }}>
          <Link underline="none" color={"#FFFFFF"} href="/">
            <FitnessCenterIcon sx={{ fontSize: 50 }} />
          </Link>

          <Link underline="none" color={"#FFFFFF"} href="/">
            Academia MFAL
          </Link>
        </Box>

        <Box className="menu" sx={{ "& > :not(style)": { m: 3 } }}>
          {window.location.pathname === "/" ? (
            <Link underline="none" color={"#FFFFFF"} href="/login">
              <PersonIcon />
            </Link>
          ) : (
            ""
          )}

          {window.location.pathname === "/login" ||
          window.location.pathname === "/" ? (
            ""
          ) : (
            <Link
              underline="none"
              color={"#FFFFFF"}
              href="/"
              onClick={handleLogout}
            >
              <LogoutIcon />
            </Link>
          )}
        </Box>
      </section>
    </header>
  );
}

export default Header;
