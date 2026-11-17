import "../../css/componentes/cartaoLivro.css";
import { escaparHTML } from "../utilidades.js";

export function cartaoLivro(livro, publicador) {
  const titulo = escaparHTML(livro.titulo);
  const id = Number(livro.id);

  return `
    <article class="book-card">
      <div class="book-card__tags">
        <span class="pill">${escaparHTML(livro.categoria)}</span>
        <span class="pill">${escaparHTML(livro.estado)}</span>
      </div>
      <h3 class="book-card__title"><a href="#detalhe?id=${id}">${titulo}</a></h3>
      <p class="book-card__meta">${escaparHTML(livro.autor)} · ${escaparHTML(livro.disciplina)}</p>
      <p class="book-card__meta">Aceita: ${escaparHTML(livro.proposta)}</p>
      <div class="book-card__footer">
        <p class="book-card__owner">${escaparHTML(publicador?.nome ?? "Leitor")} · ${escaparHTML(livro.local)}</p>
        <a class="book-card__cta" href="#detalhe?id=${id}" aria-label="Ver detalhes de ${titulo}">Ver detalhes →</a>
      </div>
    </article>
  `;
}
