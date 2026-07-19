import {
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

import type { Municipio } from "../types/municipio";

interface Props {
  municipio: Omit<Municipio, "id">;
  onChange: (
    campo: keyof Omit<Municipio, "id">,
    valor: string | number
  ) => void;
}

export default function MunicipioForm({
  municipio,
  onChange,
}: Props) {
  const codigoInvalido =
    municipio.codigo.trim() === "" ||
    !/^\d{7}$/.test(municipio.codigo);

  const nomeInvalido =
    municipio.nome.trim().length < 3;

  const ufInvalida =
    !/^[A-Za-z]{2}$/.test(municipio.uf);

  const upasInvalida =
    municipio.upas < 0;

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Código IBGE"
          value={municipio.codigo}
          error={codigoInvalido}
          helperText={
            codigoInvalido
              ? "Informe um código IBGE com 7 dígitos."
              : ""
          }
          onChange={(e) =>
            onChange(
              "codigo",
              e.target.value.replace(/\D/g, "")
            )
          }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <TextField
          fullWidth
          label="Município"
          value={municipio.nome}
          error={nomeInvalido}
          helperText={
            nomeInvalido
              ? "Informe o nome do município."
              : ""
          }
          onChange={(e) =>
            onChange("nome", e.target.value)
          }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="UF"
          inputProps={{
            maxLength: 2,
          }}
          value={municipio.uf}
          error={ufInvalida}
          helperText={
            ufInvalida
              ? "Informe a UF."
              : ""
          }
          onChange={(e) =>
            onChange(
              "uf",
              e.target.value
                .toUpperCase()
                .replace(/[^A-Z]/g, "")
            )
          }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          type="number"
          label="UPAs"
          value={municipio.upas}
          error={upasInvalida}
          helperText={
            upasInvalida
              ? "UPAs não pode ser negativa."
              : ""
          }
          onChange={(e) =>
            onChange(
              "upas",
              Number(e.target.value)
            )
          }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Situação"
          value={municipio.situacao}
          onChange={(e) =>
            onChange(
              "situacao",
              e.target.value
            )
          }
        >
          <MenuItem value="Ativo">
            Ativo
          </MenuItem>

          <MenuItem value="Inativo">
            Inativo
          </MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
}