import "../../css/navbar/navbar.css";
import { escaparHTML } from "../utilidades.js";

function renderNavbar(rotas, rotaAtiva) {
  const navbar = document.querySelector("#navbar");
  const links = rotas
    .filter((rota) => rota.label !== "")
    .map((rota) => {
      const ativa = rota.url === rotaAtiva ? ' aria-current="page"' : "";
      return `
        <li class="nav-item">
          <a class="nav-icon" href="${escaparHTML(rota.url)}"${ativa}>
            <i data-lucide="${escaparHTML(rota.icon)}" aria-hidden="true"></i>
            <span>${escaparHTML(rota.label)}</span>
          </a>
        </li>
      `;
    })
    .join("");

  navbar.innerHTML = `
    <nav aria-label="Navegação principal">
      <ul class="navbar-bottom">${links}</ul>
    </nav>
  `;
}

export { renderNavbar };
