import "../../css/paginas/conta.css";
import livros from "../dadosMockados/livros.js";
import publicadores from "../dadosMockados/publicadores.js";
import usuarios from "../dadosMockados/usuarios.js";
import { cartaoLivro } from "../componentes/cartaoLivro.js";
import { escaparHTML } from "../utilidades.js";

const usuarioFixoId = 1;

const minhaConta = (app, params = new URLSearchParams()) => {
  const usuarioId = Number(params.get("usuario")) || usuarioFixoId;
  const usuario = usuarios.find((pessoa) => pessoa.id === usuarioId) ?? usuarios.find((pessoa) => pessoa.id === usuarioFixoId);
  const publicacoes = livros.filter((livro) => livro.usuarioId === usuario.id);

  app.innerHTML = `
    <section class="screen" aria-labelledby="conta-titulo">
      <h1 class="page-title" id="conta-titulo">Minha conta</h1>
      <section class="account-summary" aria-label="Dados do perfil">
        <div class="account-summary__details">
          <h2 class="section-title">${escaparHTML(usuario.nome)}</h2>
          <p>${escaparHTML(usuario.campus)} · ${escaparHTML(usuario.cidade)}</p>
          <p class="muted">${escaparHTML(usuario.bio)}</p>
        </div>
        <span class="pill">${publicacoes.length} ${publicacoes.length === 1 ? "livro publicado" : "livros publicados"}</span>
      </section>
      <section class="screen" aria-labelledby="conta-livros-titulo">
        <div class="account-books-heading">
          <h2 class="section-title" id="conta-livros-titulo">Meus livros publicados</h2>
          <a class="button" href="#publicar">Publicar</a>
        </div>
        ${publicacoes.length === 0 ? `
          <div class="empty-state" role="status">
            <h3>Você ainda não publicou um livro.</h3>
            <p>Quando adicionar um título, ele aparecerá nesta lista.</p>
            <a class="button" href="#publicar">Publicar primeiro livro</a>
          </div>
        ` : `
          <div class="book-list">
            ${publicacoes.map((livro) => cartaoLivro(livro, publicadores.find((pessoa) => pessoa.id === livro.publicadorId))).join("")}
          </div>
        `}
        <p class="account-demo-link muted">Estado vazio de demonstração: <a class="text-link" href="#minha-conta?usuario=5">ver conta sem anúncios</a>.</p>
      </section>
    </section>
  `;
};

export default {
  url: "#minha-conta",
  label: "Minha conta",
  icon: "user-round",
  pagina: minhaConta
};
