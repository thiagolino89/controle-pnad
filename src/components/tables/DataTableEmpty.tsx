import InboxIcon from "@mui/icons-material/Inbox";

import {
  Box,
  Typography,
} from "@mui/material";

interface Props {
  mensagem?: string;
}

export default function DataTableEmpty({
  mensagem = "Nenhum registro encontrado.",
}: Props) {
  return (
    <Box
      py={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <InboxIcon
        color="disabled"
        sx={{ fontSize: 64 }}
      />

      <Typography
        color="text.secondary"
      >
        {mensagem}
      </Typography>
    </Box>
  );
}