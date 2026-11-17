# Entregas

## 1. Adaptar o projeto-base KiOferta à estrutura exigida
- Usar o conteúdo de `kioferta.zip` como base real; reaproveitar o shell de página única, Vite, identidade visual, navegação, assets e módulos pertinentes, e adaptar o produto para Troca de livros (não apenas trocar palavras).
- Organizar `src/` com `index.html`; `css/tokens.css`, `base.css` e `style.css`; `js/main.js`; `js/rotas/rotas.js`; `js/navbar/navbar.js`; `js/dadosMockados/`; e `js/paginas/`, mantendo CSS próprio por tela/componente e imports dos estilos.
- Cada tela deve ser módulo que exporta objeto com `url`, `label`, `icon` e `pagina` e entra em `rotas.js`; tela fora do menu usa `label` vazio.
- O menu deve ser gerado a partir da lista de rotas, sem itens escritos manualmente no HTML. O roteamento deve usar `hashchange`, `find` na lista de rotas, separar rota/parâmetro com `split("?")` e `URLSearchParams`, passar parâmetros à tela e permitir F5 em URLs com parâmetros. Nenhuma tela deve chamar a função de outra.
- Se houver biblioteca de ícones, executar a conversão após cada render.

## 2. Entregar seis telas funcionais e fluxos por endereço
- Início: campo de busca dominante e categorias do tema como caminho secundário; o termo digitado chega à tela seguinte pelo endereço.
- Resultados: lista filtrada por categoria ou termo que veio no endereço; incluir estado vazio; usar `filter`, `map` com `join` e condição `.length === 0`.
- Detalhe: abrir registro por ID vindo do endereço, convertê-lo com `Number` e usar `find`; exibir dados para escolha e publicador.
- Publicar: formulário usa validação `required` do HTML sem mínimo/máximo de caracteres; usa `find` para recusar correspondência com livro de demonstração; só confirma a simulação, não usa `push` e não salva a publicação. Isso diverge do critério original que pedia `push`.
- Minha conta: usuário fixo dos dados mockados; usar `filter` pelo ID do usuário e mostrar estado vazio para quem não publicou.
- Rota inexistente: endereço sem correspondência mostra tela própria e uma saída para Início.

## 3. Incluir dados mockados e operações de busca
- Incluir no mínimo 12 registros do negócio, 4 publicadores e 4 usuários.
- Todo registro possui `id` e guarda o ID de quem o publicou.
- Busca por texto/categoria, detalhe por ID e consulta à conta operam sobre os arrays mockados. A publicação aceita os campos obrigatórios, verifica duplicidade apenas contra os livros de demonstração e não salva nem adiciona o novo registro; não há backend, banco de dados ou login real.

## 4. Cumprir o layout e os estilos da atividade
- Todo alinhamento usa Flexbox; nenhuma tela usa `display: grid`.
- Nenhum filho de contêiner Flex possui `width` ou `height` fixo; quando tamanho importar, usar `flex: 0 0 <medida>`.
- Cores são definidas em `tokens.css`, sem cores literais nas regras CSS; usar uma cor de destaque por tela.
- Funcionar a 360px de largura sem rolagem horizontal.
- Preservar como base a linguagem visual do KiOferta anexado, adaptando-a ao tema.

## 5. Documentar execução e proveniência
- Criar `README.md` com tema, integrantes e instruções `npm install` e `npm run dev`.
- Informar Corsaty Souza como integrante conhecido e deixar os demais nomes como campos para completar.
- Não alegar que commits, tarefas, dificuldades ou interações reais ocorreram se não forem fornecidos pelo grupo.

## 6. Produzir relatório PDF e capturas
- Entregar relatório em PDF de 3 a 5 páginas, em `docs/`, na ordem: R1 problema e quem usa, com pergunta e três situações de uso; R2 mapa de equivalência; R3 árvore de arquivos e papel dos principais; R4 três decisões com motivos em 2–3 linhas cada e uma alternativa descartada; R5 tabela de divisão do grupo de três com números dos commits; R6 duas dificuldades reais (erro, causa imaginada e causa verdadeira); R7 o que ficou de fora e por quê.
- Incluir seis telas capturadas em 360px, mais estado vazio da busca e rota inexistente.
- Identificar como campos a completar: outros integrantes, divisão real/tabela e commits, além das duas dificuldades reais. Não fabricar esses fatos.

## 7. Verificar e empacotar a entrega
- Confirmar navegação pelas seis telas, endereços com parâmetros e F5, ícones após navegação, busca vazia, layout 360px e ausência de overflow horizontal/uso de Grid/medidas fixas proibidas nos filhos Flex.
- Confirmar `npm install` e `npm run dev` conforme o README, e gerar um ZIP do projeto com o PDF em `docs/`.
- Não criar/publicar repositório público ou enviar ao ambiente da disciplina sem autorização explícita.
