# Sistema de Controle de Frequência

## Configuração do Ambiente

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DATABASE_URL=sua_url_do_banco_neon
```

Você pode encontrar a URL de conexão no painel do Neon em Settings > Connection Details.

### 2. Configurar o Banco de Dados

1. Execute o comando para sincronizar o schema:

```bash
npx prisma db push
```

2. Execute o seed para criar dados iniciais:

```bash
npm run seed
```

### 3. Executar o Projeto

1. Instale as dependências:

```bash
npm install
```

2. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

## Solução de Problemas

Se você encontrar problemas ao executar o projeto, verifique:

1. Se o arquivo `.env` existe e contém a URL do banco de dados correta
2. Se todas as dependências foram instaladas corretamente
3. Se o banco de dados está acessível e as tabelas foram criadas

## Tecnologias Utilizadas

- Next.js 13+ (App Router)
- Prisma (ORM)
- PostgreSQL (via Neon)
- TypeScript
- Tailwind CSS
- shadcn/ui
