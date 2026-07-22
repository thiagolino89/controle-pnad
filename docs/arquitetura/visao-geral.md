# Controle PNAD

## Visão Geral da Arquitetura

**Versão:** 0.2  
**Status:** Em desenvolvimento

---

# Objetivo

O Controle PNAD é um sistema web desenvolvido para apoiar a operação da Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD Contínua), permitindo o gerenciamento das atividades de campo de forma organizada, segura e escalável.

O sistema foi concebido inicialmente para utilização na Agência do IBGE de Campo Belo/MG, mas sua arquitetura foi planejada para permitir expansão para outras agências no futuro.

---

# Objetivos do Sistema

- Centralizar informações da operação da PNAD.
- Organizar o acompanhamento das coletas.
- Facilitar o gerenciamento de municípios, UPAs, setores e domicílios.
- Registrar visitas e entrevistas.
- Disponibilizar indicadores e relatórios.
- Garantir rastreabilidade das informações.
- Facilitar futuras integrações com bases oficiais.

---

# Arquitetura

O projeto utiliza uma arquitetura em camadas.

```
Interface (React)

↓

Hooks

↓

Services

↓

Supabase

↓

PostgreSQL
```

Cada camada possui uma responsabilidade específica.

---

# Tecnologias

## Front-end

- React
- TypeScript
- Vite
- Material UI

## Backend

- Supabase

## Banco de Dados

- PostgreSQL

---

# Estrutura do Projeto

```
src/
    app/
    assets/
    components/
    features/
    hooks/
    routes/
    services/
    types/

database/
    migrations/
    schema/
    seeds/

docs/
    arquitetura/
    banco/
    adr/
    sprints/
    manuais/
```

---

# Organização das Funcionalidades

O sistema é organizado por módulos (features).

Exemplos:

- Autenticação
- Dashboard
- Municípios
- UPAs
- Setores
- Usuários
- Relatórios

Novos módulos seguirão o mesmo padrão de organização.

---

# Princípios Arquiteturais

- Arquitetura antes da implementação.
- Código organizado por domínio.
- Separação clara de responsabilidades.
- Componentes reutilizáveis.
- Banco de dados normalizado.
- Documentação mantida junto ao código.
- Evolução incremental por sprints.

---

# Controle de Versão

Todo o código-fonte é versionado utilizando Git e GitHub.

Cada funcionalidade é desenvolvida de forma incremental e documentada.

---

# Documentação

Toda decisão importante do projeto deverá possuir documentação correspondente.

Os principais documentos são:

- Visão Geral da Arquitetura
- Modelo Conceitual do Banco
- Architecture Decision Records (ADR)
- Documentação das Sprints
- Manuais

---

# Próximos Passos

Após a conclusão deste documento, a próxima etapa será a definição oficial do modelo conceitual do banco de dados, seguida da implementação das primeiras migrações SQL.