import { useCallback, useEffect, useState } from "react";

import {
  criarUpa,
  editarUpa,
  excluirUpa,
  listarUpas,
} from "../services/upasService";

import type { Upa } from "../types/upa";

export default function useUpas() {
  const [upas, setUpas] = useState<Upa[]>([]);
  const [loading, setLoading] = useState(true);

  const atualizar = useCallback(async () => {
    setLoading(true);

    try {
      const data = await listarUpas();
      setUpas(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    atualizar();
  }, [atualizar]);

  async function criar(
    dados: Omit<Upa, "id">
  ) {
    await criarUpa(dados);
    await atualizar();
  }

  async function editar(
    id: string,
    dados: Omit<Upa, "id">
  ) {
    await editarUpa(id, dados);
    await atualizar();
  }

  async function remover(id: string) {
    await excluirUpa(id);
    await atualizar();
  }

  return {
    upas,
    loading,
    atualizar,
    criar,
    editar,
    remover,
  };
}