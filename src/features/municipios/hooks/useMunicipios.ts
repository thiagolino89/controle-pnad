import { useEffect, useState } from "react";

import {
  listar,
  criar as criarMunicipio,
  editar as editarMunicipio,
  remover as removerMunicipio,
} from "../services/municipiosService";

import type { Municipio } from "../types/municipio";

type MunicipioInput = Omit<Municipio, "id">;

export default function useMunicipios() {
  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  async function atualizar() {
    setLoading(true);
    setErro(null);

    try {
      const dados = await listar();
      setMunicipios(dados);
    } catch (error) {
      const mensagem =
        error instanceof Error
          ? error.message
          : "Erro ao carregar municípios.";

      setErro(mensagem);

      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function criar(dados: MunicipioInput) {
    try {
      setErro(null);

      await criarMunicipio(dados);
      await atualizar();
    } catch (error) {
      const mensagem =
        error instanceof Error
          ? error.message
          : "Erro ao cadastrar município.";

      setErro(mensagem);

      throw error;
    }
  }

  async function editar(
    id: string,
    dados: MunicipioInput
  ) {
    try {
      setErro(null);

      await editarMunicipio(id, dados);
      await atualizar();
    } catch (error) {
      const mensagem =
        error instanceof Error
          ? error.message
          : "Erro ao editar município.";

      setErro(mensagem);

      throw error;
    }
  }

  async function remover(id: string) {
    try {
      setErro(null);

      await removerMunicipio(id);
      await atualizar();
    } catch (error) {
      const mensagem =
        error instanceof Error
          ? error.message
          : "Erro ao excluir município.";

      setErro(mensagem);

      throw error;
    }
  }

  useEffect(() => {
    atualizar().catch(() => {
      // erro já tratado no estado "erro"
    });
  }, []);

  return {
    municipios,
    loading,
    erro,
    atualizar,
    criar,
    editar,
    remover,
  };
}