import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import * as IMCService from "../../services/imc";

import "./style.css";

export default function IMC() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchRows = async () => {
      const data = await IMCService.getIMC();
      setRows(data);
    };

    fetchRows();
  }, []);

  return (
    <div className="data-imc">
      <h3>Tabela IMC</h3>
      <TableContainer component={Paper}>
        <Table className="table">
          <TableHead>
            <TableRow className="table-header" style={{ font: "bold" }}>
              <TableCell align="center">IMC</TableCell>
              <TableCell align="center">Classificação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(
              (row) => (
                console.log(row),
                (
                  <TableRow className="table-row" key={row.value}>
                    <TableCell align="center">Abaixo de {row.value}</TableCell>
                    <TableCell align="center">{row.situation}</TableCell>
                  </TableRow>
                )
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
