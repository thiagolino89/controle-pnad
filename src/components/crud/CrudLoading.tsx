import { Box, CircularProgress } from "@mui/material";

export default function CrudLoading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      py={6}
    >
      <CircularProgress />
    </Box>
  );
}