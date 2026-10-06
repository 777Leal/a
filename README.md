# Pokédex (Next.js + PokéAPI)

Projeto Next.js (pages router) que lista, busca e mostra detalhes de Pokémon
usando a [PokéAPI](https://pokeapi.co/). As requisições são feitas com `axios`
(`lib/apiClient.js`) e usam apenas **GET**.

## Sobre a PokéAPI

- API pública e gratuita de dados de Pokémon: https://pokeapi.co/
- Não precisa de chave de API nem de variáveis de ambiente.
- Base URL usada: `https://pokeapi.co/api/v2`
- Endpoints usados:
  - `GET /pokemon?limit=20` lista da página inicial
  - `GET /pokemon?limit=1500` lista de nomes usada na busca
  - `GET /pokemon/{id}` detalhes de um Pokémon
- Imagens: repositório de sprites da PokéAPI no GitHub.

## Como instalar e executar

Requisitos: Node.js 18 ou superior.

```
npm install
npm run dev
```

Abra http://localhost:3000

Para gerar a versão de produção:

```
npm run build
npm start
```

## Rotas

- `/` lista de Pokémon (com filtro de ordenação)
- `/search` busca de Pokémon pelo nome (SearchBar + Filters)
- `/movie/[id]` detalhes do Pokémon (ex: `/movie/25`)

## Estrutura

- `pages/` páginas (`index.js`, `search.js`, `movie/[id].js`)
- `components/` ErrorState, Filters, Header, Loader, MovieCard, MovieList, SearchBar
  (MovieCard e MovieList foram mantidos com esses nomes, mas mostram Pokémon)
- `lib/apiClient.js` axios configurado com a baseURL da PokéAPI
- `lib/utils.js` funções auxiliares (id da url, imagem, ordenação)

## Hooks usados

- `useState` e `useEffect` em todas as páginas
- `useMemo`, `useCallback` e `useRef` em `/search`
- `useRouter` e `Link` na navegação

## Deploy na Vercel

1. Envie o projeto para um repositório no GitHub.
2. Na Vercel, clique em "Add New Project" e importe o repositório.
3. Framework: Next.js (detectado automaticamente). Não precisa configurar nada.
4. Clique em Deploy.

Link da Vercel: (colocar aqui depois do deploy)
