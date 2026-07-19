import { useMemo, useState } from "react";

import PageContainer from "../../components/layout/PageContainer";
import CrudLoading from "../../components/crud/CrudLoading";
import CrudEmptyState from "../../components/crud/CrudEmptyState";
import CrudConfirmDialog from "../../components/crud/CrudConfirmDialog";

import { DataTableToolbar } from "../../components/tables";

import MunicipioTable from "./components/MunicipioTable";
import MunicipioDialog from "./dialogs/MunicipioDialog";

import useMunicipios from "./hooks/useMunicipios";

import type { Municipio } from "./types/municipio";

export default function MunicipiosPage() {
  const {
    municipios,
    loading,
    atualizar,
    criar,
    editar,
    remover,
  } = useMunicipios();

  const [pesquisa, setPesquisa] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [municipioSelecionado, setMunicipioSelecionado] =
    useState<Municipio | undefined>();

  const [municipioParaExcluir, setMunicipioParaExcluir] =
    useState<Municipio | null>(null);

  const municipiosFiltrados = useMemo(() => {
    const texto = pesquisa.trim().toLowerCase();

    if (!texto) {
      return municipios;
    }

    return municipios.filter((municipio) => {
      return (
        municipio.codigo.toLowerCase().includes(texto) ||
        municipio.nome.toLowerCase().includes(texto) ||
        municipio.uf.toLowerCase().includes(texto)
      );
    });
  }, [municipios, pesquisa]);

  function novoMunicipio() {
    setMunicipioSelecionado(undefined);
    setDialogOpen(true);
  }

  function editarMunicipio(municipio: Municipio) {
    setMunicipioSelecionado(municipio);
    setDialogOpen(true);
  }

  function excluirMunicipio(municipio: Municipio) {
    setMunicipioParaExcluir(municipio);
    setConfirmOpen(true);
  }

  async function salvar(
    dados: Omit<Municipio, "id">
  ) {
    if (municipioSelecionado) {
      await editar(
        municipioSelecionado.id,
        dados
      );
    } else {
      await criar(dados);
    }

    fecharDialog();
  }

  async function confirmarExclusao() {
    if (!municipioParaExcluir) {
      return;
    }

    await remover(municipioParaExcluir.id);

    setConfirmOpen(false);
    setMunicipioParaExcluir(null);
  }

  function cancelarExclusao() {
    setConfirmOpen(false);
    setMunicipioParaExcluir(null);
  }

  function fecharDialog() {
    setDialogOpen(false);
    setMunicipioSelecionado(undefined);
  }

  if (loading) {
    return <CrudLoading />;
  }

  return (
    <>
      <PageContainer>
        <DataTableToolbar
          pesquisa={pesquisa}
          onPesquisaChange={setPesquisa}
          onNovo={novoMunicipio}
          onAtualizar={atualizar}
          textoBotao="Novo Município"
        />

        {municipiosFiltrados.length === 0 ? (
          <CrudEmptyState
            message="Nenhum município encontrado."
          />
        ) : (
          <MunicipioTable
            municipios={municipiosFiltrados}
            onEdit={editarMunicipio}
            onDelete={excluirMunicipio}
          />
        )}
      </PageContainer>

      <MunicipioDialog
        open={dialogOpen}
        municipio={municipioSelecionado}
        onClose={fecharDialog}
        onSave={salvar}
      />

      <CrudConfirmDialog
        open={confirmOpen}
        title="Excluir município"
        message={`Deseja realmente excluir "${municipioParaExcluir?.nome}"?`}
        onCancel={cancelarExclusao}
        onConfirm={confirmarExclusao}
      />
    </>
  );
}