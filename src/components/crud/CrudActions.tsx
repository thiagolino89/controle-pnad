import {
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

export default function CrudActions({
  onEdit,
  onDelete,
}: Props) {
  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <Tooltip title="Editar">
        <IconButton
          color="primary"
          onClick={onEdit}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Excluir">
        <IconButton
          color="error"
          onClick={onDelete}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}