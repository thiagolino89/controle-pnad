BEGIN;

-- ============================================================
-- Seed      : 001_seed_status_cadastro.sql
-- Projeto   : Controle PNAD
-- Objetivo  : Inserir os status iniciais do sistema.
-- ============================================================

INSERT INTO public.status_cadastro (
    codigo,
    descricao
)
VALUES
    ('ATIVO', 'Ativo'),
    ('INATIVO', 'Inativo')
ON CONFLICT (codigo) DO NOTHING;

COMMIT;