import { useEffect, useMemo, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import MunicipioForm from "../forms/MunicipioForm";
import type { Municipio } from "../types/municipio";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (
    municipio: Omit<Municipio, "id">
  ) => Promise<void>;
  municipio?: Municipio;
}

const municipioInicial: Omit<Municipio, "id"> = {
  codigo: "",
  nome: "",
  uf: "",
  upas: 0,
  situacao: "Ativo",
};

export default function MunicipioDialog({
  open,
  onClose,
  onSave,
  municipio,
}: Props) {
  const [dados, setDados] =
    useState(municipioInicial);

  const [salvando, setSalvando] =
    useState(false);

  useEffect(() => {
    if (municipio) {
      const { id, ...restante } = municipio;
      setDados(restante);
    } else {
      setDados(municipioInicial);
    }
  }, [municipio, open]);

  function alterarCampo(
    campo: keyof Omit<Municipio, "id">,
    valor: string | number
  ) {
    setDados((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  }

  const formularioValido = useMemo(() => {
    return (
      /^\d{7}$/.test(dados.codigo) &&
      dados.nome.trim().length >= 3 &&
      /^[A-Z]{2}$/.test(dados.uf) &&
      dados.upas >= 0 &&
      dados.situacao.trim() !== ""
    );
  }, [dados]);

  async function salvar() {
    if (!formularioValido) {
      return;
    }

    try {
      setSalvando(true);

      await onSave(dados);
    } finally {
      setSalvando(false);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={
        salvando ? undefined : onClose
      }
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {municipio
          ? "Editar Município"
          : "Novo Município"}
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        <MunicipioForm
          municipio={dados}
          onChange={alterarCampo}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          disabled={salvando}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={salvar}
          disabled={
            !formularioValido ||
            salvando
          }
        >
          {salvando
            ? "Salvando..."
            : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}