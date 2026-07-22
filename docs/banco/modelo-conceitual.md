# Modelo Conceitual do Banco de Dados

**Projeto:** Controle PNAD  
**Versão:** 0.2  
**Status:** Em elaboração

---

# Objetivo

Este documento descreve o modelo conceitual do banco de dados do Controle PNAD.

Seu objetivo é definir as principais entidades do sistema, seus relacionamentos e as regras de negócio que servirão de base para a implementação física no PostgreSQL (Supabase).

Este documento representa o domínio de negócio, independentemente da tecnologia utilizada.

---

# Princípios

O modelo conceitual segue os seguintes princípios:

- Separação entre domínio territorial e operação da pesquisa.
- Preservação do histórico das informações.
- Normalização dos dados.
- Utilização de identificadores oficiais do IBGE sempre que possível.
- Escalabilidade para suportar múltiplas agências.
- Independência entre documentação e implementação.

---

# Domínios do Sistema

O Controle PNAD está dividido nos seguintes domínios.

## 1. Territorial

Responsável pela estrutura geográfica da pesquisa.

Entidades:

- Estado
- Agência
- Município
- UPA
- Setor
- Domicílio

---

## 2. Operacional

Responsável pela execução da pesquisa.

Entidades previstas:

- Entrevista
- Visita
- Agendamento
- Distribuição

---

## 3. Administrativo

Responsável pela administração do sistema.

Entidades previstas:

- Usuário
- Perfil
- Permissões
- Configurações

---

## 4. Gerencial

Responsável por indicadores e acompanhamento.

Entidades previstas:

- Dashboard
- Relatórios
- Indicadores

---

# Modelo Conceitual Inicial

```
Estado
   │
   ├──────────────┐
   │              │
Município      Agência
   │              │
   └───────┬──────┘
           │
 Agência × Município
           │
          UPA
           │
        Setor
           │
      Domicílio
```

---

# Entidades

## Estado

Representa uma Unidade da Federação.

Exemplos:

- Minas Gerais
- São Paulo
- Paraná

---

## Agência

Representa uma agência do IBGE responsável pela operação da pesquisa.

Exemplo:

- Agência Campo Belo

Uma agência poderá administrar diversos municípios.

---

## Município

Representa um município brasileiro.

Todo município pertence a exatamente um estado.

A responsabilidade administrativa poderá mudar de agência ao longo do tempo.

---

## Agência × Município

Representa o histórico de responsabilidade de uma agência sobre determinado município.

Permite registrar alterações futuras sem perda do histórico.

---

## UPA

Unidade Primária de Amostragem.

Cada UPA pertence a um município.

---

## Setor

Representa um setor censitário pertencente a uma UPA.

---

## Domicílio

Representa um domicílio pesquisado pela PNAD.

Todo domicílio pertence a exatamente um setor.

---

# Regras de Negócio

RN-001

Todo município pertence a exatamente um estado.

---

RN-002

Uma agência pode administrar diversos municípios.

---

RN-003

Um município pode mudar de agência ao longo do tempo.

---

RN-004

A mudança de agência não deve apagar o histórico anterior.

---

RN-005

Toda UPA pertence a um município.

---

RN-006

Todo setor pertence a uma UPA.

---

RN-007

Todo domicílio pertence a um setor.

---

# Próximas Etapas

Após a aprovação deste documento serão implementadas as primeiras migrações do banco de dados.

A sequência prevista é:

1. Status de Registro
2. Estados
3. Agências
4. Municípios
5. Agência × Município
6. UPA
7. Setores
8. Domicílios

---

# Histórico

| Versão | Data | Descrição |
|--------|------|-----------|
| 0.2 | Julho/2026 | Primeira versão do modelo conceitual |