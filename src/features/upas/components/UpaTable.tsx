import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableSortLabel,
} from "@mui/material";

import CrudActions from "../../../components/crud/CrudActions";
import {
  DataTable,
  DataTableEmpty,
} from "../../../components/tables";

import useSort from "../../../components/hooks/useSort";

import type { Upa } from "../types/upa";

interface Props {
  upas: Upa[];

  onEdit: (upa: Upa) => void;

  onDelete: (upa: Upa) => void;
}

export default function UpaTable({
  upas,
  onEdit,
  onDelete,
}: Props) {
  const {
    sortedData,
    order,
    orderBy,
    handleSort,
  } = useSort(upas, "nome");

  if (upas.length === 0) {
    return (
      <DataTableEmpty mensagem="Nenhuma UPA cadastrada." />
    );
  }

  return (
    <DataTable minWidth={1000}>
      <TableHead>
        <TableRow>
          <TableCell width={120}>
            <TableSortLabel
              active={orderBy === "codigo"}
              direction={order}
              onClick={() => handleSort("codigo")}
            >
              Código
            </TableSortLabel>
          </TableCell>

          <TableCell>
            <TableSortLabel
              active={orderBy === "nome"}
              direction={order}
              onClick={() => handleSort("nome")}
            >
              UPA
            </TableSortLabel>
          </TableCell>

          <TableCell>
            <TableSortLabel
              active={orderBy === "municipioNome"}
              direction={order}
              onClick={() =>
                handleSort("municipioNome")
              }
            >
              Município
            </TableSortLabel>
          </TableCell>

          <TableCell width={140}>
            <TableSortLabel
              active={orderBy === "situacao"}
              direction={order}
              onClick={() =>
                handleSort("situacao")
              }
            >
              Situação
            </TableSortLabel>
          </TableCell>

          <TableCell
            align="center"
            width={120}
          >
            Ações
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {sortedData.map((upa) => (
          <TableRow hover key={upa.id}>
            <TableCell>{upa.codigo}</TableCell>

            <TableCell>
              <Typography fontWeight={500}>
                {upa.nome}
              </Typography>
            </TableCell>

            <TableCell>
              {upa.municipioNome}
            </TableCell>

            <TableCell>
              {upa.situacao}
            </TableCell>

            <TableCell align="center">
              <CrudActions
                onEdit={() => onEdit(upa)}
                onDelete={() => onDelete(upa)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  );
}