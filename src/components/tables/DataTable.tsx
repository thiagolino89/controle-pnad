import {
  Paper,
  Table,
  TableContainer,
} from "@mui/material";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  minWidth?: number;
}

export default function DataTable({
  children,
  minWidth = 900,
}: Props) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 2,
        overflowX: "auto",
      }}
    >
      <Table
        sx={{
          minWidth,
        }}
      >
        {children}
      </Table>
    </TableContainer>
  );
}