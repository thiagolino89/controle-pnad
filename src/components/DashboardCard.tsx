import { Card, CardContent, Typography } from "@mui/material";

interface DashboardCardProps {
  titulo: string;
  valor: number | string;
}

export default function DashboardCard({
  titulo,
  valor,
}: DashboardCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: 120,
      }}
    >
      <CardContent>
        <Typography
          variant="subtitle1"
          color="text.secondary"
        >
          {titulo}
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          mt={2}
        >
          {valor}
        </Typography>
      </CardContent>
    </Card>
  );
}