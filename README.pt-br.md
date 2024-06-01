# devstore

Este documento serve como um guia abrangente para o projeto Devstore, desenvolvido para aplicar conceitos avançados de desenvolvimento web com foco em Next.js e React.

## Benefícios de Usar Componentes do Servidor com Next.js e App Router

Usar Componentes do Servidor com Next.js e o App Router oferece várias vantagens significativas:

1. **Redução do JavaScript no Lado do Cliente**: Os Componentes do Servidor permitem que mais lógica seja processada no servidor, resultando em menos JavaScript sendo enviado para o cliente. Isso melhora o tempo de carregamento inicial e o desempenho geral da aplicação, proporcionando uma melhor experiência ao usuário.

2. **Renderização Mais Rápida**: Com mais processamento acontecendo no servidor, as páginas podem ser geradas e enviadas para o cliente mais rapidamente. Isso é especialmente benéfico para usuários com conexões de internet mais lentas ou dispositivos menos potentes.

3. **Melhora na Segurança**: Processar mais lógica no servidor reduz a exposição de código e dados sensíveis no cliente, aumentando a segurança da aplicação.

4. **SEO Aprimorado**: A renderização no servidor melhora a indexação das páginas pelos motores de busca, resultando em melhor SEO e visibilidade da aplicação.

5. **Gestão de Estado Simplificada**: Componentes do Servidor podem simplificar a gestão de estado, pois não há necessidade de sincronizar o estado entre o cliente e o servidor. Isso torna o desenvolvimento mais eficiente e o código mais fácil de manter.

6. **Carregamento Progressivo**: A capacidade de carregar dados progressivamente melhora a experiência do usuário, pois partes da página podem ser exibidas enquanto outras ainda estão sendo carregadas.

## Foco do Projeto

Este projeto visa aplicar conceitos avançados de desenvolvimento web construindo uma aplicação simples que aborda os seguintes tópicos:

- **Rotas e Layouts**: Implementação de rotas e layouts usando Next.js.
- **Arquitetura Next.js com App Router**: Uso do App Router para gerenciar a navegação.
- **Componentes do Servidor React**: Uso de componentes do servidor React.
- **Busca de Dados em Componentes**: Busca de dados diretamente em componentes.
- **Carregamento e Streaming SSR**: Implementação de carregamento e streaming na renderização do lado do servidor.
- **Abstração de Componentes do Cliente**: Separação clara entre componentes do cliente e do servidor.
- **Limites e Composição do Cliente**: Uso de limites do cliente para gerenciar componentes.
- **Árvore de Componentes no Next.js**: Estruturação da árvore de componentes.
- **API Suspense no React**: Utilização da API Suspense no React.
- **Teste E2E com Cypress**: Teste end-to-end usando Cypress.
- **Geração Estática na Build**: Construção de páginas estáticas durante o processo de build.
- **Cache e Memoização**: Implementação de técnicas de cache e memoização.
- **Metadados de Páginas no Next.js (SEO)**: Configuração de metadados para otimização de motores de busca.
- **Contexto do Carrinho**: Gerenciamento do estado do carrinho de compras usando Context API.
- **API: Pesquisa de Produtos**: Implementação de APIs para pesquisa de produtos.
- **Configuração de Favicon**: Personalização do favicon da aplicação.
- **Ajustes de Deploy da Aplicação**: Configurações específicas para deployment.
- **Variáveis de Ambiente: Cliente e Servidor**: Gerenciamento de variáveis de ambiente para cliente e servidor.
- **Workflow de CI com Cypress**: Integração contínua usando Cypress para testes E2E.

## Preview

![](./public/devstore.gif)

## Funcionalidades da Aplicação

Devstore é uma aplicação com um front-end similar a uma plataforma de e-commerce. Ela explora certos fluxos de trabalho para listar produtos em destaque, filtrar produtos e adicionar produtos ao carrinho. A aplicação possui as seguintes funcionalidades:

### Página Inicial

- **Listagem de Produtos em Destaque**: A página inicial exibe uma seleção de produtos em destaque, facilitando o acesso dos usuários a itens populares ou promocionais.

### Barra de Pesquisa (Header)

- **Componente de Input de Pesquisa**: No cabeçalho, há um componente de input onde o usuário pode digitar o nome do produto que deseja encontrar.
- **Redirecionamento para Página de Resultados de Pesquisa**: Ao enviar o formulário de pesquisa, o usuário é redirecionado para uma página que lista apenas os produtos correspondentes ao termo de pesquisa. Isso é feito usando o roteamento do Next.js para atualizar a URL e carregar dinamicamente os resultados da pesquisa.

