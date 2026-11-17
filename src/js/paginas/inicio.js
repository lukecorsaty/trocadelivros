import "../../css/paginas/inicio.css";
import livros from "../dadosMockados/livros.js";
import publicadores from "../dadosMockados/publicadores.js";
import { cartaoLivro } from "../componentes/cartaoLivro.js";
import { escaparHTML } from "../utilidades.js";

const inicio = (app) => {
  const categorias = [...new Set(livros.map((livro) => livro.categoria))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const destaques = livros.slice(0, 3);

  app.innerHTML = `
    <section class="screen" aria-labelledby="inicio-titulo">
      <header class="home-header">
        <p class="home-brand"><i data-lucide="book-open" aria-hidden="true"></i> Troca de Livros</p>
        <h1 class="page-title" id="inicio-titulo">Que livro você procura?</h1>
        <p>Encontre livros usados e veja o que cada pessoa aceita em troca.</p>
        <form class="home-search" id="form-busca-inicio" role="search">
          <label class="home-search__input-wrap">
            <i data-lucide="search" aria-hidden="true"></i>
            <input name="q" type="search" placeholder="Título, autor ou matéria" aria-label="Buscar livros por título, autor ou matéria" />
          </label>
          <button class="button" type="submit">Buscar</button>
        </form>
      </header>

      <section class="category-section" aria-labelledby="categorias-titulo">
        <h2 class="section-title" id="categorias-titulo">Categorias</h2>
        <ul class="category-list">
          ${categorias.map((categoria) => {
            const consulta = new URLSearchParams({ categoria });
            return `<li><a class="category-link" href="#resultados?${consulta.toString()}">${escaparHTML(categoria)}</a></li>`;
          }).join("")}
        </ul>
      </section>

      <section class="featured-section" aria-labelledby="destaques-titulo">
        <div class="featured-heading">
          <h2 class="section-title" id="destaques-titulo">Livros disponíveis</h2>
          <a class="text-link" href="#resultados">Ver todos</a>
        </div>
        <div class="book-list">
          ${destaques.map((livro) => cartaoLivro(livro, publicadores.find((pessoa) => pessoa.id === livro.publicadorId))).join("")}
        </div>
      </section>
    </section>
  `;

  app.querySelector("#form-busca-inicio").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const valor = new FormData(evento.currentTarget).get("q").toString().trim();
    const consulta = new URLSearchParams();
    if (valor) consulta.set("q", valor);
    window.location.hash = `#resultados?${consulta.toString()}`;
  });
};

export default {
  url: "#inicio",
  label: "Início",
  icon: "house",
  pagina: inicio
};
