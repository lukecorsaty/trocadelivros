# Plano — Troca de Livros (Desafio 1)

## Escopo e decisões

Partir do projeto anexado `kioferta.zip`, preservando-o como base real do código: reutilizar a página única, dependências/servidor Vite, assets, identidade visual existente, menu e módulos sempre que fizer sentido. Adaptar o domínio de promoções para troca de livros, sem substituir a base por um aplicativo genérico. Alinhar os nomes e responsabilidades dos arquivos com a estrutura obrigatória do enunciado, mesmo quando isso exigir mover ou reorganizar arquivos que no ZIP estão dentro de `components/`.

A aplicação será uma SPA estática em HTML, CSS e JavaScript nativos. Sem backend, banco de dados, autenticação real, frameworks JS/CSS ou CSS Grid. A aplicação responderá: **“Onde encontro o livro que preciso, em bom estado e com uma troca que vale a pena?”**

## Arquitetura planejada

- `src/index.html`: shell único com `#navbar`, `#app` e carregamento do módulo principal.
- `src/css/tokens.css`, `base.css`, `style.css`: tokens extraídos/adaptados da base KiOferta, regras globais e imports.
- `src/js/main.js`: roteamento por `hashchange`; separação rota/parâmetro, `split("?")`, `URLSearchParams`, busca da rota com `find`, render de tela e conversão de ícones a cada render.
- `src/js/rotas/rotas.js`: lista única dos módulos e metadados das seis telas.
- `src/js/navbar/navbar.js`: menu gerado a partir da lista de rotas; telas sem item de menu usam `label` vazio.
- `src/js/dadosMockados/`: arrays separados para livros/ofertas, publicadores e usuários. Cada oferta possui `id` e `publicadorId`.
- `src/js/paginas/`: seis módulos de tela, cada um exportando `url`, `label`, `icon` e `pagina`; CSS de cada tela/componentização mantidos em arquivos próprios.
- `docs/relatorio-desafio1.html` e `docs/relatorio-desafio1.pdf`: relatório e versão final em PDF, com campos sinalizados quando dependem de fatos do grupo.
- `public/manus-routes.json`: manifesto da rota de página `/` exigido pelo Preview Webdev; as telas internas usam hashes.

## Telas e fluxo

1. Início: busca em destaque e categorias de livros/disciplinas.
2. Resultados: recebe termo/categoria por hash, combina critérios, usa `filter` e `map(...).join("")`, mostra estado vazio e permite ordenação/filtro.
3. Detalhe: recebe ID no endereço, converte para número e usa `find` para mostrar livro, conservação, proposta de troca, localização e publicador.
4. Publicar: formulário usa campos obrigatórios sem limite mínimo de caracteres; recusa título/autor já existentes nos dados de demonstração com `find`, confirma a simulação e não adiciona nem salva o novo livro. Essa simplificação substitui o `push` que constava no enunciado original.
5. Minha conta: usuário mockado fixo; usa `filter` por ID para listar ofertas e explica estado vazio.
6. Rota inexistente: mensagem e link para voltar à tela inicial.

## Identidade e responsividade

Manter a interface simples, próxima do KiOferta original: paleta pêssego/marrom/vermelho, navegação inferior, títulos e formulários diretos, cartões básicos e pouco ornamento. Adaptar apenas textos e campos ao tema Troca de livros. Manter layout baseado em Flexbox, sem `display: grid`, sem larguras/alturas fixas nos filhos de contêineres flex, cores via tokens e uma cor de destaque por tela. Garantir uso a 360px sem rolagem horizontal.

## Dados e relatório

Criar no mínimo 12 livros/ofertas, 4 publicadores e 4 usuários; todo registro tem ID e ID do publicador. O relatório conterá, na ordem do enunciado: R1 problema e três situações de uso; R2 mapa de equivalência; R3 árvore de arquivos e função de cada arquivo principal; R4 três decisões e uma alternativa descartada; R5 divisão entre três integrantes e números reais dos commits; R6 duas dificuldades reais, causa aparente e causa efetiva; R7 limites assumidos. Incluir capturas das seis telas em 360px, do estado vazio de busca e da rota inexistente.

Corsaty Souza será indicado como integrante conhecido. Nomes dos outros integrantes, commits, divisão real e dificuldades reais serão marcados como campos para o grupo completar, nunca inventados. O README informará o tema, os integrantes/campos e `npm install` / `npm run dev`.

## Entrega

Validar compilação, fluxos principais, parâmetros e layout móvel. Entregar o código-fonte e relatório acessíveis por arquivos no projeto e, quando possível, um ZIP para download. Não criar nem publicar repositório público nem postar a atividade na plataforma da disciplina sem pedido explícito.
