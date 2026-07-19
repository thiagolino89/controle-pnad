import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import type { ReactNode } from "react";

interface Props {
  title: string;
  action?: ReactNode;
}

export default function PageHeader({
  title,
  action,
}: Props) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Typography
        variant="h5"
        fontWeight={700}
      >
        {title}
      </Typography>

      {action}
    </Box>
  );
}