import { ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const drawerWidth = 250;

export default function MainLayout({ children }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Header />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          mt: "64px",
          p: 4,
          bgcolor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}