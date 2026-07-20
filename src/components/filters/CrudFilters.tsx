import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

interface Props {
  value: string;

  label?: string;

  placeholder?: string;

  onChange: (
    value: string
  ) => void;
}

export default function CrudFilters({
  value,
  label = "Pesquisar",
  placeholder = "Digite para pesquisar...",
  onChange,
}: Props) {
  return (
    <Stack
      direction="row"
      spacing={2}
      mb={2}
    >
      <TextField
        fullWidth
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />
    </Stack>
  );
}