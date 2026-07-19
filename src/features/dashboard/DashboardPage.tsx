import { Paper, Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold">
        Dashboard
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Bem-vindo ao Controle PNAD.
      </Typography>
    </Paper>
  );
}