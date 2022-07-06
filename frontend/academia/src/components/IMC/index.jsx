import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";

import "./style.css";

function createData(imc, description) {
  return { imc, description };
}

const rows = [
  createData("Abaixo de 14,9", "Extremamente abaixo do peso"),
  createData("Entre 15 e 15,9", "Gravemente abaixo do peso"),
  createData("Entre 16 e 18,5", "Abaixo do peso ideal"),
  createData("Entre 18,6 e 24,9", "Faixa de peso ideal"),
  createData("Entre 25 e 29,9", "Sobrepeso"),
  createData("Entre 30 e 34,9", "Obesidade grau I"),
  createData("Entre 35 e 39,9", "Obesidade grau II (grave)"),
  createData("Acima ou igual a 40", "Obesidade grau III (mórbida)"),
];

export default function IMC() {
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
            {rows.map((row) => (
              <TableRow className="table-row" key={row.imc}>
                <TableCell align="center">{row.imc}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
