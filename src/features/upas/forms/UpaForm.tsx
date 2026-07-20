import { useEffect, useState } from "react";

import { Grid, MenuItem, TextField } from "@mui/material";

import type { Upa } from "../types/upa";

interface Props {
  initialData?: Upa;

  municipios: {
    id: string;
    nome: string;
  }[];

  onChange: (dados: Omit<Upa, "id">) => void;
}

export default function UpaForm({
  initialData,
  municipios,
  onChange,
}: Props) {
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [municipioId, setMunicipioId] = useState("");
  const [situacao, setSituacao] = useState("Ativa");

  useEffect(() => {
    if (initialData) {
      setCodigo(initialData.codigo);
      setNome(initialData.nome);
      setMunicipioId(initialData.municipioId);
      setSituacao(initialData.situacao);
    } else {
      setCodigo("");
      setNome("");
      setMunicipioId("");
      setSituacao("Ativa");
    }
  }, [initialData]);

  useEffect(() => {
    const municipio = municipios.find(
      (m) => m.id === municipioId
    );

    onChange({
      codigo,
      nome,
      municipioId,
      municipioNome: municipio?.nome ?? "",
      situacao,
    });
  }, [
    codigo,
    nome,
    municipioId,
    situacao,
    municipios,
    onChange,
  ]);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="Código"
          value={codigo}
          onChange={(e) =>
            setCodigo(e.target.value)
          }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 9 }}>
        <TextField
          fullWidth
          label="Nome"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <TextField
          select
          fullWidth
          label="Município"
          value={municipioId}
          onChange={(e) =>
            setMunicipioId(e.target.value)
          }
        >
          {municipios.map((municipio) => (
            <MenuItem
              key={municipio.id}
              value={municipio.id}
            >
              {municipio.nome}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          select
          fullWidth
          label="Situação"
          value={situacao}
          onChange={(e) =>
            setSituacao(e.target.value)
          }
        >
          <MenuItem value="Ativa">
            Ativa
          </MenuItem>

          <MenuItem value="Inativa">
            Inativa
          </MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
}