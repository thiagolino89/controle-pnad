import { Button } from "@mui/material";

import PageHeader from "../../../components/layout/PageHeader";

interface Props {
  onNovo: () => void;
}

export default function MunicipioToolbar({
  onNovo,
}: Props) {
  return (
    <PageHeader
      title="Municípios"
      action={
        <Button
          variant="contained"
          onClick={onNovo}
        >
          Novo Município
        </Button>
      }
    />
  );
}