import TablePagination from "@mui/material/TablePagination";

interface Props {
  total: number;
  pagina: number;
  linhasPorPagina: number;

  onPaginaChange: (
    event: unknown,
    novaPagina: number
  ) => void;

  onLinhasPorPaginaChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function DataTablePagination({
  total,
  pagina,
  linhasPorPagina,
  onPaginaChange,
  onLinhasPorPaginaChange,
}: Props) {
  return (
    <TablePagination
      component="div"
      count={total}
      page={pagina}
      rowsPerPage={linhasPorPagina}
      onPageChange={onPaginaChange}
      onRowsPerPageChange={onLinhasPorPaginaChange}
      rowsPerPageOptions={[10, 25, 50, 100]}
      labelRowsPerPage="Linhas por página"
      labelDisplayedRows={({ from, to, count }) =>
        `${from}-${to} de ${
          count !== -1 ? count : `mais de ${to}`
        }`
      }
    />
  );
}