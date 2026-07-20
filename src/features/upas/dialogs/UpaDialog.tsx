import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import UpaForm from "../forms/UpaForm";

import type { Upa } from "../types/upa";

interface Props {
  open: boolean;

  upa?: Upa;

  municipios: {
    id: string;
    nome: string;
  }[];

  onClose: () => void;

  onSave: (
    dados: Omit<Upa, "id">
  ) => void | Promise<void>;
}

export default function UpaDialog({
  open,
  upa,
  municipios,
  onClose,
  onSave,
}: Props) {
  const [dados, setDados] =
    useState<Omit<Upa, "id">>({
      codigo: "",
      nome: "",
      municipioId: "",
      municipioNome: "",
      situacao: "Ativa",
    });

  async function salvar() {
    await onSave(dados);
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {upa
          ? "Editar UPA"
          : "Nova UPA"}
      </DialogTitle>

      <DialogContent sx={{ pt: 2 }}>
        <UpaForm
          initialData={upa}
          municipios={municipios}
          onChange={setDados}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={salvar}
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}