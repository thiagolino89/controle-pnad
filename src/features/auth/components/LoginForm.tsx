import { useState } from "react";

import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "../../../hooks/useAuth";
import {
  loginSchema,
  type LoginFormData,
} from "../types/login";

export default function LoginForm() {
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormData) {
    try {
      setError("");
      setLoading(true);

      await login({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      setError("E-mail ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Stack
      spacing={3}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        label="E-mail"
        fullWidth
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Senha"
        type="password"
        fullWidth
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Entrar"
        )}
      </Button>

      <Button variant="text">
        Esqueci minha senha
      </Button>
    </Stack>
  );
}