### Página de Detalhes do Produto

- **Exibição de Detalhes do Produto**: Ao clicar em um produto na página inicial ou nos resultados da pesquisa, o usuário é redirecionado para uma página de detalhes do produto. Esta página exibe informações detalhadas como título, descrição, preço e opções de tamanho.
- **Geração de Imagem OpenGraph**: Para cada produto, uma imagem específica é gerada para ser usada no OpenGraph, melhorando o compartilhamento em redes sociais. Esta imagem é renderizada dinamicamente com base nos dados do produto, garantindo que cada link compartilhado tenha uma visualização rica e específica.

### Adicionar ao Carrinho

- **Componente Adicionar ao Carrinho**: Na página de detalhes do produto, ao clicar no botão "Adicionar ao Carrinho", o produto é adicionado ao carrinho de compras, e a contagem de itens no carrinho é atualizada em tempo real.
- **Widget do Carrinho no Cabeçalho**: No cabeçalho, há um widget que exibe o número de itens no carrinho, permitindo que o usuário veja rapidamente quantos produtos foram adicionados.

### Estado Global do Carrinho

- **Gerenciamento de Estado do Carrinho**: O estado do carrinho de compras é gerenciado usando a React Context API, permitindo que diferentes partes da aplicação acessem e atualizem o carrinho de forma consistente e eficiente.

Essas funcionalidades demonstram como a aplicação Devstore utiliza Next.js e React para criar uma experiência de usuário suave e interativa, com roteamento dinâmico, renderização de dados no lado do servidor e gerenciamento eficiente de estado.

## Estrutura de Páginas e Rotas

Baseado na estrutura de pastas fornecida:

```
app
├── (store)
│   ├── (home)
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   └── product
│   ├── layout.tsx
│   └── search
│       ├── loading.tsx
│       └── page.tsx
├── api
│   └── products
│       ├── [slug]
│       ├── data.json
│       ├── featured
│       ├── route.ts
│       └── search
├── globals.css
├── icon.png
└── layout.tsx
```

#### Explicação das Pastas e Arquivos

- **app**: Pasta raiz da aplicação.

- **(store)**: Contém o layout principal da loja. Esta pasta agrupa todas as rotas e componentes relacionados à loja sem impactar a URL.

  - **layout.tsx**: Define o layout principal para a seção da loja. Este arquivo é responsável por envolver e fornecer uma estrutura consistente para todas as rotas dentro de `(store)`.

- **(home)**: Representa a página inicial da loja.

  - **product**: Contém a lógica e os componentes relacionados aos produtos.
    - **[slug]**: Pasta dinâmica que lida com rotas dinâmicas para diferentes produtos. O `[slug]` permite URLs dinâmicas como `/product/moletom-never-stop-learning`.
      - **opengraph-image.tsx**: Gera imagens dinâmicas para OpenGraph, melhorando o SEO e a apresentação nas redes sociais.
      - **page.tsx**: Arquivo principal para renderização da página de detalhes do produto.
  - **loading.tsx**: Exibe um estado de carregamento enquanto os dados da página inicial estão sendo buscados.
  - **page.tsx**: Renderiza o conteúdo da página inicial (`/`).

- **search**: Contém a lógica e os componentes relacionados à funcionalidade de pesquisa.
  - **loading.tsx**: Exibe um estado de carregamento enquanto os resultados da pesquisa estão sendo buscados.
  - **page.tsx**: Renderiza a página de resultados da pesquisa, exibindo produtos que correspondem ao termo de pesquisa.

Esta estrutura aproveita as capacidades do Next.js com App Router, garantindo que a aplicação seja modular, escalável e fácil de navegar.

## Tecnologias Utilizadas

- **Next.js**: Framework para React que permite a renderização no lado do servidor para aplicações web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Cypress**: Ferramenta de teste end-to-end.
- **TailwindCSS**: Framework CSS utilitário para estilização rápida.

## Como Executar o Projeto

1. Clone este repositório:

```bash
git clone https://github.com/mateussp97/devstore.git
```

2. Navegue até o diretório do projeto:

```bash
cd devstore
```

3. Crie um arquivo `.env.local` na raiz do projeto e adicione os seguintes valores:

```bash
NEXT_PUBLIC_API_BASE_URL='https://ignite-devstore-api.vercel.app'
APP_URL='http://localhost:3000'
```

4. Instale as dependências:

```bash
pnpm install
```

5. Inicie o desenvolvimento:

```bash
pnpm run dev
```

6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

7. (Opcional) Executando Testes E2E:

```bash
npx cypress run
```
