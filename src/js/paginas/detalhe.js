import "../../css/paginas/detalhe.css";
import livros from "../dadosMockados/livros.js";
import publicadores from "../dadosMockados/publicadores.js";
import usuarios from "../dadosMockados/usuarios.js";
import { escaparHTML, dataLegivel } from "../utilidades.js";

const detalhe = (app, params = new URLSearchParams()) => {
  const id = Number(params.get("id"));
  const livro = livros.find((item) => item.id === id);

  if (!livro) {
    app.innerHTML = `
      <section class="screen" aria-labelledby="detalhe-vazio-titulo">
        <h1 class="page-title" id="detalhe-vazio-titulo">Livro não encontrado</h1>
        <p>Confira o endereço ou volte à lista de resultados.</p>
        <a class="button" href="#resultados">Voltar aos resultados</a>
      </section>
    `;
    return;
  }

  const publicador = publicadores.find((pessoa) => pessoa.id === livro.publicadorId);
  const usuario = usuarios.find((pessoa) => pessoa.id === livro.usuarioId);
  const nomePublicador = escaparHTML(publicador?.nome ?? usuario?.nome ?? "Leitor da comunidade");

  app.innerHTML = `
    <section class="screen" aria-labelledby="detalhe-titulo">
      <a class="text-link" href="#resultados">← Voltar aos resultados</a>
      <article class="detail-card">
        <span class="pill">${escaparHTML(livro.categoria)} · ${escaparHTML(livro.disciplina)}</span>
        <h1 class="page-title" id="detalhe-titulo">${escaparHTML(livro.titulo)}</h1>
        <p>Autor(a): <strong>${escaparHTML(livro.autor)}</strong></p>
        <div class="detail-facts">
          <span class="pill">Conservação: ${escaparHTML(livro.estado)}</span>
          <span class="pill">Publicado em ${escaparHTML(dataLegivel(livro.criadoEm))}</span>
        </div>
        <p>${escaparHTML(livro.descricao)}</p>
        <div class="detail-proposal">
          <strong>O que aceita em troca</strong>
          <span>${escaparHTML(livro.proposta)}</span>
        </div>
        <div class="detail-owner">
          <span>Publicado por <strong>${nomePublicador}</strong></span>
          <span>Local: ${escaparHTML(livro.local)}${publicador?.pontoEncontro ? ` · encontro sugerido: ${escaparHTML(publicador.pontoEncontro)}` : ""}</span>
        </div>
        <div class="detail-actions">
          <a class="button" href="#publicar">Publicar uma troca</a>
          <a class="button button-secondary" href="#minha-conta">Minha conta</a>
        </div>
        <p class="form-hint">Demonstração: o aplicativo não tem chat ou contato real.</p>
      </article>
    </section>
  `;
};

export default {
  url: "#detalhe",
  label: "",
  icon: "book-open",
  pagina: detalhe
};
