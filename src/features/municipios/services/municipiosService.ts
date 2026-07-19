import { supabase } from "../../../services/supabase";
import type { Municipio } from "../types/municipio";

export async function listar(): Promise<Municipio[]> {
  const { data, error } = await supabase
    .from("municipios")
    .select("*")
    .order("nome");

  if (error) {
    throw error;
  }

  return (data ?? []) as Municipio[];
}

export async function buscarPorId(
  id: string
): Promise<Municipio | null> {
  const { data, error } = await supabase
    .from("municipios")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data as Municipio;
}

export async function criar(
  municipio: Omit<Municipio, "id">
): Promise<void> {
  const { error } = await supabase
    .from("municipios")
    .insert(municipio);

  if (error) {
    throw error;
  }
}

export async function editar(
  id: string,
  municipio: Omit<Municipio, "id">
): Promise<void> {
  const { error } = await supabase
    .from("municipios")
    .update(municipio)
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function remover(
  id: string
): Promise<void> {
  const { error } = await supabase
    .from("municipios")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}