import "../../css/paginas/rota-inexistente.css";

const rotaInexistente = (app) => {
  app.innerHTML = `
    <section class="screen not-found-card" aria-labelledby="rota-inexistente-titulo">
      <p class="not-found-code">404</p>
      <h1 class="page-title" id="rota-inexistente-titulo">Página não encontrada</h1>
      <p>Esse endereço não existe no aplicativo.</p>
      <a class="button" href="#inicio">Voltar ao início</a>
    </section>
  `;
};

export default {
  url: "#rota-inexistente",
  label: "",
  icon: "",
  pagina: rotaInexistente
};
