import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";

interface Props {
  pesquisa: string;
  onPesquisaChange: (valor: string) => void;

  onNovo?: () => void;
  onAtualizar?: () => void;

  textoBotao?: string;
}

export default function DataTableToolbar({
  pesquisa,
  onPesquisaChange,
  onNovo,
  onAtualizar,
  textoBotao = "Novo",
}: Props) {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      spacing={2}
      justifyContent="space-between"
      alignItems={{
        xs: "stretch",
        md: "center",
      }}
      sx={{ mb: 2 }}
    >
      <TextField
        size="small"
        placeholder="Pesquisar..."
        value={pesquisa}
        onChange={(e) =>
          onPesquisaChange(e.target.value)
        }
        slotProps={{
          input: {
            startAdornment: (
              <SearchIcon
                fontSize="small"
                sx={{ mr: 1 }}
              />
            ),
          },
        }}
        sx={{
          minWidth: {
            xs: "100%",
            md: 320,
          },
        }}
      />

      <Box display="flex" gap={1}>
        {onAtualizar && (
          <Tooltip title="Atualizar">
            <IconButton
              onClick={onAtualizar}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        )}

        {onNovo && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onNovo}
          >
            {textoBotao}
          </Button>
        )}
      </Box>
    </Stack>
  );
}