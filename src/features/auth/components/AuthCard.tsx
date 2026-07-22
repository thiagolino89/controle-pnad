import type { ReactNode } from "react";

import {
  Card,
  CardContent,
} from "@mui/material";

interface Props {
  children: ReactNode;
}

export default function AuthCard({ children }: Props) {
  return (
    <Card
      elevation={4}
      sx={{
        width: "100%",
        maxWidth: 450,
        borderRadius: 3,
      }}
    >
      <CardContent
        sx={{
          p: 5,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}