import "../../css/paginas/publicar.css";
import livros from "../dadosMockados/livros.js";
import { normalizarTexto } from "../utilidades.js";

const categorias = ["Literatura", "Tecnologia", "História", "Design", "Fantasia", "Ciências", "Ciências humanas"];

const publicar = (app) => {
  app.innerHTML = `
    <section class="screen" aria-labelledby="publicar-titulo">
      <h1 class="page-title" id="publicar-titulo">Publicar um livro</h1>
      <p class="publish-intro">Preencha para simular. A publicação não será salva nem aparecerá nos resultados.</p>
      <form class="publish-form" id="form-publicar">
        <div class="publish-form__row">
          <div class="form-field">
            <label for="titulo-livro">Título *</label>
            <input id="titulo-livro" name="titulo" required placeholder="Ex.: Capitães da Areia" />
          </div>
          <div class="form-field">
            <label for="autor-livro">Autor(a) *</label>
            <input id="autor-livro" name="autor" required placeholder="Nome do(a) autor(a)" />
          </div>
        </div>
        <div class="publish-form__row">
          <div class="form-field">
            <label for="categoria-livro">Categoria *</label>
            <select id="categoria-livro" name="categoria" required>
              <option value="">Escolha</option>
              ${categorias.map((categoria) => `<option value="${categoria}">${categoria}</option>`).join("")}
            </select>
          </div>
          <div class="form-field">
            <label for="estado-livro">Conservação *</label>
            <select id="estado-livro" name="estado" required>
              <option value="">Escolha</option>
              <option value="Muito bom">Muito bom</option>
              <option value="Bom">Bom</option>
              <option value="Aceitável">Aceitável</option>
            </select>
          </div>
        </div>
        <div class="publish-form__row">
          <div class="form-field">
            <label for="materia-livro">Matéria ou assunto *</label>
            <input id="materia-livro" name="disciplina" required placeholder="Ex.: História do Brasil" />
          </div>
          <div class="form-field">
            <label for="local-livro">Cidade e ponto de encontro *</label>
            <input id="local-livro" name="local" required placeholder="Biblioteca do campus, Mogi das Cruzes" />
          </div>
        </div>
        <div class="form-field">
          <label for="descricao-livro">Descrição do estado *</label>
          <textarea id="descricao-livro" name="descricao" required placeholder="Fale de capa, páginas, anotações e marcas de uso."></textarea>
        </div>
        <div class="form-field">
          <label for="proposta-livro">O que aceita em troca? *</label>
          <textarea id="proposta-livro" name="proposta" required placeholder="Ex.: Procuro livros de literatura ou história."></textarea>
        </div>
        <p class="form-feedback" id="publicar-feedback" aria-live="polite"></p>
        <div class="publish-form__actions">
          <button class="button" type="submit">Simular publicação</button>
          <a class="button button-secondary" href="#resultados">Cancelar</a>
        </div>
      </form>
    </section>
  `;

  app.querySelector("#form-publicar").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    const titulo = dados.get("titulo").toString().trim();
    const autor = dados.get("autor").toString().trim();
    const feedback = app.querySelector("#publicar-feedback");
    feedback.classList.remove("form-feedback--success");

    if (!titulo || !autor) {
      feedback.textContent = "Informe título e autor.";
      return;
    }

    const duplicado = livros.find((livro) =>
      normalizarTexto(livro.titulo) === normalizarTexto(titulo)
      && normalizarTexto(livro.autor) === normalizarTexto(autor)
    );

    if (duplicado) {
      feedback.textContent = "Já existe um anúncio de demonstração com esse título e autor.";
      return;
    }

    feedback.classList.add("form-feedback--success");
    feedback.textContent = "Simulação concluída. Nada foi salvo nem adicionado aos resultados.";
  });
};

export default {
  url: "#publicar",
  label: "Publicar",
  icon: "plus-circle",
  pagina: publicar
};
