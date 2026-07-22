import { useEffect } from "react";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";

import AuthCard from "../components/AuthCard";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, loading, navigate]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
          px: 2,
        }}
      >
        <AuthCard>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Controle PNAD
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            mb={4}
          >
            Faça login para acessar o sistema
          </Typography>

          <LoginForm />
        </AuthCard>
      </Box>
    </Container>
  );
}