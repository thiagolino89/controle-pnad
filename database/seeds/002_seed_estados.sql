BEGIN;

-- ============================================================
-- Seed      : 002_seed_estados.sql
-- Projeto   : Controle PNAD
-- Objetivo  : Inserir os 27 estados brasileiros.
-- ============================================================

INSERT INTO public.estados (
    codigo_ibge,
    sigla,
    nome,
    status_cadastro_id
)
SELECT
    dados.codigo_ibge,
    dados.sigla,
    dados.nome,
    sc.id
FROM (
    VALUES
        (11, 'RO', 'Rondônia'),
        (12, 'AC', 'Acre'),
        (13, 'AM', 'Amazonas'),
        (14, 'RR', 'Roraima'),
        (15, 'PA', 'Pará'),
        (16, 'AP', 'Amapá'),
        (17, 'TO', 'Tocantins'),
        (21, 'MA', 'Maranhão'),
        (22, 'PI', 'Piauí'),
        (23, 'CE', 'Ceará'),
        (24, 'RN', 'Rio Grande do Norte'),
        (25, 'PB', 'Paraíba'),
        (26, 'PE', 'Pernambuco'),
        (27, 'AL', 'Alagoas'),
        (28, 'SE', 'Sergipe'),
        (29, 'BA', 'Bahia'),
        (31, 'MG', 'Minas Gerais'),
        (32, 'ES', 'Espírito Santo'),
        (33, 'RJ', 'Rio de Janeiro'),
        (35, 'SP', 'São Paulo'),
        (41, 'PR', 'Paraná'),
        (42, 'SC', 'Santa Catarina'),
        (43, 'RS', 'Rio Grande do Sul'),
        (50, 'MS', 'Mato Grosso do Sul'),
        (51, 'MT', 'Mato Grosso'),
        (52, 'GO', 'Goiás'),
        (53, 'DF', 'Distrito Federal')
) AS dados(codigo_ibge, sigla, nome)
CROSS JOIN (
    SELECT id
    FROM public.status_cadastro
    WHERE codigo = 'ATIVO'
) sc
ON CONFLICT (codigo_ibge) DO NOTHING;

COMMIT;