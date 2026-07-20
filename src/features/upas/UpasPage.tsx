import { useEffect, useMemo, useState } from "react";

import PageContainer from "../../components/layout/PageContainer";

import CrudLoading from "../../components/crud/CrudLoading";
import CrudEmptyState from "../../components/crud/CrudEmptyState";
import CrudConfirmDialog from "../../components/crud/CrudConfirmDialog";

import {
  DataTableToolbar,
  DataTablePagination,
} from "../../components/tables";

import UpaTable from "./components/UpaTable";
import UpaDialog from "./dialogs/UpaDialog";

import useUpas from "./hooks/useUpas";
import useMunicipios from "../municipios/hooks/useMunicipios";

import type { Upa } from "./types/upa";

export default function UpasPage() {
  const {
    upas,
    loading,
    atualizar,
    criar,
    editar,
    remover,
  } = useUpas();

  const { municipios } = useMunicipios();

  console.log("Municípios carregados:", municipios);

  const [pesquisa, setPesquisa] = useState("");

  const [pagina, setPagina] = useState(0);

  const [linhasPorPagina, setLinhasPorPagina] =
    useState(10);

  const [dialogOpen, setDialogOpen] = useState(false);

  const [confirmOpen, setConfirmOpen] =
    useState(false);

  const [upaSelecionada, setUpaSelecionada] =
    useState<Upa>();

  const [upaExcluir, setUpaExcluir] =
    useState<Upa | null>(null);

  const upasFiltradas = useMemo(() => {
    const texto = pesquisa.toLowerCase().trim();

    if (!texto) return upas;

    return upas.filter(
      (upa) =>
        upa.codigo.toLowerCase().includes(texto) ||
        upa.nome.toLowerCase().includes(texto) ||
        upa.municipioNome
          .toLowerCase()
          .includes(texto)
    );
  }, [upas, pesquisa]);

  useEffect(() => {
    setPagina(0);
  }, [pesquisa]);

  const upasPaginadas = useMemo(() => {
    const inicio = pagina * linhasPorPagina;

    return upasFiltradas.slice(
      inicio,
      inicio + linhasPorPagina
    );
  }, [
    upasFiltradas,
    pagina,
    linhasPorPagina,
  ]);

  function novaUpa() {
    setUpaSelecionada(undefined);
    setDialogOpen(true);
  }

  function editarUpa(upa: Upa) {
    setUpaSelecionada(upa);
    setDialogOpen(true);
  }

  function excluirUpa(upa: Upa) {
    setUpaExcluir(upa);
    setConfirmOpen(true);
  }

  async function salvar(
    dados: Omit<Upa, "id">
  ) {
    if (upaSelecionada) {
      await editar(
        upaSelecionada.id,
        dados
      );
    } else {
      await criar(dados);
    }

    fecharDialog();
  }

  async function confirmarExclusao() {
    if (!upaExcluir) return;

    await remover(upaExcluir.id);

    cancelarExclusao();
  }

  function cancelarExclusao() {
    setConfirmOpen(false);
    setUpaExcluir(null);
  }

  function fecharDialog() {
    setDialogOpen(false);
    setUpaSelecionada(undefined);
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
          onNovo={novaUpa}
          onAtualizar={atualizar}
          textoBotao="Nova UPA"
        />

        {upasFiltradas.length === 0 ? (
          <CrudEmptyState message="Nenhuma UPA encontrada." />
        ) : (
          <>
            <UpaTable
              upas={upasPaginadas}
              onEdit={editarUpa}
              onDelete={excluirUpa}
            />

            <DataTablePagination
              total={upasFiltradas.length}
              pagina={pagina}
              linhasPorPagina={linhasPorPagina}
              onPaginaChange={(_, page) =>
                setPagina(page)
              }
              onLinhasPorPaginaChange={(e) => {
                setLinhasPorPagina(
                  Number(e.target.value)
                );
                setPagina(0);
              }}
            />
          </>
        )}
      </PageContainer>

      <UpaDialog
        open={dialogOpen}
        upa={upaSelecionada}
        municipios={municipios.map((m) => ({
          id: m.id,
          nome: m.nome,
        }))}
        onClose={fecharDialog}
        onSave={salvar}
      />

      <CrudConfirmDialog
        open={confirmOpen}
        title="Excluir UPA"
        message={`Deseja realmente excluir "${upaExcluir?.nome}"?`}
        onCancel={cancelarExclusao}
        onConfirm={confirmarExclusao}
      />
    </>
  );
}