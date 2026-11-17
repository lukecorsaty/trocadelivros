import "../css/style.css";
import { createIcons, icons } from "lucide";
import { rotas } from "./rotas/rotas.js";
import { renderNavbar } from "./navbar/navbar.js";

const app = document.querySelector("#app");

function renderApp() {
  const endereco = window.location.hash || "#inicio";
  const [url, queryString = ""] = endereco.split("?");
  const parametros = new URLSearchParams(queryString);
  const rota = rotas.find((tela) => tela.url === url);
  const rotaFallback = rotas.find((tela) => tela.url === "#rota-inexistente");
  const telaAtual = rota ?? rotaFallback;

  renderNavbar(rotas, rota ? rota.url : "#rota-inexistente");
  telaAtual.pagina(app, parametros);
  createIcons({ icons });
}

window.addEventListener("hashchange", renderApp);
renderApp();
