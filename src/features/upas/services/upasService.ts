import { supabase } from "../../../services/supabase";

import type { Upa } from "../types/upa";

const TABLE = "upas";

export async function listarUpas(): Promise<Upa[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("nome");

  if (error) throw error;

  return (data ?? []) as Upa[];
}

export async function criarUpa(
  upa: Omit<Upa, "id">
) {
  const { error } = await supabase
    .from(TABLE)
    .insert(upa);

  if (error) throw error;
}

export async function editarUpa(
  id: string,
  upa: Omit<Upa, "id">
) {
  const { error } = await supabase
    .from(TABLE)
    .update(upa)
    .eq("id", id);

  if (error) throw error;
}

export async function excluirUpa(
  id: string
) {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id);

  if (error) throw error;
}