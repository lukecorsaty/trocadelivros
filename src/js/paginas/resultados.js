import "../../css/paginas/resultados.css";
import livros from "../dadosMockados/livros.js";
import publicadores from "../dadosMockados/publicadores.js";
import { cartaoLivro } from "../componentes/cartaoLivro.js";
import { escaparHTML, normalizarTexto } from "../utilidades.js";

const resultados = (app, params = new URLSearchParams()) => {
  const termo = params.get("q") ?? "";
  const categoria = params.get("categoria") ?? "";
  const categorias = [...new Set(livros.map((livro) => livro.categoria))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const termoNormalizado = normalizarTexto(termo);

  const encontrados = livros.filter((livro) => {
    const textoLivro = normalizarTexto(`${livro.titulo} ${livro.autor} ${livro.disciplina} ${livro.descricao} ${livro.proposta}`);
    const correspondeTexto = !termoNormalizado || textoLivro.includes(termoNormalizado);
    const correspondeCategoria = !categoria || normalizarTexto(livro.categoria) === normalizarTexto(categoria);
    return correspondeTexto && correspondeCategoria;
  });

  app.innerHTML = `
    <section class="screen" aria-labelledby="resultados-titulo">
      <div class="results-heading">
        <div>
          <h1 class="page-title" id="resultados-titulo">Resultados</h1>
          <p class="results-summary">Filtre por palavra ou escolha uma categoria.</p>
        </div>
        <a class="button button-secondary" href="#publicar">Publicar livro</a>
      </div>
      <form class="results-filters" id="form-filtros" role="search">
        <div class="form-field">
          <label for="filtro-termo">Buscar</label>
          <input class="filter-control" id="filtro-termo" name="q" type="search" value="${escaparHTML(termo)}" placeholder="Título, autor ou matéria" />
        </div>
        <div class="form-field">
          <label for="filtro-categoria">Categoria</label>
          <select class="filter-control" id="filtro-categoria" name="categoria">
            <option value="">Todas</option>
            ${categorias.map((item) => `<option value="${escaparHTML(item)}"${normalizarTexto(item) === normalizarTexto(categoria) ? " selected" : ""}>${escaparHTML(item)}</option>`).join("")}
          </select>
        </div>
        <button class="button" type="submit">Filtrar</button>
      </form>
      <div class="results-list-heading">
        <h2 class="section-title">${encontrados.length} ${encontrados.length === 1 ? "livro encontrado" : "livros encontrados"}</h2>
        ${categoria ? `<p>Categoria: <strong>${escaparHTML(categoria)}</strong></p>` : ""}
      </div>
      ${encontrados.length === 0 ? `
        <div class="empty-state" role="status">
          <h2>Nenhum livro encontrado</h2>
          <p>Tente outra palavra ou escolha “Todas” as categorias.</p>
          <a class="button button-secondary" href="#resultados">Limpar filtros</a>
        </div>
      ` : `
        <div class="book-list">
          ${encontrados.map((livro) => cartaoLivro(livro, publicadores.find((pessoa) => pessoa.id === livro.publicadorId))).join("")}
        </div>
      `}
    </section>
  `;

  app.querySelector("#form-filtros").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    const consulta = new URLSearchParams();
    const valorBusca = dados.get("q").toString().trim();
    const valorCategoria = dados.get("categoria").toString();
    if (valorBusca) consulta.set("q", valorBusca);
    if (valorCategoria) consulta.set("categoria", valorCategoria);
    window.location.hash = `#resultados?${consulta.toString()}`;
  });
};

export default {
  url: "#resultados",
  label: "Buscar",
  icon: "search",
  pagina: resultados
};
