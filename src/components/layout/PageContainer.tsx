import { Paper } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        borderRadius: 2,
      }}
    >
      {children}
    </Paper>
  );
}