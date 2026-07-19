import { Alert } from "@mui/material";

export default function MunicipioEmptyState() {
  return (
    <Alert severity="info">
      Nenhum município cadastrado.
    </Alert>
  );
}