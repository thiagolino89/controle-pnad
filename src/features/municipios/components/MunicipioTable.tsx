import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import CrudActions from "../../../components/crud/CrudActions";
import {
  DataTable,
  DataTableEmpty,
} from "../../../components/tables";

import type { Municipio } from "../types/municipio";

interface Props {
  municipios: Municipio[];

  onEdit: (municipio: Municipio) => void;

  onDelete: (municipio: Municipio) => void;
}

export default function MunicipioTable({
  municipios,
  onEdit,
  onDelete,
}: Props) {
  if (municipios.length === 0) {
    return (
      <DataTableEmpty mensagem="Nenhum município cadastrado." />
    );
  }

  return (
    <DataTable minWidth={1000}>
      <TableHead>
        <TableRow>
          <TableCell width={120}>Código</TableCell>

          <TableCell>Município</TableCell>

          <TableCell width={90}>UF</TableCell>

          <TableCell align="center" width={90}>
            UPAs
          </TableCell>

          <TableCell width={140}>
            Situação
          </TableCell>

          <TableCell align="center" width={120}>
            Ações
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {municipios.map((municipio) => (
          <TableRow
            hover
            key={municipio.id}
          >
            <TableCell>
              {municipio.codigo}
            </TableCell>

            <TableCell>
              <Typography fontWeight={500}>
                {municipio.nome}
              </Typography>
            </TableCell>

            <TableCell>
              {municipio.uf}
            </TableCell>

            <TableCell align="center">
              {municipio.upas}
            </TableCell>

            <TableCell>
              {municipio.situacao}
            </TableCell>

            <TableCell align="center">
              <CrudActions
                onEdit={() => onEdit(municipio)}
                onDelete={() => onDelete(municipio)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  );
}