import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1300,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          Controle PNAD
        </Typography>
      </Toolbar>
    </AppBar>
  );
}